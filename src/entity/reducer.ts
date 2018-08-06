import {ActionReducer} from '@ngrx/store';
import {keyBy, reduce, isArray, map} from 'lodash';
import {IEntityTypes} from "./actions";
import {combineFlatReducers, createReducers, flowConfiguration} from "../helpers/reducer";

function entityUpdateSuccess(mapId = 'id') {

  return function (state, action) {
    const {entities} = action.payload;
    const mapped = keyBy(entities, mapId);

    return state.merge({
      entities: state.entities.merge(mapped)
    });
  };
}

function entityFindSuccess(mapId = 'id') {

  return function (state, action) {

    const {entities} = action.payload;
    const mapped = keyBy(entities, mapId);

    return state.merge({
      entities: state.entities.merge(mapped)
    });
  }
}

export function createEntityReducerFactory(actionTypes: IEntityTypes, ...options) {

  return {
    getReducer(configuration?): ActionReducer<any, any> {

      const defaultConfiguration = [{
        action: actionTypes.UPDATE_SUCCESS,
        reducers: entityUpdateSuccess
      }, {
        action: actionTypes.FIND_SUCCESS,
        reducers: entityFindSuccess
      }];

      const newConfiguration = flowConfiguration(defaultConfiguration, configuration);

      const entityReducers = reduce(newConfiguration, (result, {reducers, action}) => {

        if (isArray(action)) {
          const newReducer = map(action, (action) => {
            return createReducers(action, reducers, options);
          });

          return [...result, ...newReducer];
        } else {
          const newReducer = createReducers(action, reducers, options);

          return [...result, newReducer];
        }
      }, []);

      const combinedReducers = combineFlatReducers(entityReducers);

      return function (state, action) {
        return combinedReducers(state, action);
      }
    }
  };
}

