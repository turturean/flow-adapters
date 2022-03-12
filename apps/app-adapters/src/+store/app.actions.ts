import { createAction } from '@ngrx/store';
import { userSearchAdapter, userSelectAdapter } from './app.adapter';

export const logOut = createAction('[APP] Logout');
export const userSearchActions = userSearchAdapter.getActions();
export const userSelectActions = userSelectAdapter.getActions();
