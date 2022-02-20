import { createSearchWithPaginationActions } from './actions';
import { createSearchWithPaginationReducer } from './reducer';
import { createSearchWithPaginationSelectors } from './selectors';
import {
  SearchActions,
  SearchWithPaginationAdapterOptions,
  SearchWithPaginationState,
} from './models';
import { capitalizeObjectPropsWithPrefix } from '../tools/tools';
import { ActionTypes, Adapter, SelectorTypes } from './../types';

export function createSearchWithPaginationAdapter<
  Entity extends { [key: string]: any },
  AdapterName extends string = string,
  AdapterState extends SearchWithPaginationState<Entity> = SearchWithPaginationState<Entity>
>(
  options: SearchWithPaginationAdapterOptions<AdapterName, AdapterState>
): ActionTypes<AdapterName, SearchActions<Entity>> &
  SelectorTypes<AdapterState, AdapterName> &
  Adapter<SearchActions<Entity>, AdapterState, AdapterName> {
  const { type, stateKey, primaryKey = 'id' } = options;
  // @ts-ignore
  const initialState: AdapterState = {
    perPage: 10,
    page: 1,
    isLoading: false,
    total: 0,
    query: {},
    error: null,
    ids: [],
    entities: {},
    primaryKey: primaryKey,
    sort: null,
    ...options.initialState,
  };
  const actions = createSearchWithPaginationActions<Entity>(type);
  const reducer = createSearchWithPaginationReducer<AdapterState, Entity>(
    initialState,
    actions
  );
  const selectors = createSearchWithPaginationSelectors(
    stateKey,
    initialState,
    type
  );

  return {
    getActions: () => actions,
    ...capitalizeObjectPropsWithPrefix<ActionTypes<AdapterName, AdapterState>>(
      actions,
      type
    ),
    getSelectors: () => selectors,
    ...selectors,
    getReducer: () => reducer,
    getInitialState: () => initialState,
  };
}
