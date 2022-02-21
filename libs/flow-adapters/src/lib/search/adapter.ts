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
import { ActionTypes, SelectorTypes } from '../types';

export function createSearchAdapter<
  Entity extends { [key: string]: any },
  HasPagination extends boolean = false,
  HasQuery extends boolean = false,
  AdapterName extends string = string,
  AdapterState extends SearchState<Entity> &
    SearchPaginationState<HasPagination> &
    SearchQueryState<HasQuery> = SearchState<Entity> &
    SearchPaginationState<HasPagination> &
    SearchQueryState<HasQuery>
>(
  options: SearchAdapterOptions<
    AdapterName,
    AdapterState,
    SearchConfig<HasPagination, HasQuery>
  >
): ActionTypes<AdapterName, SearchActions<Entity, HasPagination, HasQuery>> &
  SelectorTypes<AdapterState, AdapterName> {
  // Adapter<
  //   SearchActions<Entity, HasPagination, HasQuery>,
  //   AdapterState,
  //   AdapterName
  // >
  const {
    type,
    stateKey,
    primaryKey = 'id',
    hasQuery,
    hasPagination,
  } = options;

  // @ts-ignore
  const initialState: AdapterState = {
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
  const actions = createSearchActions<Entity, HasPagination, HasQuery>(type);
  // const reducer = createSearchReducer<Entity, HasPagination, HasQuery>(
  //   initialState,
  //   actions,
  //   options
  // );
  const selectors = createSearchSelectors(stateKey, initialState, type);

  return {
    getActions: () => actions,
    ...capitalizeObjectPropsWithPrefix<ActionTypes<AdapterName, AdapterState>>(
      actions,
      type
    ),
    getSelectors: () => selectors,
    ...selectors,
    // getReducer: () => reducer,
    // getInitialState: () => initialState,
  };
}

const {} = createSearchAdapter({
  stateKey: 'user',
  type: 'users',
  hasQuery: true,
  hasPagination: false,
  initialState: {},
});
