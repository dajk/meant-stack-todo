import { ActionReducer, Action } from '@ngrx/store';
import { MessageI } from '../models/message.model';

export const GET_MESSAGE = 'GET_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const messagesReducer: ActionReducer<any> = (state: MessageI[] = [], action: Action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return [
				...state,
				action.payload
			];
		case 'REMOVE_MESSAGE':
			return state;
		case 'UPDATE_MESSAGE':
			return state;
		
		default:
			return state;
	}
}
