import { createSearchActions } from './actions';
import { createSearchReducer } from './reducer';
import { createSearchSelectors } from './selectors';
import { SearchActions, SearchState } from './models';
import { capitalizeObjectPropsWithPrefix } from '../tools/tools';
import { ActionTypes, Adapter, AdapterConfig, SelectorTypes } from './../types';

export type SearchAdapterOptions<AdapterName, AdapterState> = AdapterConfig<
  AdapterName,
  AdapterState
> & {
  primaryKey?: string;
};

export function createSearchAdapter<
  Entity extends { [key: string]: any },
  AdapterName extends string = string,
  AdapterState extends SearchState<Entity> = SearchState<Entity>
>(
  options: SearchAdapterOptions<AdapterName, AdapterState>
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
  const actions = createSearchActions<Entity>(type);
  const reducer = createSearchReducer<AdapterState, Entity>(
    initialState,
    actions
  );
  const selectors = createSearchSelectors(stateKey, initialState, type);

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
