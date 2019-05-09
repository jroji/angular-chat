import { AuthGuard } from './services/auth.guard';
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
