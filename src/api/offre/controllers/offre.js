// path: ./src/api/offre/controllers/offre.js
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::offre.offre', ({ strapi }) => ({
  async create(ctx) {
    const { expoPushToken, title, message, ...data } = ctx.request.body;

    // Call the default core action
    const response = await super.create(ctx);

    // Send push notification
    await strapi.services.notification.sendPushNotification(expoPushToken, title, message);

    return response;
  },
}));
