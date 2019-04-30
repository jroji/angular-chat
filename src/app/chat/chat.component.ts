import { MessagesService } from './../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Observable<Array<object>>;

  constructor(private msgService: MessagesService) {}

  ngOnInit() {
    this.messages = this.msgService.getMessages();
  }
}
