import 'reflect-metadata';
import { startServer } from './app';
import { initializeDB, initializeCache } from './config/db';
import logger from './utils/logger';

async function main(): Promise<void> {
  const port = Number(process.env.PORT || 4000);
  const redisPort = Number(process.env.REDIS_PORT || 6379);
  const app = await startServer();
  app.listen(port, () => {
    logger.info(`App is running at http://localhost:${port}`);

    initializeDB();
    initializeCache(redisPort);
  });
}
main();
