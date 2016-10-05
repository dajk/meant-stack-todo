import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessagesService } from './messages.service';
import { MessageI } from '../models/message.model';
import { Action, State } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { GET_MESSAGE, ADD_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE } from '../reducers/message.reducer';

@Injectable()
export class MessagesEffectsService {
	
	constructor(
		private  _messagesService: MessagesService,
		private actions$: Actions
	) { }

	@Effect() message$: Observable<Action> = this.actions$

}
