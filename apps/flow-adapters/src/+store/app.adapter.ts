import { createSearchAdapter, SearchState } from 'flow-adapters-search';
import { createSelectAdapter, SelectState } from 'flow-adapters-select';

export const USER_STATE_KEY = 'user';

export interface User {
  id: string;
  uniqId: string;
  firstName: string;
  lastName: string;
}
export type UserState = SearchState<User> & SelectState<string, string>;

export const userAdapter = createSearchAdapter<User>({
  stateKey: USER_STATE_KEY,
  type: 'user',
  primaryKey: 'uniqId',
});

export const selectAdapter = createSelectAdapter<string>({
  stateKey: USER_STATE_KEY,
  type: 'user',
  selectedItems: 'selectedUsers',
});

export const PRODUCT_STATE_KEY = 'product';
export type Product = {
  id: string;
  uniqId: string;
};
export const productAdapter = createSearchAdapter<Product>({
  stateKey: PRODUCT_STATE_KEY,
  initialState: {},
  type: 'products',
  primaryKey: 'id',
});
