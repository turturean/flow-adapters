import { Action, ActionReducer, INIT } from '@ngrx/store';

export function mergeReducers<State>(reducers: ActionReducer<any, Action>[] = []): ActionReducer<State, Action> {
  if (reducers.length === 0) {
    console.error('At least one reducer it is required');
  }

  return (state: State | undefined, action: Action): State => {
    if (action.type === INIT) {
      // Call all reducer with initial states
      return reducers.reduce((initialState, reducer) => {
        return { ...initialState, ...reducer(state, action) };
      }, state) as State;
    } else {
      const newState = reducers.reduce((initialState, reducer) => {
        return reducer(initialState, action);
      }, state);

      return newState ? (newState as State) : (state as State);
    }
  };
}
