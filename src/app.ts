import * as dotenv from 'dotenv';

import logger from './component/logger';
import mongo from './component/mongodb';
import server from './component/server';

const run = async (): Promise<void> => {
  try {
  dotenv.config();
  await mongo.init();
  await server.init();
  } catch (err) {
    logger.error(err);
  }
};

run();
