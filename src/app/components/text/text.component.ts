import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Output() messageSent = new EventEmitter<string>();
  message;

  constructor(private messages: MessagesService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messages.addMessage(this.message);
    // this.messageSent.emit(this.message);
    this.message = '';
  }

}
