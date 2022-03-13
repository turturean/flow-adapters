import { createSearchActions } from './actions';
import { createSearchReducer } from './reducer';
import {
  SearchActions,
  SearchAdapterOptions,
  SearchConfig,
  SearchPaginationState,
  SearchQueryState,
  SearchSortState,
  SearchState,
} from './models';
import { createSearchSelectors } from './selectors';
import { FlowReducer, FlowSelector } from '../types';

export function createSearchAdapter<
  Entity extends { [key: string]: any },
  AdapterName extends string,
  HasPagination extends boolean,
  HasQuery extends boolean,
  HasSort extends boolean
>(
  options: SearchAdapterOptions<
    AdapterName,
    SearchState<Entity, HasPagination, HasQuery, HasSort>,
    SearchConfig<HasPagination, HasQuery, HasSort>
  >
) {
  const { type, stateKey } = options;
  const initialState: SearchState<Entity, HasPagination, HasQuery, HasSort> = {
    isLoading: false,
    error: null,
    ids: [],
    entities: {},
    ...(options.hasSort ? ({ sort: null } as SearchSortState<true>) : null),
    ...(options.hasQuery ? ({ query: {} } as SearchQueryState<true>) : null),
    ...(options.hasPagination ? ({ page: 1, perPage: 10, total: 0 } as SearchPaginationState<true>) : null),
    ...options.initialState,
  };
  const actions = createSearchActions(type);
  const selectors = createSearchSelectors(stateKey, initialState);
  const reducer = createSearchReducer(initialState, actions, options);

  return {
    getInitialState: () => initialState as SearchState<Entity, HasPagination, HasQuery, HasSort>,
    getActions: () => actions as SearchActions<Entity, HasPagination, HasQuery>,
    getSelectors: () => selectors as FlowSelector<SearchState<Entity, HasPagination, HasQuery, HasSort>>,
    getReducer: () => reducer as FlowReducer<SearchState<Entity, HasPagination, HasQuery, HasSort>>,
  };
}
