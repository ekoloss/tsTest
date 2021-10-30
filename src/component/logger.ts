import config from 'config';
import { isObject } from 'lodash';
import { createLogger, format, transports } from 'winston';

export default createLogger({
  ...config.get('logger'),
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp }) =>
      `${level}: [${timestamp}] ${isObject(message) ? JSON.stringify(message, null, 2) : message}
`),
  ),
  transports: [new transports.Console()],
});
