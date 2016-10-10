import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessageI } from '../models/message.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService {
	
	constructor(private _http: Http) { }

	getMessages(): Observable<MessageI[]> {
		return this._http.get('/api/messages')
			.map(res => res.json());
	}

	addMessage(newMessage: MessageI): Observable<MessageI> {
		return this._http.post('/api/messages', newMessage)
			.map(res => res.json());
	}

	removeMessage(id: string): Observable<any> {
		return this._http.delete(`/api/messages/${id}`);
	}

	updateMessage(message: MessageI): Observable<any> {
		return this._http.put(`/api/messages/${message._id}`, message);
	}
}
