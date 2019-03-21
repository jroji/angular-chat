import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input('name') username: string = 'jnroji';
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() {
    console.log(this.username);
  }

  ngOnInit() {
    console.log(this.username);
  }

  handleClick(value) {
    alert(value);
    this.buttonClicked.emit(this.username);
  }
}
