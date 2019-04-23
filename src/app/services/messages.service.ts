import { messsagesActions } from './../state-management/messages.actions';
import { UsersService } from './users.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private db: AngularFirestore,
    private store: Store<any>,
    private users: UsersService
  ) {
    this.db.collection('messages').valueChanges().subscribe(data => {
      this.store.dispatch({
        type: messsagesActions.ADD_MESSAGES,
        messages: data,
        user: 'general'
      });
    });
  }


  getMessages() {
    return this.store.select('messages').pipe(map(data => data[this.users.user.name.first]));
  }

  send(message) {
    if (this.users.user.name.first === 'general') {
      this.db.collection('messages').add({
        message: message,
        username: 'Jon'
      });
    } else {
      this.store.dispatch({
        type: messsagesActions.ADD_MESSAGE,
        message,
        user: this.users.user.name.first,
      });
    }
    
  }
}