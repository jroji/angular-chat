import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user;

  constructor(private http: HttpClient) { }

  getHttpUsers() {
    return this.http.get('https://randomuser.me/api?results=12&seed=torrezno');
  }

  selectUser(user) {
    this.user = user;
  }
}
