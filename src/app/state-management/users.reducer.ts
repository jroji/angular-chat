import { UsersActions } from './users.actionts';
import { ActionReducer, Action } from '@ngrx/store';
import { messsagesActions } from './messages.actions';
import { selectedUserActions } from './selectedUser.actions';

interface UsersActions {
    type: string;
    users: object[];
}

export function usersReducer(state: object[] = [], action: UsersActions) {
    switch (action.type) {

        case UsersActions.FETCH_USERS:
            return [ ...action.users ];

        case UsersActions.CLEAN_USERS:
            return [];

        default:
            return state;
    }
}