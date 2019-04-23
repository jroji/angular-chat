import { UsersActions } from './users.actionts';
import { ActionReducer, Action } from '@ngrx/store';
import { messsagesActions } from './messages.actions';
import { selectedUserActions } from './selectedUser.actions';

interface UsersActions {
    type: string;
    users: object[];
}

const defaultGroup = {
    name: { first: 'general' },
    picture: { thumbnail: 'https://images.vexels.com/media/users/3/130723/isolated/preview/715fa52f5ccab2f6a41282cdcc4d23db-grupo-de-personas-silueta-by-vexels.png'},
};

export function usersReducer(state: object[] = [], action: UsersActions) {
    switch (action.type) {

        case UsersActions.FETCH_USERS:
            return [ defaultGroup, ...action.users ];

        case UsersActions.CLEAN_USERS:
            return [];

        default:
            return state;
    }
}