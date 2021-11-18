import { Action, ActionCreator, ActionReducer } from '@ngrx/store/src/models';

import {
  createSearchActions,
  SearchEntityStateAdapter,
} from './search.actions';
import { createSearchReducer } from './search.reducer';
import { createSearchSelectors, SearchSelectors } from './search.selectors';
import { SearchState } from './search.models';
import { createSearchOns } from './search.ons';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';

export interface SearchAdapter<T> {
  getActions: () => SearchEntityStateAdapter<T>;
  getSelectors: () => SearchSelectors<T, SearchState<T>>;
  getReducer: () => ActionReducer<SearchState<T>, Action>;
  getInitialState: () => SearchState<T>;
  getOns: () => ReducerTypes<SearchState<T>, readonly ActionCreator[]>[];
}

export function createSearchAdapter<T>(options: {
  stateKey: string;
  type: string;
  primaryKey?: string;
  initialState?: Partial<SearchState<T>>;
}): SearchAdapter<T> {
  const { type, stateKey, primaryKey = 'id', initialState } = options;
  const currentState: SearchState<T> = {
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
    ...initialState,
  };
  const actions = createSearchActions<T>(type);
  const adapterOns = createSearchOns(currentState, actions);
  const reducer = createSearchReducer<T>(currentState, adapterOns);
  const selectors = createSearchSelectors<T>(stateKey);

  return {
    getActions: () => actions,
    getSelectors: () => selectors,
    getReducer: () => reducer,
    getInitialState: () => currentState,
    getOns: () => adapterOns,
  };
}
