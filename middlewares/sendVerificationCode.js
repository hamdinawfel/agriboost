var smsCodeGenerator = require('../helpers/smsCodeGenerator');
var sendSmsMessage = require('./sendSmsMessage');

const sendVerificationCode = (req, res, next) => {
  const smsVerificatioCode = smsCodeGenerator();
  const message =
    'إستعمل هذا الرقم' +
    smsVerificatioCode +
    'لإتمام عملية التسجيل في دورة التكوين  لمشروع أڨريبوست';

  sendSmsMessage(req, res, next, message);
  res.smsVerificatioCode = smsVerificatioCode;
};

module.exports = sendVerificationCode;
