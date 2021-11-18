import { Component } from '@angular/core';
import { UserModel } from '../+store/user-model';

@Component({
  selector: 'flow-adapters-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flow-adapters';

  constructor(public userModel: UserModel) {
    userModel.searchQuery({ test: '123' });
  }

  userSearch() {
    this.userModel.searchQuery({ test: '456' });
  }
}
