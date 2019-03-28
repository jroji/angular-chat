import { MessagesService } from './../messages.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // @Input() messages: string[];
  messages = [];
  constructor(private msgService: MessagesService) { }

  ngOnInit() {
    this.msgService.messages$.subscribe(data => {
      this.messages.push(data)
    });
  }

}
