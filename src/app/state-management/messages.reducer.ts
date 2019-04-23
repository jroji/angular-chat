import { ActionReducer, Action } from '@ngrx/store';
import { messsagesActions } from './messages.actions';

export function messagesReducer(state: Object = {}, action: Action) {
    switch (action.type) {

        case messsagesActions.ADD_MESSAGE:
            if (state[action['user']]) {
                state[action['user']].push({ 
                    message: action['message'],
                    username: 'Jon',
                }
                );
            } else {
                state[action['user']] = [
                { 
                    message: action['message'],
                    username: 'Jon',
                }
                ];
            }
            return {...state};

        case messsagesActions.ADD_MESSAGES:
            state[action['user']] = action['messages'];
            return {...state}

        case messsagesActions.RESET_MESSAGES:
            return {};
        default:
            return state;
    }
}