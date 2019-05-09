import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation',
    [
      state('void', style({
        transform: 'scale(0)translateX(-200px)rotate(30deg)',
        background: 'lightgray',
        opacity: 0
      })),
      transition('void => *', animate('180ms ease-out')),
    ]),
  ]
})
export class ContactsComponent implements OnDestroy {

  users: object[];
  usersToPaint = [];
  currentUser;
  usersSubscription: Subscription;

  status = '';

  constructor(private usersService: UsersService, private router: Router) {
    if (this.usersService.users.length > 0) {
      this.users = this.usersService.users;
    } else {
      this.usersSubscription = this.usersService.getHttpUsers().subscribe(data => {
        this.users = data;
        if (this.users.length > 0) {
          this.usersToPaint.push(this.users.pop());
        }
      });
    }
  }

  popElement(ev) {
    this.usersToPaint['push'](this.users.pop());
  }

  selectUser (user) {
    this.currentUser = user;
    this.usersService.selectUser(user);
    this.router.navigate(['chat']);
  }

  /**
   * Returns image of the user for background-image
   * @param user object with the user information
   * @returns user image url
   */
  getUrl (user) {
    return `url(${user.picture.thumbnail})`;
  }

  ngOnDestroy() {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }
}
