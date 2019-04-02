import { UsersService } from './services/users.service';
import { MessagesService } from './services/messages.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: object[];
  users: Observable<object>;
  currentUser;

  results;

  constructor(private usersService: UsersService) {
    this.username = this.usersService.getUsers();
    this.users = this.usersService.getHttpUsers();
  }

  messages: string[] = [];

  addMessage (message) {
    this.messages.push(message);
  }

  addNew() {

  }
  selectUser (user) {
    this.currentUser = user;
  }
}
