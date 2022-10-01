module.exports = function smsCodeGenerator() {
  let smsCode = Math.floor(1000 + Math.random() * 9000);
  return smsCode;
};
