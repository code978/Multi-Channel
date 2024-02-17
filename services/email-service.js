const { sendEmail } = require('../channels/email');

function sendEmail(message) {
  // Implement email sending logic using nodemailer or other email service
  console.log(`Sending email: ${message}`);
}

module.exports = { sendEmail };
