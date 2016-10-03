import * as express from 'express';
import * as path from 'path';

const app = express();
const PORT = 1337;

let messages = [
	{title: 'yes', isDone: true},
	{title: 'no', isDone: false},
	{title: 'maybe', isDone: '?'},
];

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

app.use('/', express.static(path.join(__dirname, '../tools')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/messages', (req, res) => res.json(messages));

app.listen(PORT, () => {
	console.log('listening on port: ' + PORT);
});
