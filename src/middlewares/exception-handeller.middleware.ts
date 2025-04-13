import { NextFunction, Request, Response } from 'express';
import { HttpErrorResponse, HttpStatusCode } from '../utilities/exceptions';

export const AppExceptionHandeller = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  if (error.status === 404) {
    return res.status(HttpStatusCode.NOT_FOUND).json(
      await HttpErrorResponse({
        status: false,
        errors: [
          {
            field: 'not-found',
            message: error.message,
          },
        ],
      }),
    );
  }

  if (error.status === 400) {
    return res.status(HttpStatusCode.BAD_REQUEST).json(
      await HttpErrorResponse({
        status: false,
        errors: [
          {
            field: 'bad-request',
            message: 'Bad request server denied.',
          },
        ],
      }),
    );
  }

  if (error.status === 401) {
    return res.status(HttpStatusCode.UNAUTHORIZED).json(
      await HttpErrorResponse({
        status: false,
        errors: [
          {
            field: 'permission',
            message: 'You have no permission to access.',
          },
        ],
      }),
    );
  }

  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
    await HttpErrorResponse({
      status: false,
      errors: [
        {
          field: 'internal-server',
          message: 'Internal server error.',
        },
      ],
    }),
  );
};
