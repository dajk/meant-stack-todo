import { Router, Response, Request, NextFunction } from 'express';
import * as mongoose from 'mongoose';
import Item from '../models/item.model';

const itemRouter: Router = Router();

interface ItemI {
  _id?: string,
  title: string,
  isDone: boolean
}

interface RequestI extends Request {
  body: ItemI,
  params: any
}

// Route for /items
itemRouter.route('/items')

.get((req: Request, res: Response, next: NextFunction) => {
  Item.find({}).sort({'isDone': 1}).exec((err, results: any[]) => {
    if (err) return err;
    res.json(results);
  });
})

.post((req: RequestI, res: Response, next: NextFunction) => {
  if (!req.body.title.trim() && req.body.title.trim().length === 0) {
    res.status(400).json({message: 'You cannot create title without string'});
    return;
  }

  req.body.title = req.body.title.trim();

  Item.create(req.body, (err, result) => {
    if (err) res.status(400).send(err);
    res.json(result);
  });
});


// Route with params
itemRouter.route('/items/:id')

.delete((req: RequestI, res: Response, next: NextFunction) => {
  Item.remove({_id: req.params.id}).exec((err, result) => {
    if (err) res.status(400).send(err);
    res.json(req.params.id);
  });
})

.put((req: RequestI, res: Response, next: NextFunction) => {
  if (!req.body.title.trim() && req.body.title.trim().length === 0) {
    res.status(400).json({message: 'You cannot update title without string'});
    return;
  }

  req.body.title = req.body.title.trim();

  Item.update({_id: req.params.id}, req.body).exec((err, result) => {
    if (err) res.status(400).send(err);
    res.json(req.body);
  })
});

export default itemRouter;
