import { MessagesService } from './../../services/messages.service';
import { UsersService } from './../../services/users.service';
import { messsagesActions } from './../../state-management/messages.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  /**
   * Send message when the button send is clicked
   */
  message;
  @Input() user;
  constructor(
    private store: Store<any>,
    private usersService: UsersService,
    private messageService: MessagesService
  ) { }

  sendMessage() {
    this.messageService.send(this.message);
    this.message = '';
  }

}
