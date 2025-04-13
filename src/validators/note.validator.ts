import Schema from 'async-validator';
import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../utilities/exceptions';

// Note input validation
export const noteValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const descriptor = <any>{
    title: [
      {
        type: 'string',
        required: true,
        message: 'Title is required.',
      },
    ],
    content: [
      {
        type: 'string',
        required: true,
        message: 'Content is required.',
      },
    ],
  };

  /* Execute the validator */
  const validator = new Schema(descriptor);

  validator.validate({ ...req.body }, (errors: any) => {
    if (errors) {
      return res.status(HttpStatusCode.REQUIRED).json({
        status: false,
        errors,
      });
    }
    next();
  });
};
