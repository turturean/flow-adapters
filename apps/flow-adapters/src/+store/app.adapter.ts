import { createSearchAdapter, SearchState } from 'flow-adapters-search';
import { createSelectAdapter, SelectState } from 'flow-adapters-select';

export const USER_STATE_KEY = 'user';

export interface User {
  id: string;
  uniqId: string;
  firstName: string;
  lastName: string;
}
export type UserState = SearchState<User> & SelectState;
export const userAdapter = createSearchAdapter<User>({
  stateKey: USER_STATE_KEY,
  type: 'user',
  primaryKey: 'uniqId',
});
export const userActions = userAdapter.getActions();

export const selectAdapter = createSelectAdapter<string>({
  stateKey: USER_STATE_KEY,
  type: 'user',
});
export const selectActions = selectAdapter.getActions();

export type Product = {
  id: string;
  uniqId: string;
};
export const productAdapter = createSearchAdapter<Product>({
  stateKey: 'products',
  initialState: {},
  type: 'products',
  primaryKey: 'id',
});
export const productActions = userAdapter.getActions();
