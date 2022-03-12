import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserState } from '../+store/app.adapter';
import {
  getUsers,
  userSearchSelectors,
  userSelectSelectors,
} from '../+store/app.selectors';
import { userSearchActions, userSelectActions } from '../+store/app.actions';

@Component({
  selector: 'flow-adapters-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flow-adapters';

  entities$ = this.store.select(getUsers);
  ids$ = this.store.select(userSearchSelectors.ids);
  isLoading$ = this.store.select(userSearchSelectors.isLoading);
  sort$ = this.store.select(userSearchSelectors.sort);
  error$ = this.store.select(userSearchSelectors.error);
  selected$ = this.store.select(userSelectSelectors.selectedItems);

  constructor(private store: Store<UserState>) {
    this.store.dispatch(
      userSelectActions.selectItems({ selectedItem: ['12', '23'] })
    );
    this.store.dispatch(userSearchActions.search({}));
  }

  userSearch() {
    this.store.dispatch(
      userSearchActions.search({ pagination: { page: 1, perPage: 30 } })
    );
    this.store.dispatch(
      userSelectActions.selectItems({
        selectedItem: [String(Math.random()), '23'],
      })
    );
  }
}
