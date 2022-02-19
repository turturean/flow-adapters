import { createAction } from '@ngrx/store';
import { selectAdapter, userAdapter } from './app.adapter';

export const logOut = createAction('[APP] Logout');
export const { userSearch, userSearchFailed, userSearchSuccess } = userAdapter;
export const { userSelectItems } = selectAdapter;
