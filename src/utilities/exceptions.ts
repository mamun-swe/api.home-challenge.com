import {
  IHttpErrorResponse,
  IHttpSuccessResponse,
} from '../interfaces/exception.interface';

// Http success response
export const HttpSuccessResponse = async (
  payload: IHttpSuccessResponse,
): Promise<IHttpSuccessResponse> => {
  return {
    status: payload.status,
    message: payload.message,
    data: payload.data,
  };
};

// Http error response
export const HttpErrorResponse = async (
  payload: IHttpErrorResponse,
): Promise<IHttpErrorResponse> => {
  return {
    status: payload.status,
    errors: [...payload.errors],
  };
};

// Http status codes
export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  EXIST = 409,
  REQUIRED = 422,
  INTERNAL_SERVER_ERROR = 500,
}
