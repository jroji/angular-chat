import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { selectedUserReducer } from 'src/app/state-management/selectedUser.reducer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './../components/avatar/avatar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';
import { usersReducer } from '../state-management/users.reducer';

import { RouterTestingModule } from '@angular/router/testing';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatCardModule,
        HttpClientModule,
        StoreModule.forRoot({
          user: selectedUserReducer,
          users: usersReducer,
        }),
      ],
      declarations: [
        AvatarComponent,
        ContactsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;

    component.usersToPaint = [
      {
        gender: 'female',
        name: {
          first: 'Emilia',
          last: 'Rodriguez'
        },
        email: 'emilita18@gmail.com',
        picture: {
          thumbnail: 'imagenDePrueba'
        }
      }
    ];

    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should return the user image', () => {
    const user = {
      picture: {
        thumbnail: 'imagenDePrueba'
      }
    };

    const url = component.getUrl(user);
    expect(url).toContain('url(imagenDePrueba)');
  });

});
