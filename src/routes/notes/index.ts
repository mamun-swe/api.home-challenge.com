import { Router } from 'express';
import { noteRouters } from './note.routes';

export const noteRoutes: Router = Router();

noteRoutes.use('/', noteRouters);
