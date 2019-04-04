import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  users: Observable<object>;
  currentUser;

  constructor(private usersService: UsersService, private router: Router) {
    this.users = this.usersService.getHttpUsers();
  }

  addNew() {

  }
  selectUser (user) {
    this.currentUser = user;
    this.usersService.selectUser(user);
    this.router.navigate(['chat']);
  }
}
