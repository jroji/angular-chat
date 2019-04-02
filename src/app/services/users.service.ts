import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return [
      { name: 'jnroji'},
      { name: 'minko'},
      { name: 'misco'}
    ];
  }

  getHttpUsers() {
    return this.http.get('https://randomuser.me/api?results=5&seed=torrezno');
  }
}
