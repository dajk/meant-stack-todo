import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';
import messageRouter from './routes/message.route';
import createDefaultMessages from './mock-default-data';

const MONGOURI: string = 'mongodb://localhost:27017';

mongoose.connect(MONGOURI + '/meant-stack-todo', (err: Error) => {
	if (err) return err;
	console.log('The mongodb has been connected on: ', MONGOURI);
});

const app: express.Application = express();
const PORT: number = 1337;

app.use(json());
app.use(urlencoded({ extended: false }));

// Public folder to serve html (it's looking for index.html by default)
app.use('/', express.static(path.join(__dirname, '../public')));
// client path for any Angular 2 compiled script
app.use('/client', express.static(path.join(__dirname, '../client')));
// Use node modules path as default
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
// System.js bundler
app.use('/', express.static(path.join(__dirname, '../tools')));

// Routers
app.use('/api', messageRouter);

// Listening server on port ${PORT}
app.listen(PORT, () => {
	console.log('listening on port: ' + PORT);
});

createDefaultMessages();
