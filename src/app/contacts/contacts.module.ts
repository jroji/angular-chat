import { MatCardModule } from '@angular/material/card';
import { CommonsModule } from './../commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  }
];

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonsModule,
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
