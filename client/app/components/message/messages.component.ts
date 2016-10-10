import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Store } from '@ngrx/store';
import { ADD_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE, INIT_MESSAGES } from '../../reducers/message.reducer';
import { Observable } from 'rxjs/Observable';
import { MessageI } from '../../models/message.model';

@Component({
	moduleId: module.id,
	selector: 'messages',
	templateUrl: 'messages.component.html',
	styleUrls: ['messages.component.css'],
	providers: [MessagesService],
})

export class MessagesComponent implements OnInit {
	errorMsg: string;
	messages: Observable<MessageI[]>;
	newMessage: MessageI = { title: '', isDone: false };
	statuses: string[] = ['all', 'started', 'completed'];
	status: string;

	constructor(
		private _messagesService: MessagesService,
		private _store: Store<MessageI[]>
	) {
		this.messages = _store.select('messages');
	}

	ngOnInit() {
		this.getMessages();
		this.status = this.statuses[0];
	}

	getMessages() {
		this._messagesService.getMessages().subscribe(res => {
			this._store.dispatch({ type: INIT_MESSAGES, payload: res });
		});
	}

	addMessage(e: Event, newMessage: MessageI) {
		e.preventDefault();
		
		this._messagesService.addMessage(newMessage).subscribe(res => {
			this._store.dispatch({ type: 'ADD_MESSAGE',
				payload: {
					_id: res._id,
					title: res.title,
					isDone: res.isDone
				}
			});
		}, err => this.errorMsg = err.text());
		
		this.errorMsg = null;
		this.newMessage.title = '';
	}

	removeMessage(id) {
		this._messagesService.removeMessage(id).subscribe(res => {
			this._store.dispatch({ type: REMOVE_MESSAGE, payload: res.json() });
		});
	}

	updateMessage(isDone, message: MessageI) {
		const updatedMessage = Object.assign({}, message, {
			isDone: isDone
		});

		this._messagesService.updateMessage(updatedMessage).subscribe(res => {
			this._store.dispatch({ type: UPDATE_MESSAGE, payload: res.json() });
		});
	}

	setStatus(status) {
		this.status = status;
	}

}
