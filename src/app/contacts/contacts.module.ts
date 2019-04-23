import { MatCardModule } from '@angular/material/card';
import { CommonsModule } from './../commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
];

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    MatCardModule,
    CommonsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
