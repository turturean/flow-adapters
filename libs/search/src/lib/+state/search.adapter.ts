import { Action, ActionCreator, ActionReducer } from '@ngrx/store/src/models';

import {
  createSearchActions,
  SearchEntityStateAdapter,
} from './search.actions';
import { createSearchReducer } from './search.reducer';
import { createSearchSelectors } from './search.selectors';
import { SearchEntity, SearchSelectors, SearchState } from './search.models';
import { createSearchOns } from './search.ons';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';

export interface SearchAdapter<T> {
  getActions: () => SearchEntityStateAdapter<T>;
  getSelectors: () => SearchSelectors<T, SearchState<T>>;
  getReducer: () => ActionReducer<SearchState<T>, Action>;
  getInitialState: () => SearchState<T>;
  getOns: () => ReducerTypes<SearchState<T>, readonly ActionCreator[]>[];
}

export type SearchAdapterOptions<T> = {
  stateKey: string;
  type: string;
  primaryKey?: string;
  initialState?: Partial<SearchState<T>>;
};

export function createSearchAdapter<T extends SearchEntity = SearchEntity>(
  options: SearchAdapterOptions<T>
): SearchAdapter<T> {
  const { type, stateKey, primaryKey = 'id' } = options;
  const initialState: SearchState<T> = {
    perPage: 10,
    page: 1,
    isLoading: false,
    total: 0,
    query: {},
    error: null,
    ids: [],
    entities: {},
    primaryKey: primaryKey || 'id',
    sort: null,
    ...options.initialState,
  };
  const actions = createSearchActions<T>(type);
  const ons = createSearchOns(initialState, actions);
  const reducer = createSearchReducer<T>(initialState, ons);
  const selectors = createSearchSelectors<T>(stateKey);

  return {
    getActions: () => actions,
    getSelectors: () => selectors,
    getReducer: () => reducer,
    getInitialState: () => initialState,
    getOns: () => ons,
  };
}

export function createSearchTestAdapter<T>(options: SearchAdapterOptions<T>) {
  const { type, stateKey, primaryKey = 'id' } = options;

  const initialState: SearchState<T> = {
    perPage: 10,
    page: 1,
    isLoading: false,
    total: 0,
    query: {},
    error: null,
    ids: [],
    entities: {},
    primaryKey: primaryKey || 'id',
    sort: null,
    ...options.initialState,
  };
  const actions = createSearchActions<T>(type);
  const ons = createSearchOns(initialState, actions);
  const reducer = createSearchReducer<T>(initialState, ons);
  const selectors = createSearchSelectors<T>(stateKey);

  return {
    ...actions,
    ...selectors,
    reducer,
    initialState,
    ons,
  };
}
//
// function create<T>(options: T) {
//   // const newOptions = { label: 'Test' };
//
//   type val = typeof options[keyof typeof options];
//   type final = { [key in val as `user${string & key}`]: any };
//
//   return {} as final;
// }
//
