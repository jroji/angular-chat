import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnDestroy {

  users: Observable<object>;
  currentUser;
  usersSubscription: Subscription;

  constructor(private usersService: UsersService, private router: Router) {
    if (this.usersService.users.length > 0) {
      this.users = this.usersService.users;
    } else {
      this.usersSubscription = this.usersService.getHttpUsers().subscribe(data => {
        this.users = data;
      });
    }
  }

  selectUser (user) {
    this.currentUser = user;
    this.usersService.selectUser(user);
    this.router.navigate(['chat']);
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
