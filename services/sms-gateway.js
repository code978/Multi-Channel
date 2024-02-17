const { sendSMS } = require('../channels/sms');

function sendSMS(message) {
  // Implement SMS sending logic using Twilio or other SMS gateway
  console.log(`Sending SMS: ${message}`);
}

module.exports = { sendSMS };
