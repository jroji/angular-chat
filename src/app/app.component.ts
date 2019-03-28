import { MessagesService } from './messages.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: object[];
  results;

  constructor(
    private messagesService: MessagesService
    ) {
    this.username = this.messagesService.getUsers();
    this.messagesService.getHttpUsers().subscribe(results => {
      console.log(results);
      this.results = results;
    })
  }

  messages: string[] = [];

  addMessage (message) {
    this.messages.push(message);
  }
}
