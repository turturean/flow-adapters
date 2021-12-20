import { createReducer } from '@ngrx/store';
import { Action, ActionCreator, ActionReducer } from '@ngrx/store/src/models';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';

export function createSelectReducer<S>(
  initialState: S,
  ons: ReducerTypes<S, readonly ActionCreator[]>[]
): ActionReducer<S, Action> {
  return createReducer(initialState, ...ons);
}
