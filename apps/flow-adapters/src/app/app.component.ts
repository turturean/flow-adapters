import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserModel } from '../+store/user-model';
import { selectAdapter } from '../+store/app.adapter';
import { AppState } from '../+store/app.reducer';

@Component({
  selector: 'flow-adapters-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flow-adapters';

  constructor(public userModel: UserModel, private store: Store<AppState>) {
    store.dispatch(selectAdapter.select({ selectedItem: [] }));
    userModel.searchQuery({ test: '123' });
  }

  userSearch() {
    this.userModel.searchQuery({ test: '456' });
  }
}
