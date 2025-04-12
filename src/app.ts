import express, { Express, NextFunction, Response, Request } from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import compression from 'compression';
dotenv.config();
import { routes } from './routes';
// import { HttpCode } from './helpers';
// import { publicRouter, privateRouter } from './routers';
// import { apiKeyVerification } from './middlewares/api-key.middleware';
// import { AppErrorHandeller } from './middlewares/error-handeller.middleware';

export const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the welcome route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to Backend Service. 😛😛😛');
});

// Serve application routes
app.use('/', routes);
