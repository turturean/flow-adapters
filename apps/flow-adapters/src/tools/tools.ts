import { Action, ActionReducer } from '@ngrx/store';

export function mergeReducers(
  ...reducers: ActionReducer<any, Action>[]
): ActionReducer<any, Action> {
  const mergedReducers = (state: any, action: Action) => {
    if (reducers.length === 0) {
      throw new Error('At least one reducer was expected');
    }
    const newState = reducers.reduce((initialState, reducer) => {
      const intermediaryState = reducer(initialState, action);
      return intermediaryState;
    }, state);

    return newState;
  };
  return mergedReducers;
}
