import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs/Observable'

@Component({
	moduleId: module.id,
	selector: 'messages',
	template: `
		<ul>
			Response: {{messages}}
			<hr>
			Error: {{errorMsg}}
		</ul>
	`,
	providers: [MessagesService]
})

export class MessagesComponent implements OnInit {
	errorMsg: string;
	messages: any;

	constructor(private messagesService: MessagesService) { }

	ngOnInit() {
		this.getMessages();
	}

	getMessages() {
		this.messagesService.getMessages()
			.subscribe(
				res => this.messages = res._body,
				err => this.errorMsg = err
			)
	}

}
