var sendSmsMessage = require('./sendSmsMessage');

const smsReminder = (req, res, next) => {
  const message = 'Reminder SMS';
  sendSmsMessage(req, res, next, message);
};

module.exports = smsReminder;
