// path: src/api/notification/services/notification.js

'use strict';

const axios = require('axios');

module.exports = {
  async sendNotification({ title, body, dateSent, pushData, bigPictureURL }) {
    try {
      const response = await axios.post('https://app.nativenotify.com/api/notification', {
        appId: 21747,
        appToken: "spLw6CdkKa0b9OuXBZH7ba",
        title,
        body,
        dateSent,
        pushData,
        bigPictureURL
      });
      return response.data;
    } catch (error) {
      console.error('Failed to send notification', error);
      throw error;
    }
  },
};
