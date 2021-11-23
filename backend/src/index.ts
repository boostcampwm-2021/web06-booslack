import './pre-start'; // Must be the first import
import { createConnection } from 'typeorm';
import { createServer } from 'http';
import app from './Server';
import logger from './shared/Logger';
import 'reflect-metadata';
import connectionOptions from './ormconfig';
import addSampleData from './sample';
import initializeSocket from './socket';

createConnection(connectionOptions)
  .then(() => {
    // Start the server
    const port = Number(process.env.PORT || 3000);
    const httpServer = createServer(app);
    initializeSocket(httpServer);
    httpServer.listen(port, () => {
      logger.info(`Express server started on port: ${port}`);
    });
  })
  .then(() => {
    if (process.env.DB_AUTO_ADD_DATA === 'true') addSampleData();
  })
  .catch((error) => console.log(error));
