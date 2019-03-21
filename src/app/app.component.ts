import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  username = [
    'jnroji',
    'perrete',
    'torrezno'
  ];

  setTitle (event) {
    this.title = event;
  }
}
