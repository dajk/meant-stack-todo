import { ActionReducer, Action } from '@ngrx/store';
import { MessageI } from '../models/message.model';

export const INIT_MESSAGES = 'INIT_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const messagesReducer: ActionReducer<any> = (state: MessageI[] = [], action: Action) => {
	switch (action.type) {
		case 'INIT_MESSAGES':
			return action.payload;
		case 'ADD_MESSAGE':
			return [
				...state,
				action.payload
			];
		case 'REMOVE_MESSAGE':
			return state.filter(message => message._id !== action.payload);
		case 'UPDATE_MESSAGE':
			return state;
		
		default:
			return state;
	}
}
