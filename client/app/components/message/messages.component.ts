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
				<button type="submit" (click)="onSubmit($event)">Submit</button>
			</div>
		</form>

		<ul>
			<li *ngFor="let message of messages">
				<label>
					<input type="checkbox" [checked]="message.isDone">
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

	onSubmit(e: Event) {
		e.preventDefault();
		this.newMessage = Object.assign({}, this.newMessage, {
			isDone: false
		});
		this.messages = [...this.messages, this.newMessage];
		this.newMessage = {};
	}

}
