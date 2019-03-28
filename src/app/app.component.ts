import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = [
    { name:'jnroji'},
    { name:'perrete'},
    { name:'torrezno'}
  ];

  messages: string[] = [];

  addMessage (message) {
    this.messages.push(message);
  }
}
