import { ActionReducer, Action } from '@ngrx/store';
import { messsagesActions } from './messages.actions';

export function messagesReducer(state: Object = {}, action: Action) {
    switch (action.type) {

        case messsagesActions.ADD_MESSAGE:
            if (state[action['user']]) {
                state[action['user']].push(action['message']);
            } else {
                state[action['user']] = [action['message']];
            }
            return {...state};

        case messsagesActions.RESET_MESSAGES:
            return {};
        default:
            return state;
    }
}