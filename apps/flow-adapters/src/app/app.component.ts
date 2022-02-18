import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectAdapter, UserState } from '../+store/app.adapter';
import { userSearch } from '../+store/app.actions';
import {
  getUsers,
  selectUserError,
  selectUserIds,
  selectUserIsLoading,
  selectUserQuery,
  selectUserSort,
} from '../+store/app.selectors';

@Component({
  selector: 'flow-adapters-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flow-adapters';

  entities$ = this.store.select(getUsers);
  ids$ = this.store.select(selectUserIds);
  isLoading$ = this.store.select(selectUserIsLoading);
  sort$ = this.store.select(selectUserSort);
  query$ = this.store.select(selectUserQuery);
  error$ = this.store.select(selectUserError);

  constructor(private store: Store<UserState>) {
    store.dispatch(selectAdapter.select({ selectedItem: [] }));
    this.store.dispatch(userSearch({ query: { test: '123' } }));
  }

  userSearch() {
    this.store.dispatch(userSearch({ query: { test: '456' } }));
  }
}
