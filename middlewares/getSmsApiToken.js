require('dotenv').config();
const https = require('https');
const axios = require('axios');
const qs = require('qs');

// TODO: verify the token expiration before handling this middleware
const getSmsApiToken = (req, res, next) => {
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
    rejectUnauthorized: false, //TODO: ADD CA for security issue
  });
  axios.defaults.httpsAgent = httpsAgent;
  axios
    .post('https://api.orange.com/oauth/v3/token', data, options)
    .then((response) => {
      req.token = response.data.access_token;
      return next();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getSmsApiToken;
