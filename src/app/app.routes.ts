import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: '**',
        redirectTo: 'contacts'
    }
];