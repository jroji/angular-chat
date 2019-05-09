import { HttpClientModule } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule,  } from '@angular/fire';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';
import { StoreModule } from '@ngrx/store';
import { messagesReducer } from 'src/app/state-management/messages.reducer';
import { selectedUserReducer } from 'src/app/state-management/selectedUser.reducer';
import { usersReducer } from 'src/app/state-management/users.reducer';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        StoreModule.forRoot({
          messages: messagesReducer,
          user: selectedUserReducer,
          users: usersReducer,
        }),
        HttpClientModule
      ],
      declarations: [ TextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should send a message', () => {
    expect(component).toBeTruthy();
  });
});
