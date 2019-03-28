import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Output() messageSent = new EventEmitter<string>();
  message: string;
  
  constructor() { }

  ngOnInit() {
  }

  sendMessage(message) {
    this.messageSent.emit(this.message);
    this.message = '';
  }

}
