import { Action, ActionReducer, INIT } from '@ngrx/store';

export function mergeReducers<TState>(
  reducers: ActionReducer<any, Action>[] = []
): ActionReducer<TState, Action> {
  if (reducers.length === 0) {
    console.error('At least one reducer it is required');
  }

  return (state: TState | undefined, action: Action): TState => {
    if (action.type === INIT) {
      // Call all reducer with initial states
      return reducers.reduce((initialState, reducer) => {
        return { ...initialState, ...reducer(state, action) };
      }, state) as TState;
    } else {
      const newState = reducers.reduce((initialState, reducer) => {
        return reducer(initialState, action);
      }, state);

      return newState ? (newState as TState) : (state as TState);
    }
  };
}
