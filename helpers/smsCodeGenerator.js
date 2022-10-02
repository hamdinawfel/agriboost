module.exports = function smsCodeGenerator() {
  return (smsCode = Math.floor(1000 + Math.random() * 9000).toString());
};
