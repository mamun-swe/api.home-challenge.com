interface IError {
  field: string;
  message: string;
}

export interface IHttpErrorResponse {
  status: boolean;
  errors: IError[];
}

export interface IHttpSuccessResponse {
  status: boolean;
  message: string;
  data: any;
}
