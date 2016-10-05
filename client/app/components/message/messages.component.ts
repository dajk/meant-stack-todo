import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Store } from '@ngrx/store';
import { ADD_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE } from '../../reducers/message.reducer';
import { Observable } from 'rxjs/Observable';
import { MessageI } from '../../models/message.model';

@Component({
	moduleId: module.id,
	selector: 'messages',
	template:`
		<form ngNoForm>
			<div>
				<label for="message">Message</label>
				<input type="text" id="message" [(ngModel)]="newMessage.title" autocomplete="off">
				<button type="submit" (click)="addMessage($event, newMessage)">Submit</button>
			</div>
		</form>

		<ul>
			<li *ngFor="let message of messages | async">
				<button (click)="removeMessage(message._id)">X</button>
				<label>
					<input type="checkbox" [ngModel]="message.isDone" (ngModelChange)="updateMessage($event, message)">
					{{ message.title }}
				</label>
			</li>
		</ul>
		<div *ngIf="!(messages | async) || !(messages | async)?.length">Error: {{errorMsg}}</div>
	`,
	providers: [MessagesService],
})

export class MessagesComponent implements OnInit {
	errorMsg: string = 'You should add your first message';
	messages: Observable<MessageI[]>;
	newMessage: MessageI = { title: '', isDone: false };

	constructor(
		private _messagesService: MessagesService,
		private _store: Store<MessageI[]>
	) {
		this.messages = _store.select('messages');
	}

	ngOnInit() {
		this.getMessages();
	}

	getMessages() {
		this.messages = this._messagesService.getMessages();
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
		});
		
		this.newMessage.title = '';
	}

	removeMessage(id) {
		this._messagesService.removeMessage(id).subscribe(res => {
			this._store.dispatch({ type: REMOVE_MESSAGE, payload: res.json()._id });
		});
	}

	updateMessage(isDone, message: MessageI) {
		const updatedMessage = Object.assign({}, message, {
			isDone: isDone
		});

		this._messagesService.updateMessage(updatedMessage).subscribe(res => {
			this._store.dispatch({ type: UPDATE_MESSAGE, payload: message });
		});
	}

}
