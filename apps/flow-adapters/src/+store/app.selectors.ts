import { createAction, createSelector } from '@ngrx/store';
import { userAdapter } from './app.adapter';

export const logOut = createAction('[APP] Logout');
export const {
  selectUserEntities,
  selectUserIds,
  selectUserIsLoading,
  selectUserSort,
  selectUserQuery,
  selectUserError,
} = userAdapter;

export const getUsers = createSelector(
  selectUserIds,
  selectUserEntities,
  (ids, entities) => {
    return ids.map((id) => entities[id]);
  }
);
