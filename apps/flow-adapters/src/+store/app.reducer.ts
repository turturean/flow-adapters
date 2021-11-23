import {
  Product,
  productAdapter,
  selectAdapter,
  User,
  userAdapter,
} from './app.adapter';
import { mergeReducers } from '../tools/tools';
import { SearchState } from 'flow-adapters-search';
import { SelectState } from 'flow-adapters-select';
import { createReducer } from '@ngrx/store';

// // use directly reducer
// export interface AppState {
//   userSelection: SelectState,
//   users: SearchState<any>,
//   products: SearchState<any>;
// }
// export const reducers = {
//   users: userAdapter.getReducer(),
//   selections: selectAdapter.getReducer(),
//   products: productAdapter.getReducer(),
// };

// // Solution 1 combine reducers into 1 state
// export interface AppState {
//   users: SearchState<any> | SelectState,
//   products: SearchState<any>;
// }
//
// const userReducer = mergeReducers(
//   selectAdapter.getReducer(),
//   userAdapter.getReducer(),
// );
//
// export const reducers = {
//   users: userReducer,
//   products: productAdapter.getReducer(),
// };

// Solution combine reducers into 1 state
export interface AppState {
  users: SearchState<User> | SelectState;
  products: SearchState<Product>;
}

const userReducer = createReducer(
  {
    ...selectAdapter.getInitialState(),
    ...userAdapter.getInitialState(),
  },
  ...selectAdapter.getOns(),
  // @ts-ignore
  ...userAdapter.getOns()
);

export const reducers = {
  users: userReducer,
  products: productAdapter.getReducer(),
};
