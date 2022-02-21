import {
  createSearchAdapter,
  createSelectAdapter,
  SearchEntitiesState,
  SelectState,
} from 'flow-adapters';

export const USER_STATE_KEY = 'user';

export interface User {
  id: string;
  uniqId: string;
  firstName: string;
  lastName: string;
}
export type UserState = SearchEntitiesState<User> & SelectState;

export const userAdapter = createSearchAdapter({
  stateKey: USER_STATE_KEY,
  type: 'user',
  primaryKey: 'uniqId',
  initialState: {},
  hasPagination: false,
  hasQuery: true,
});

// userAdapter.

export const selectAdapter = createSelectAdapter({
  stateKey: USER_STATE_KEY,
  type: 'user',
});

export const PRODUCT_STATE_KEY = 'product';
export type Product = {
  id: string;
  uniqId: string;
};
export const productAdapter = createSearchAdapter({
  stateKey: PRODUCT_STATE_KEY,
  type: 'products',
  primaryKey: 'id',
});
