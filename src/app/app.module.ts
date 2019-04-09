import { CommonsModule } from './commons/commons.module';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TextComponent } from './components/text/text.component';
import { BoardComponent } from './components/board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { messagesReducer } from './state-management/messages.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    HttpClientModule,
    StoreModule.forRoot({
      messages: messagesReducer
    }),
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
