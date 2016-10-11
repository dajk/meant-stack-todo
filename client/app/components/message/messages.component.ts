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
			this.errorMsg = null;
		}, err => this.errorMsg = err.json().message);
		
		this.newMessage.title = '';
	}

	removeMessage(id: string) {
		this._messagesService.removeMessage(id).subscribe(res => {
			this._store.dispatch({ type: REMOVE_MESSAGE, payload: res.json() });
		});
	}

	updateStatus(isDone: boolean, message: MessageI) {
		const updatedMessage = Object.assign({}, message, {
			isDone: isDone
		});
		this.updateMessage(updatedMessage);
	}

	updateTitle(e: any, message: MessageI) {
		if (e.keyCode === 13) {
			e.preventDefault();
			const title = e.target.textContent;
			const updatedMessage = Object.assign({}, message, {
				title: title
			});
			this.updateMessage(updatedMessage);
		}
	}

	setStatus(status: string) {
		this.status = status;
	}

	updateMessage(message: MessageI) {
		this._messagesService.updateMessage(message).subscribe(res => {
			this._store.dispatch({ type: UPDATE_MESSAGE, payload: res.json() });
			this.errorMsg = null;
		}, err => this.errorMsg = err.json().message);
	}

}
