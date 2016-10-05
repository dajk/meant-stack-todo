import { Router, Response, Request, NextFunction } from 'express';
import * as mongoose from 'mongoose';
import Message from '../models/message.model';

const messageRouter: Router = Router();

interface MessageI {
	_id?: string,
	title: string,
	isDone: boolean
}

interface RequestI extends Request {
	body: MessageI,
	params: any
}

messageRouter.get('/messages', (req: Request, res: Response, next: NextFunction) => {
	Message.find({}).exec((err, results: any[]) => {
		if (err) return err;
		res.json(results);
	});
});

messageRouter.post('/messages', (req: RequestI, res: Response, next: NextFunction) => {
	Message.create(req.body, (err, result) => {
		if (err) res.status(400).send(err);
		res.json(result);
	});
});

messageRouter.delete('/messages/:id', (req: RequestI, res: Response, next: NextFunction) => {
	Message.remove({_id: req.params.id}).exec((err, result) => {
		if (err) res.status(400).send(err);
		res.json(req.params.id);
	});
});

messageRouter.put('/messages/:id', (req: RequestI, res: Response, next: NextFunction) => {
	Message.update({_id: req.params.id}, req.body).exec((err, result) => {
		if (err) res.status(400).send(err);
		res.json(req.params.id);
	})
});

export default messageRouter;
