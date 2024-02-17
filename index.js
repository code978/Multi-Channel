const express = require('express');
const bodyParser = require('body-parser');
const { sendPushNotification, sendSMS, sendEmail } = require('./services');

const app = express();
const PORT = process.env.post || 3000;

app.use(bodyParser.json());

app.post('/send-notification', (req, res) => {
  const { message, channels } = req.body;

  if (!message || !channels || channels.length === 0) {
    return res.status(400).json({ error: 'Invalid request parameters' });
  }

  channels.forEach(channel => {
    switch (channel) {
      case 'push':
        sendPushNotification(message);
        break;
      case 'sms':
        sendSMS(message);
        break;
      case 'email':
        sendEmail(message);
        break;
      // Add more channels as needed
      default:
        break;
    }
  });

  res.status(200).json({ success: true, message: 'Notifications sent successfully' });
});

app.listen(PORT, () => {
  console.log(`Notification service is running on port ${PORT}`);
});
