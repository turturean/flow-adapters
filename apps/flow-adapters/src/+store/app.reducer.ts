import {
  Product,
  PRODUCT_STATE_KEY,
  productAdapter,
  selectAdapter,
  USER_STATE_KEY,
  userAdapter,
  UserState,
} from './app.adapter';
import { SearchState } from 'flow-adapters-search';

import { mergeReducers } from '../tools/tools';
import { createReducer, on } from '@ngrx/store';
import { logOut } from './app.actions';

const initialState = {};

export const appReducer = createReducer(
  initialState,
  on(logOut, (state) => {
    return state;
  })
);

export interface AppState {
  [USER_STATE_KEY]: UserState;
  [PRODUCT_STATE_KEY]: SearchState<Product>;
}

const userReducer = mergeReducers<UserState>([
  selectAdapter.reducer,
  userAdapter.reducer,
  appReducer,
]);

export const reducers = {
  [USER_STATE_KEY]: userReducer,
  [PRODUCT_STATE_KEY]: productAdapter.reducer,
};
