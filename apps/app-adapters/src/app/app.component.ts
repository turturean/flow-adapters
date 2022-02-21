import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserState } from '../+store/app.adapter';
import { userSearch, userSelectItems } from '../+store/app.actions';
import {
  getUsers,
  selectUserError,
  selectUserIds,
  selectUserIsLoading,
  selectUserSelectedItems,
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
  error$ = this.store.select(selectUserError);
  selected$ = this.store.select(selectUserSelectedItems);

  constructor(private store: Store<UserState>) {
    this.store.dispatch(userSelectItems({ selectedItem: ['12', '23'] }));
    this.store.dispatch(userSearch());
  }

  userSearch() {
    this.store.dispatch(userSearch({ query: { test: 34 } }));
    this.store.dispatch(
      userSelectItems({ selectedItem: [String(Math.random()), '23'] })
    );
  }
}
