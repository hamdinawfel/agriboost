var smsCodeGenerator = require('../helpers/smsCodeGenerator');
var sendSmsMessage = require('./sendSmsMessage');

const sendVerificationCode = (req, res, next) => {
  const message =
    'إستعمل هذا الرقم' +
    smsCodeGenerator() +
    'لإتمام عملية التسجيل في دورة التكوين  لمشروع أڨريبوست';

  sendSmsMessage(req, res, next, message);
};

module.exports = sendVerificationCode;
