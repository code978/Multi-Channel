

const sendEmail = require('./email-service')
const sendPushNotification = require('./push-notification-service')
const sendSMS = require('./sms-gateway');


module.exports = { sendEmail,sendPushNotification,sendSMS };