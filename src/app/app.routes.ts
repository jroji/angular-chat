import { AuthGuard } from './services/auth.guard';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'contacts'
    }
];
