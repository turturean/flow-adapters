import {
  Product,
  productAdapter,
  selectAdapter,
  USER_STATE_KEY,
  userAdapter,
  UserState,
} from './app.adapter';
import { SearchState } from 'flow-adapters-search';
import { Action, ActionReducer } from '@ngrx/store/src/models';

function mergeReducers<TState>(
  reducers: ActionReducer<any, Action>[] = []
): ActionReducer<TState, Action> {
  if (reducers.length === 0) {
    console.error('At least one reducer it is required');
  }

  return (state: TState | undefined, action: Action): TState => {
    const newState = reducers.reduce((initialState, reducer) => {
      return reducer(initialState, action);
    }, state);

    return newState ? (newState as TState) : (state as TState);
  };
}

// Solution combine reducers into 1 state
export interface AppState {
  [USER_STATE_KEY]: UserState;
  products: SearchState<Product>;
}

const userReducer = mergeReducers<UserState>([
  selectAdapter.getReducer(),
  userAdapter.getReducer(),
]);

export const reducers = {
  [USER_STATE_KEY]: userReducer,
  products: productAdapter.getReducer(),
};
