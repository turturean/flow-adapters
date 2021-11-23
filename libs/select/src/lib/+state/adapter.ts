import { Action, ActionCreator, ActionReducer } from '@ngrx/store/src/models';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';

import { createSelectActions, SelectStateAdapter } from './actions';
import { createSelectReducer } from './reducer';
import { createSelectSelectors } from './selectors';
import { SelectSelectors, SelectState } from './models';
import { createSelectOns } from './ons';

export interface Adapter<T, S extends SelectState<T>> {
  getActions: () => SelectStateAdapter<T>;
  getSelectors: () => SelectSelectors<T, S>;
  getReducer: () => ActionReducer<S, Action>;
  getInitialState: () => S;
  getOns: () => ReducerTypes<S, readonly ActionCreator[]>[];
}

export function createSelectAdapter<T = string>(
  options: {
    stateKey: string;
    type: string;
    initialState?: Partial<SelectState<T>>;
  } = {
    stateKey: '',
    type: '',
  }
): Adapter<T, SelectState<T>> {
  const { type, stateKey, initialState } = options;
  const currentState: SelectState<T> = {
    selectedItems: [],
    ...initialState,
  };
  const actions = createSelectActions<T>(type);
  const adapterOns = createSelectOns(currentState, actions);
  const reducer = createSelectReducer<T>(currentState, adapterOns);
  const selectors = createSelectSelectors<T>(stateKey);

  return {
    getActions: () => actions,
    getSelectors: () => selectors,
    getReducer: () => reducer,
    getInitialState: () => currentState,
    getOns: () => adapterOns,
  };
}
