import {createSelectorsFactory, IEntitySelectors} from './selectors';
import {
  createEntityActionsFactory,
  IEntityActions,
  IEntityTypes,
} from './actions';
import {createInitialStateFactory, IEntityState} from "./state";
import {createEntityReducerFactory} from "./reducer";

export interface IEntityAdapter {

  getInitialState<T>(): IEntityState<T>;

  getSelectors<T>(state): IEntitySelectors<T>;

  getReducer(types?);

  getActionTypes(): IEntityTypes;

  getActions(): IEntityActions;
}

export function createEntityAdapter(options: { type?: string; mapId? } = {}): IEntityAdapter {
  const {type, mapId} = options;

  const initialState = createInitialStateFactory();
  const selectors = createSelectorsFactory();
  const actions = createEntityActionsFactory(type);
  const reducer = createEntityReducerFactory(actions.getActionTypes(), mapId);

  return {
    ...selectors,
    ...initialState,
    ...reducer,
    ...actions
  }
}
