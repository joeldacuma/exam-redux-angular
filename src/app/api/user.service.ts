import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as UserDataActions from '../actions/user.action';
import { getDataState, getData } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private store: Store<any>) { }

  getAllUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users');
  }

  load() {
    this.store.dispatch(new UserDataActions.LoadAction());
  }

  getData() {
    return this.store.select(getDataState);
  }

  getUsers() {
    return this.store.select(getData);
  }

}
