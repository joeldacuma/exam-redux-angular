import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './api/user.service';

import * as UserActions from './actions/user.action';
import { User } from './models/user.model';

interface AppState {
  data: User
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exam-redux-angular';
  users: any;

  constructor(private store: Store<any>,
              private userService: UserService) {
                this.userService.load();
              }
  
  getUsers() {
    this.userService.getData().subscribe(res => {
      this.users = res.data.data;
    });
  }
}
