import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessagesService {
	
	constructor(private http: Http) { }

	getMessages() {
		return this.http.get('/api/messages');
	}
}
