import {map, find, merge, isEmpty, values, flow, isArray, reduce} from 'lodash';
import {ActionReducer} from '@ngrx/store';
import {
  combineFlatReducers,
  createReducers,
  flowConfiguration,
} from '../helpers/reducer';
import {ISearchPaginationTypes} from "./actions";
import {List} from "immutable";

type SearchPaginationConfig = {
  action: [keyof ISearchPaginationTypes] | keyof ISearchPaginationTypes,
  reducers: [() => {}],
  targetAction: string[] | string
}

function searchPaginationSuccess(mapId = 'id') {

  return function (state, action) {
    const {totals, entities} = action.payload;
    const entityIds = map(entities, (row) => row[mapId] && row[mapId].toString());

    return state.merge({
      ids: List(entityIds),
      loading: false,
      totals
    });
  };
}

function searchPagination(mapId = 'id') {

  return function (state, action) {
    const {query, pagination} = action.payload;
    let newState = {};

    if (pagination) {

      newState = merge(newState, {
        page: pagination.page,
        limit: pagination.limit
      });
    } else {

      newState = merge(newState, {
        page: 1,
        limit: 10,
        totals: 0
      });
    }

    if (query) {

      newState = merge(newState, {query});
    }

    return state.merge({
      loading: true
    }, newState);
  }
}

function searchPaginationError(mapId) {

  return function (state, action) {
    return state.merge({
      loading: false
    });
  }
}

function searchClear() {

  return function (state, action) {
    console.log('clear action');
    return state;
  }
}

export function createSearchPaginationReducerFactory(actionTypes: ISearchPaginationTypes, ...options) {
  return {

    getReducer(searchPaginationConfigs?: [SearchPaginationConfig]): ActionReducer<any, any> {

      const defaultConfiguration = [{
        action: actionTypes.SEARCH,
        reducers: searchPagination
      }, {
        action: actionTypes.SEARCH_SUCCESS,
        reducers: searchPaginationSuccess
      }, {
        action: actionTypes.SEARCH_ERROR,
        reducers: searchPaginationError
      }, {
        action: actionTypes.CLEAR,
        reducers: searchClear
      }];

      const newConfiguration = flowConfiguration(defaultConfiguration, searchPaginationConfigs);

      const searchPaginationReducers = reduce(newConfiguration, (result, {reducers, action}) => {

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

      const searchReducers = combineFlatReducers(searchPaginationReducers);

      return function (state, action) {
        return searchReducers(state, action);
      }
    }
  };
}
