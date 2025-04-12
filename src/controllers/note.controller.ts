import { NextFunction, Request, Response } from 'express';

// Retrive list of all resources
export const index = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('notes');
  } catch (error: any) {
    next(error);
  }
};

// Create a new resource
export const store = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('notes');
  } catch (error: any) {
    next(error);
  }
};

// Retrive a specific resource
export const show = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.send(`notes/${id}`);
  } catch (error: any) {
    next(error);
  }
};

// Update a specific resource
export const update = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.send(`notes/${id}`);
  } catch (error: any) {
    next(error);
  }
};

// Delete a specific resource
export const destroy = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    res.send(`notes/${id}`);
  } catch (error: any) {
    next(error);
  }
};
