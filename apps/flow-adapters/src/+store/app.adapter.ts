import { createSearchAdapter } from '@flow-adapters/search';

export const userAdapter = createSearchAdapter({
  stateKey: 'users',
  initialState: {},
  type: 'user',
  primaryKey: 'uniqId',
});
export const userActions = userAdapter.getActions();
