import { Action, ActionCreator, ActionReducer } from '@ngrx/store/src/models';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';

import { createSelectActions, SelectStateAdapter } from './actions';
import { createSelectReducer } from './reducer';
import { createSelectSelectors } from './selectors';
import { SelectSelectors, SelectState } from './models';
import { createSelectOns } from './ons';

export interface Adapter<T, S extends SelectState<T> = SelectState<T>> {
  getActions: () => SelectStateAdapter<T>;
  getSelectors: () => SelectSelectors<T, S>;
  getReducer: () => ActionReducer<S, Action>;
  getInitialState: () => S;
  getOns: () => ReducerTypes<S, readonly ActionCreator[]>[];
}

export function createSelectAdapter<
  T = string,
  S extends SelectState<T> = SelectState<T>
>(
  options: {
    stateKey: string;
    type: string;
    initialState?: Partial<S>;
  } = {
    stateKey: '',
    type: '',
  }
): Adapter<T, S> {
  const { type, stateKey } = options;
  // @ts-ignore
  const initialState: S = {
    selectedItems: [],
    ...options.initialState,
  };
  const actions = createSelectActions<T>(type);
  const ons = createSelectOns<S, T>(initialState, actions);
  const reducer = createSelectReducer<S>(initialState, ons);
  const selectors = createSelectSelectors<T>(stateKey);

  return {
    getActions: () => actions,
    getSelectors: () => selectors,
    getReducer: () => reducer,
    getInitialState: () => initialState,
    getOns: () => ons,
  };
}
