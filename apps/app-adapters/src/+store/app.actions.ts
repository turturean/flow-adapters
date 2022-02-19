import { createAction } from '@ngrx/store';
import { userAdapter } from './app.adapter';

export const logOut = createAction('[APP] Logout');
export const { userSearch, userSearchFailed, userSearchSuccess } = userAdapter;
