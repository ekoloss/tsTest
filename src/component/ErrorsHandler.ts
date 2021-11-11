import { isArray } from 'lodash';

export interface ErrorObject {
  message: string;
  field?: string;
  stack?: string;
  code?: number|string;
}

const itemHandler = (item: string|ErrorObject): ErrorObject => {

  if (item instanceof Error) {
    return {
      message: item.message,
      stack: item.stack,
    };
  }

  if (typeof item === 'string') {
    return {
      message: item,
    };
  }

  if (item.message) {
      return item;
    } else {
      ErrorsHandler.throw('Object of error dont have field message', 400);
    }
};

class ErrorsHandler {
  public static make(errors, statusCode: number = 400, type: string= 'common') {
    let data;
    if (isArray(errors)) {
      data = errors.map((item) => itemHandler(item));
    } else {
      data = [itemHandler(errors)];
    }
    return new ErrorsHandler(data, { statusCode, type });
  }

  public static throw(errors: string|string[]|ErrorObject|ErrorObject[], statusCode: number = 400, type: string= 'common') {
    throw ErrorsHandler.make(errors, statusCode, type);
  }

  public data: ErrorObject[];
  public type: string;
  public statusCode: number;

  constructor(data, { statusCode = 400, type = 'common' } = {}) {
    this.data = data;
    this.type = type;
    this.statusCode = statusCode;
  }
}

export default ErrorsHandler;
