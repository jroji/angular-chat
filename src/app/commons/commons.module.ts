import { NewUserComponent } from '../contacts/new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './../components/board/board.component';
import { TextComponent } from './../components/text/text.component';
import { AvatarComponent } from './../components/avatar/avatar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AvatarComponent,
    TextComponent,
    BoardComponent,
    NewUserComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    AvatarComponent,
    TextComponent,
    BoardComponent,
  ]
})
export class CommonsModule { }
