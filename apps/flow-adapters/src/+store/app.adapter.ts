import { createSearchAdapter } from 'flow-adapters-search';
import { createSelectAdapter } from 'flow-adapters-select';

export interface User {
  id: string;
  uniqId: string;
  firstName: string;
  lastName: string;
}
export const userAdapter = createSearchAdapter<User>({
  stateKey: 'users',
  initialState: {},
  type: 'user',
  primaryKey: 'uniqId',
});
export const userActions = userAdapter.getActions();

export const selectAdapter = createSelectAdapter({
  stateKey: 'users',
  initialState: {},
  type: 'user',
});
export const selectActions = selectAdapter.getActions();

export interface Product {
  id: string;
  uniqId: string;
}
export const productAdapter = createSearchAdapter<Product>({
  stateKey: 'products',
  initialState: {},
  type: 'products',
  primaryKey: 'id',
});
export const productActions = userAdapter.getActions();
