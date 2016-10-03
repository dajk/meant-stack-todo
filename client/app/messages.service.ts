import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessagesService {
	
	constructor(private http: Http) { }

	getMessages() {
		return this.http.get('/api/messages');
	}
}
