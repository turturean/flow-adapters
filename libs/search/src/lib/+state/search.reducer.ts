import { createReducer, on } from '@ngrx/store';
import { Action, ActionCreator, ActionReducer } from '@ngrx/store/src/models';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';

import { SearchState } from './search.models';

export function createSearchReducer<T>(
  initialState: SearchState<T>,
  ons: ReducerTypes<SearchState<T>, readonly ActionCreator[]>[]
): ActionReducer<SearchState<T>, Action> {
  return createReducer(initialState, ...ons);
}
