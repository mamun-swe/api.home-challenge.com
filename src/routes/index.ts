import { Router } from 'express';
import { noteRoutes } from './notes';

export const routes: Router = Router();

routes.use('/notes', noteRoutes);
