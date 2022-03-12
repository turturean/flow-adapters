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
import { FlowAdapter } from '../types';

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
): FlowAdapter<
  SearchActions<Entity>,
  SearchState<Entity, HasPagination, HasQuery>
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
  const actions = createSearchActions<Entity, AdapterName>(type);
  const selectors = createSearchSelectors<Entity, HasPagination, HasQuery>(
    stateKey,
    initialState
  );
  const reducer = createSearchReducer<
    Entity,
    AdapterName,
    HasPagination,
    HasQuery
  >(initialState, actions, options);

  return {
    getSelectors: () => selectors,
    getActions: () => actions,
    getReducer: () => reducer,
    getInitialState: () => initialState,
  };
}
