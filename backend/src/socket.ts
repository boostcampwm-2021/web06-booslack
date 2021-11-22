import { Server } from 'socket.io';
import * as http from 'http';

const initializeSocket = (httpServer: http.Server) => {
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

    socket.on('threads', (data) => {
      namespace.emit('threads', data);
    });
  });
};

export default initializeSocket;
