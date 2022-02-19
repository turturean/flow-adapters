import {
  Product,
  PRODUCT_STATE_KEY,
  productAdapter,
  selectAdapter,
  USER_STATE_KEY,
  userAdapter,
  UserState,
} from './app.adapter';
import { createReducer, on } from '@ngrx/store';
import { SearchState } from 'flow-adapters';

import { mergeReducers } from '../tools/tools';
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
  selectAdapter.getReducer(),
  userAdapter.getReducer(),
  appReducer,
]);

export const reducers = {
  [USER_STATE_KEY]: userReducer,
  [PRODUCT_STATE_KEY]: productAdapter.getReducer(),
};
