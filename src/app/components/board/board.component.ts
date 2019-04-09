import { UsersService } from './../../services/users.service';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  messages = [];
  constructor(
    private store: Store<any>,
    private usersService: UsersService
    ) { }

  ngOnInit() {
    this.store.select('messages').subscribe(data => {
      this.messages = data[this.usersService.user.name.first];
    });
  }


}
