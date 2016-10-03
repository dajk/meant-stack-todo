import { Router, Response, Request, NextFunction } from 'express';
import * as mongoose from 'mongoose';
import Message from '../models/message.model';

const messageRouter: Router = Router();

messageRouter.get('/messages', (req: Request, res: Response, next: NextFunction) => {
	Message.find({}).exec((err: Error, results: any[]) => {
		if (err) return err;
		res.json(results);
	});
});

export default messageRouter;
