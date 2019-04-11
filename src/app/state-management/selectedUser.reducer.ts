import { ActionReducer, Action } from '@ngrx/store';
import { messsagesActions } from './messages.actions';
import { selectedUserActions } from './selectedUser.actions';

interface SelectedUserAction {
    type: string;
    user: object;
}

export function selectedUserReducer(state: Object = null, action: SelectedUserAction) {
    switch (action.type) {

        case selectedUserActions.SELECT_USER:
            return { ...action.user };

        case selectedUserActions.CLEAN_USER:
            return null;

        default:
            return state;
    }
}