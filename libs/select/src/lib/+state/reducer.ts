import { createReducer } from '@ngrx/store';
import { Action, ActionCreator, ActionReducer } from '@ngrx/store/src/models';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';

import { SelectState } from './models';

export function createSelectReducer<T>(
  initialState: SelectState<T>,
  ons: ReducerTypes<SelectState<T>, readonly ActionCreator[]>[]
): ActionReducer<SelectState<T>, Action> {
  return createReducer(initialState, ...ons);
}
