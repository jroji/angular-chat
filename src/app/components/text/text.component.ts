import { MessagesService } from './../../services/messages.service';
import { Component, Input } from '@angular/core';

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
    private messageService: MessagesService
  ) { }

  sendMessage() {
    this.messageService.send(this.message);
    this.message = '';
  }

}
