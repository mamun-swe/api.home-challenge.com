import { Router } from 'express';
import { noteValidation } from '../../validators/note.validator';
import * as noteController from '../../controllers/note.controller';

export const noteRouters: Router = Router();

noteRouters.get('/', noteController.index);
noteRouters.post('/', noteValidation, noteController.store);
noteRouters.get('/:id', noteController.show);
noteRouters.put('/:id', noteValidation, noteController.update);
noteRouters.delete('/:id', noteController.destroy);
