require('dotenv').config();
const https = require('https');
const axios = require('axios');

const sendSmsMessage = (req, res, next, message) => {
  const options = {
    headers: {
      Authorization: `Bearer ${req.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const data = {
    outboundSMSMessageRequest: {
      address: `tel:+${req.body.phone}`,
      senderAddress: `tel:+${process.env.SENDER_PHONE_NUMBER}`,
      outboundSMSTextMessage: {
        message,
      },
    },
  };

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false, //TODO: ADD CA for security issue
  });

  axios.defaults.httpsAgent = httpsAgent;

  axios
    .post(
      `https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B${process.env.SENDER_PHONE_NUMBER}/requests`,
      data,
      options
    )
    .then((response) => {
      console.log(response.data);
      return next();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = sendSmsMessage;
