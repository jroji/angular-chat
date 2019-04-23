import { UsersService } from './../../services/users.service';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() messages = [];

  constructor() { }

  ngOnInit() {
  }

}
