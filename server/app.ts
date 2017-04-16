import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';
import itemRouter from './routes/item.route';
import createDefaultItems from './mock-default-data';
import { config, ConfigI } from '../config/index';

const nodeEnv: string = process.env.NODE_ENV || 'development';

let configEnv: ConfigI;

// Run specific environment
(nodeEnv === 'production')
  ? configEnv = config.production
  : configEnv = config.development;

// fix deprication warning (https://github.com/Automattic/mongoose/issues/4291#issuecomment-230312093)
(<any>mongoose).Promise = global.Promise;
mongoose.connect(configEnv.MONGODB_URI, (err: Error) => {
  if (err) return err;
  console.log('The mongodb has been connected on: ', configEnv.MONGODB_URI);
});

const app: express.Application = express();
const PORT: number = process.env.PORT || 1337;

app.use(json());
app.use(urlencoded({ extended: false }));

if (nodeEnv !== 'production') {
  // client path for any Angular 2 compiled script
  app.use('/client', express.static(path.join(__dirname, configEnv.SRC)));
  // Use node modules path as default
  app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
  // System.js bundler
  app.use('/', express.static(path.join(__dirname, '../tools')));
}

// Public folder to serve html (it's looking for index.html by default)
app.use('/', express.static(path.join(__dirname, configEnv.SRC)));

// Router
app.use('/api', itemRouter);

// Listening server on port ${PORT}
app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
});

createDefaultItems();
