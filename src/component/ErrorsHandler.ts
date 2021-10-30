import { isArray, isString } from 'lodash';

const itemHandler = (item) => {
  if (isString(item)) {
    return item;
  }

  return item.message;
};

interface ErrorObject {
  message: string;
  [key: string]: any;
}

class ErrorsHandler extends Error {
  public static make(errors, statusCode = 400, type) {
    let message;
    let data = errors;
    if (isArray(errors)) {
      message = errors.map((item) => itemHandler(item));
    } else {
      message = [itemHandler(errors)];
      data = [errors];
    }
    return new ErrorsHandler(message, { statusCode, type, errors: data });
  }

  public static throw(errors: string|string[]|ErrorObject|ErrorObject[], statusCode: number = 400, type: string= 'common') {
    throw ErrorsHandler.make(errors, statusCode, type);
  }

  public type: string;
  public statusCode: number;
  public errors: ErrorObject[];

  constructor(message, { statusCode = 400, type = 'common', errors = [] } = {}) {
    super(message);
    this.type = type;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default ErrorsHandler;
