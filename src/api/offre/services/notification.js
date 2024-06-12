// path: ./src/api/offre/services/notification.js
'use strict';

const axios = require('axios');

module.exports = {
  sendPushNotification: async (expoPushToken, title, message) => {
    const payload = {
      to: expoPushToken,
      sound: 'default',
      title,
      body: message,
      data: { message },
    };

    try {
      await axios.post('https://exp.host/--/api/v2/push/send', payload, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      strapi.log.error('Error sending push notification', error);
    }
  },
};
