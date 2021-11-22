import './pre-start'; // Must be the first import
import { createConnection } from 'typeorm';
import app from './Server';
import logger from './shared/Logger';
import 'reflect-metadata';
import connectionOptions from './ormconfig';
import addSampleData from './sample';
import sock from './socket';
import { Server } from 'socket.io';
import { createServer } from 'http';

createConnection(connectionOptions)
  .then(() => {
    // Start the server
    const port = Number(process.env.PORT || 3000);
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
      cors: {
        origin: [
          'http://localhost:3001',
          'http://118.67.142.116:3001/',
          'http://118.67.142.116:8081/',
        ],
      },
    });
    io.of(/^\/workspace:\d+$/).on('connection', (socket) => {
      const namespace = socket.nsp;

      socket.on('chat', (data) => {
        namespace.emit('chat', data);
      });
    });
    httpServer.listen(port, () => {
      logger.info(`Express server started on port: ${port}`);
    });
  })
  .then(() => {
    if (process.env.DB_AUTO_ADD_DATA === 'true') addSampleData();
  })
  .catch((error) => console.log(error));
