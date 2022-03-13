import { createAction, createSelector } from '@ngrx/store';
import { userSelectAdapter, userSearchAdapter } from './app.adapter';

export const logOut = createAction('[APP] Logout');
export const userSearchSelectors = userSearchAdapter.getSelectors();
export const userSelectSelectors = userSelectAdapter.getSelectors();

export const getUsers = createSelector(userSearchSelectors.ids, userSearchSelectors.entities, (ids, entities) => {
  return ids.map((id) => entities[id]);
});
