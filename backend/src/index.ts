import './pre-start'; // Must be the first import
import { createConnection } from 'typeorm';
import app from './Server';
import logger from './shared/Logger';
import 'reflect-metadata';
import connectionOptions from './ormconfig';

createConnection(connectionOptions)
  .then(() => {
    // Start the server
    const port = Number(process.env.PORT || 3000);
    app.listen(port, () => {
      logger.info(`Express server started on port: ${port}`);
    });
  })
  .catch((error) => console.log(error));
