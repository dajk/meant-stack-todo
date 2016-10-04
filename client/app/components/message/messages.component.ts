import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/message/messages.service';

@Component({
	moduleId: module.id,
	selector: 'messages',
	template:`
		<form ngNoForm>
			<div>
				<label for="message">Message</label>
				<input type="text" id="message" [(ngModel)]="newMessage.title" autocomplete="off">
				<button type="submit" (click)="addMessage($event)">Submit</button>
			</div>
		</form>

		<ul>
			<li *ngFor="let message of messages">
				<button (click)="removeMessage(message._id)">X</button>
				<label>
					<input type="checkbox" [ngModel]="message.isDone" (ngModelChange)="updateMessage($event, message)">
					{{ message.title }}
				</label>
			</li>
		</ul>
		<div *ngIf="!messages || !messages.length">Error: {{errorMsg}}</div>
	`,
	providers: [MessagesService]
})

export class MessagesComponent implements OnInit {
	errorMsg: string;
	messages: any[];
	newMessage: Object = {};

	constructor(private messagesService: MessagesService) { }

	ngOnInit() {
		this.getMessages();
	}

	getMessages() {
		this.messagesService.getMessages()
			.subscribe(
				res => this.messages = res.json(),
				err => this.errorMsg = err
			);
	}

	addMessage(e: Event) {
		e.preventDefault();
		this.newMessage = Object.assign({}, this.newMessage, {
			isDone: false
		});
		
		this.messagesService.addMessage(this.newMessage)
			.subscribe(
				res => {
					this.messages = [...this.messages, res.json()];
					this.newMessage = {};
				},
				err => this.errorMsg = err
			);
	}

	removeMessage(id) {
		this.messagesService.removeMessage(id)
			.subscribe(
				res => this.messages = this.messages
					.filter(item => item._id !== res.json())
					.map(item => item),
				err => this.errorMsg = err
			);
	}

	updateMessage(isDone: Event, message: Object) {
		const updatedMessage = Object.assign({}, message, {
			isDone: isDone
		});

		this.messagesService.updateMessage(updatedMessage)
			.subscribe(
				res => { },
				err => this.errorMsg = err
			);
	}

}
