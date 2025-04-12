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
  token?: string;
  data?: any;
  paginate?: any;
}
