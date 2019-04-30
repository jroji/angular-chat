import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { selectedUserActions } from '../state-management/selectedUser.actions';
import { UsersActions } from '../state-management/users.actionts';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user;
  users;

  users$;

  requestingData = false;

  constructor(
    private http: HttpClient,
    private store: Store<object>,
  ) {

    this.users$ = this.store.select('users');

    this.store.select('user').subscribe((selectedUser) => {
      this.user = selectedUser;
    });

    this.users$.subscribe((users) => {
      this.users = users;
    });
  }

  private storeUsers() {
    this.requestingData = true;
    return this.http.get('https://randomuser.me/api?results=12&seed=torrezno').subscribe(data => {
      this.store.dispatch({
        type: UsersActions.FETCH_USERS,
        users: data['results']
      });
    });
  }

  getHttpUsers() {
    if (this.users.length === 0 && !this.requestingData) {
      this.storeUsers();
    }
    return this.users$;
  }

  selectUser(user) {
    this.store.dispatch({
      type: selectedUserActions.SELECT_USER,
      user,
    });
  }

  createUser() {
    /*this.store.dispatch({
      type: UsersActions.ADD
    })*/
  }
}
