//building an express app & host it cloud function

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HQCBaGHNWsy1zYaQo17D8Xwf15cVGpd2ZrSL132aQOHRJxwnIOfGsCn0aduXByWfApGqJCxGaURACizPyGf8kg600AZTtU8Ue'
);
//api

//app config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send('hello bina'));

// app.post('/payments/create', async (request, response) => {
//   const total = request.query.total;
//   console.log('Payemnt Request Recieved, YAY! for this amount', total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: 'usd',
//   });
//   //ok it was created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen - comand
exports.api = functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/clone-33d8a/us-central1/api
