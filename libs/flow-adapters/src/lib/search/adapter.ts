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
import { capitalizeObjectPropsWithPrefix } from '../tools/tools';
import { ActionTypes, Adapter, SelectorTypes } from '../types';

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
): ActionTypes<AdapterName, SearchActions<Entity, HasPagination, HasQuery>> &
  SelectorTypes<SearchState<Entity, HasPagination, HasQuery>, AdapterName> &
  Adapter<
    SearchActions<Entity, HasPagination, HasQuery>,
    SearchState<Entity, HasPagination, HasQuery>,
    AdapterName
  > {
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
  const actions = createSearchActions<
    Entity,
    HasPagination,
    HasQuery,
    AdapterName
  >(type);
  const selectors = createSearchSelectors<
    Entity,
    HasPagination,
    HasQuery,
    AdapterName
  >(stateKey, initialState, type);
  const reducer = createSearchReducer<
    Entity,
    HasPagination,
    HasQuery,
    AdapterName
  >(initialState, actions, options);

  return {
    ...selectors,
    getSelectors: () => selectors,
    ...capitalizeObjectPropsWithPrefix<
      ActionTypes<AdapterName, SearchActions<Entity, HasPagination, HasQuery>>
    >(actions, type),
    getActions: () => actions,
    getReducer: () => reducer,
    getInitialState: () => initialState,
  };
}
