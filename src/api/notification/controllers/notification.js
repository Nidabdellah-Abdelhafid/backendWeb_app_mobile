// path: src/api/notification/controllers/notification.js

'use strict';

module.exports = {
  async create(ctx) {
    try {
      const { title, body, dateSent, pushData, bigPictureURL } = ctx.request.body;
      const notification = await strapi.services.notification.sendNotification({
        title,
        body,
        dateSent,
        pushData,
        bigPictureURL
      });
      ctx.send({ notification });
    } catch (error) {
      ctx.throw(500, 'Failed to send notification');
    }
  },
};
