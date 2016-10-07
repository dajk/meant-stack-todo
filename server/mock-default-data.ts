import * as mongoose from 'mongoose';
import Message from './models/message.model';

/**
 * Create default messages if collection is empty
 */

let messages: any[] = [
	{title: 'Angular 2 and Node.js connection', isDone: false},
  {title: 'MongoDB connection', isDone: false},
  {title: 'Publishing to Heroku', isDone: false},
  {title: 'Add TravisCI', isDone: false},
  {title: 'Redux implementation - rxjs/store', isDone: false},
  {title: 'Add Docker', isDone: false},
  {title: 'Add Apollo / GraphQL', isDone: false},
  {title: 'Add unit & e2e tests', isDone: false},
  {title: 'Server side rendering', isDone: false},
  {title: 'Test coverage', isDone: false},
  {title: 'Implement livereload', isDone: false},
  {title: 'Material design', isDone: false},
  {title: 'ngrx: effects, db, store...', isDone: false},
];

// Create default messages if any doesn't exist
function createDefaultMessages(): void {
	Message.find({}).exec((err: Error, results: any) => {
		if (results.length === 0) Message.create(messages);
	});
}

// Call only if messages are empty
export default createDefaultMessages;
