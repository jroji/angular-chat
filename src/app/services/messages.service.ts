import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages = [];
  messages$ = new Subject();

  constructor(private http: HttpClient) { }

  addMessage(message) {
    this.messages = [ message ];
    this.messages$.next(message);
  }
}
