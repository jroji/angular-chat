import { FormsModule } from '@angular/forms';
import { BoardComponent } from './../components/board/board.component';
import { TextComponent } from './../components/text/text.component';
import { AvatarComponent } from './../components/avatar/avatar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AvatarComponent,
    TextComponent,
    BoardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AvatarComponent,
    TextComponent,
    BoardComponent,
  ]
})
export class CommonsModule { }
