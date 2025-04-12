import { NextFunction, Request, Response } from 'express';
import { noteService } from '../services/note.service';
import {
  HttpErrorResponse,
  HttpStatusCode,
  HttpSuccessResponse,
} from '../utilities/exceptions';

// Retrive list of all resources
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const results = await noteService.findAll();
    return res.status(HttpStatusCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: 'List of notes.',
        data: results,
      }),
    );
  } catch (error: any) {
    next(error);
  }
};

// Create a new resource
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { title, content } = req.body;
    const result = await noteService.create({ title, content });

    return res.status(HttpStatusCode.CREATED).json(
      await HttpSuccessResponse({
        status: true,
        message: 'Note created successfully.',
        data: result,
      }),
    );
  } catch (error: any) {
    next(error);
  }
};

// Retrive a specific resource
export const show = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { id } = req.params;
    const result = await noteService.findOneById(Number(id));

    return res.status(HttpStatusCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: 'Note information.',
        data: result,
      }),
    );
  } catch (error: any) {
    next(error);
  }
};

// Update a specific resource
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const result = await noteService.update(Number(id), { title, content });
    if (!result) {
      return res.status(HttpStatusCode.NOT_FOUND).json(
        await HttpErrorResponse({
          status: false,
          errors: [{ message: 'Note not found.', field: 'id' }],
        }),
      );
    }

    return res.status(HttpStatusCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: 'Note updated successfully.',
        data: result,
      }),
    );
  } catch (error: any) {
    next(error);
  }
};

// Delete a specific resource
export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { id } = req.params;
    await noteService.destroy(Number(id));
    return res.status(HttpStatusCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: 'Note deleted successfully.',
        data: null,
      }),
    );
  } catch (error: any) {
    next(error);
  }
};
