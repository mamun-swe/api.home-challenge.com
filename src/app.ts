import express, { Express, NextFunction, Response, Request } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import compression from 'compression';
dotenv.config();
import { routes } from './routes';
import { AppExceptionHandeller } from './middlewares/exception-handeller.middleware';
import { HttpStatusCode } from './utilities/exceptions';

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

// Handle 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(HttpStatusCode.NOT_FOUND).json({
    status: false,
    errors: [{ field: 'server', message: 'Sorry, Route not found.' }],
  });
});

// Global exception handeller
app.use(AppExceptionHandeller);
