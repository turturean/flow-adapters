import { createSearchActions } from './actions';
import { createSearchReducer } from './reducer';
import { createSearchSelectors } from './selectors';
import {
  SearchActions,
  SearchAdapterOptions,
  SearchConfig,
  SearchPaginationState,
  SearchQueryState,
  SearchState,
} from './models';
import { FlowSelectorTypes } from '../types';
import { Action, ActionReducer } from '@ngrx/store/src/models';

export function createSearchAdapter<
  Entity extends { [key: string]: any },
  HasPagination extends boolean,
  HasQuery extends boolean,
  AdapterName extends string
>(
  options: SearchAdapterOptions<
    AdapterName,
    SearchState<Entity, HasPagination, HasQuery>,
    SearchConfig<HasPagination, HasQuery>
  >
) {
  const {
    type,
    stateKey,
    primaryKey = 'id',
    hasQuery,
    hasPagination,
  } = options;
  const initialState: SearchState<Entity, HasPagination, HasQuery> = {
    isLoading: false,
    error: null,
    ids: [],
    entities: {},
    primaryKey: primaryKey,
    sort: null,
    ...(hasQuery ? ({ query: {} } as SearchQueryState<true>) : null),
    ...(hasPagination
      ? ({ page: 1, perPage: 10, total: 0 } as SearchPaginationState<true>)
      : null),
    ...options.initialState,
  };
  const actions = createSearchActions(type);
  const selectors = createSearchSelectors(stateKey, initialState);
  const reducer = createSearchReducer(initialState, actions, options);

  return {
    getSelectors: () =>
      selectors as FlowSelectorTypes<
        SearchState<Entity, HasPagination, HasQuery>
      >,
    getActions: () => actions as SearchActions<Entity, HasPagination, HasQuery>,
    getReducer: () =>
      reducer as ActionReducer<
        SearchState<Entity, HasPagination, HasQuery>,
        Action
      >,
    getInitialState: () =>
      initialState as SearchState<Entity, HasPagination, HasQuery>,
  };
}
