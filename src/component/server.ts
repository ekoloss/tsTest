import bodyParser from 'body-parser';
import config from 'config';
import cors from 'cors';
import express, { Express, Router } from 'express';
import fs from 'fs';
import os from 'os';
import path from 'path';

import ErrorsHandler from './ErrorsHandler';
import logger from './logger';

export interface Route {
  version: string;
  router: Router;
}

class Server {
  public app: Express;

  public async init(): Promise<void> {
    this.app = express();
    this.app.use(bodyParser.urlencoded({
      ...config.get('server.bodyParser'),
      uploadDir: os.tmpdir(),
    }));

    this.app.options('*', cors(config.get('server.cors')));

    this.crawler();

    this.app.use((err, req, res, next) => {
      if (err instanceof ErrorsHandler) {
        logger.error(err.stack);
        return res.status(err.statusCode).send(err.message);
      }

      if (err instanceof Error) {
        logger.error(err.stack);
        return res.status(500).send('System error');
      }

      logger.error(err);
    });

    this.app.listen(config.get('server.port'), () => {
      logger.info(`Server started at http://localhost:${config.get('server.port')}`);
    });
  }

  private crawler(): void {
    const res = fs.readdirSync(path.join(__dirname, '../entities'));

    res.map((item) => {
      const pathFile = `../entities/${item}/route`;

      try {
        const { version = 'v1', router }: Route = require(pathFile).default;
        this.app.use(`/${version}`, router);
      } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
          throw e;
        }
      }
    });
  }
}

export default new Server();
