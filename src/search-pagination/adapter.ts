import {createInitialStateFactory, ISearchPaginationState} from './state';
import {createSelectorsFactory, ISearchPaginationSelectors} from './selectors';
import {createSearchPaginationReducerFactory} from './reducer';
import {
  createSearchPaginationActionsFactory,
  ISearchPaginationActions,
  ISearchPaginationTypes,
} from './actions';

export interface ISearchPaginationAdapter {

  getInitialState(): ISearchPaginationState;

  getSelectors(state): ISearchPaginationSelectors;

  getReducer(types?);

  getActionTypes(): ISearchPaginationTypes;

  getActions(): ISearchPaginationActions;
}

export function createSearchPaginationAdapter(options: { type?: string; mapId? } = {}): ISearchPaginationAdapter {
  const {type, mapId} = options;

  const initialState = createInitialStateFactory();
  const selectors = createSelectorsFactory();
  const actions = createSearchPaginationActionsFactory(type);
  const reducer = createSearchPaginationReducerFactory(actions.getActionTypes(), mapId);

  return {
    ...selectors,
    ...initialState,
    ...reducer,
    ...actions
  }
}
