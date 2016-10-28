import * as mongoose from 'mongoose';
import Item from './models/item.model';

/**
 * Create default items if collection is empty
 */

let items: any[] = [
  {title: 'Angular 2 and Node.js connection', isDone: true},
  {title: 'MongoDB connection', isDone: true},
  {title: 'Publishing to Heroku', isDone: true},
  {title: 'Add TravisCI', isDone: true},
  {title: 'Redux implementation - rxjs/store', isDone: true},
  {title: 'Add Docker', isDone: false},
  {title: 'Add Apollo / GraphQL?', isDone: false},
  {title: 'Implement unit & e2e tests', isDone: true},
  {title: 'Server side rendering', isDone: false},
  {title: 'Code coverage', isDone: false},
  {title: 'Implement livereload', isDone: false},
  {title: 'Material design', isDone: false},
  {title: 'ngrx full support', isDone: false},
  {title: 'Sign up & Sign in', isDone: false},
  {title: 'UI framework?', isDone: false},
  {title: 'Websocket, stream data?!', isDone: false},
];

function createDefaultItems(): void {
  Item.find({}).exec((err: Error, results: any) => {
    if (results.length === 0) Item.create(items);
  });
}

export default createDefaultItems;
