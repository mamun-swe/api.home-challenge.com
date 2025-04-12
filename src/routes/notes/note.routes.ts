import { Router } from 'express';
import * as noteController from '../../controllers/note.controller';

export const noteRouters: Router = Router();

noteRouters.get('/', noteController.index);
noteRouters.post('/', noteController.store);
noteRouters.get('/:id', noteController.show);
noteRouters.put('/:id', noteController.update);
noteRouters.delete('/:id', noteController.destroy);
