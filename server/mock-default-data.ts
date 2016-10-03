import * as mongoose from 'mongoose';
import Message from './models/message.model';

/**
 * Create default messages if collection is empty
 */

let messages: any[] = [
	{title: 'Angular 2 and Node.js connection', isDone: true},
	{title: 'MongoDB connection', isDone: false},
	{title: 'Publishing to Heroku', isDone: false},
];

// Create default messages if any doesn't exist
function createDefaultMessages(): void {
	Message.find({}).exec((err: Error, results: any) => {
		if (results.length === 0) Message.create(messages);
	});
}

// Call only if messages are empty
export default createDefaultMessages;
