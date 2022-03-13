import { createSearchAdapter, createSelectAdapter, SearchEntitiesState, SelectState } from 'flow-adapters';

export const USER_STATE_KEY = 'user';

export interface User {
  id: string;
  uniqId: string;
  firstName: string;
  lastName: string;
}

export type UserState = SearchEntitiesState<User> & SelectState;

export const userSearchAdapter = createSearchAdapter({
  stateKey: USER_STATE_KEY,
  type: 'user',
  primaryKey: 'uniqId',
  initialState: {
    page: 4,
    perPage: 100,
    total: 200,
    query: { test: 'asdas' },
    sort: { sortColumn: '', sortDir: 'asc' },
  },
  hasPagination: true,
  hasQuery: true,
  hasSort: true,
});

export const userSelectAdapter = createSelectAdapter({
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
