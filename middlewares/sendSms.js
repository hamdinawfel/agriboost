require('dotenv').config();
const https = require('https');
const axios = require('axios');
const qs = require('qs');

var smsCodeGenerator = require('../helpers/smsCodeGenerator');

exports.sendVerificationCode = (req, res, next) => {
  const options = {
    headers: {
      Authorization: process.env.AUTHORIZATION_HEADER,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  };
  const data = qs.stringify({
    grant_type: 'client_credentials',
  });
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  axios.defaults.httpsAgent = httpsAgent;
  axios
    .post('https://api.orange.com/oauth/v3/token', data, options)
    .then((response) => {
      console.log(response.data.access_token);
      return next();
    })
    .catch((err) => {
      console.log('error');
      console.log(err);
    });
};
