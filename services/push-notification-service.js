const { sendPushNotification } = require('../channels/push');

function sendPushNotification(message) {
  // Implement push notification logic using FCM, APNs, etc.
  console.log(`Sending push notification: ${message}`);
}

module.exports = { sendPushNotification };
