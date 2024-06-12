'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  bootstrap({ strapi }) {
    const { Server } = require('socket.io');
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: 'http://192.168.11.107:8082',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true,
      },
    });
  
    io.on('connection', (socket) => {
      console.log('A user connected: ', socket.id);
  
      socket.on('sendMsg', async (data) => {
        console.log("Received message: ", data);
        try {
          // Ensure the message is directed to/from admin
          const message = await strapi.service('api::message.message').create({
            data: {
              content: data.content,
              receiver: data.receiver, // Ensure this is the admin ID
              sender: data.sender, // Ensure this is the user ID
              timestamp: new Date(),
            },
          });
          io.emit('recvMsg', message);
        } catch (err) {
          console.error('Error creating message: ', err);
        }
      });
  
      socket.on('disconnect', () => {
        console.log('A user disconnected: ', socket.id);
      });
    });
  
    strapi.io = io;
    
  }
};
