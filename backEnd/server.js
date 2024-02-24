// server.js
const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());


// Initialize web-push with your VAPID keys
const publicKey = 'BGvRzo8nMXyVmATOyEwKF_JuqLDuih-CtO21rNQIajRIUsoEcDc6bI8MPCWbzfj0xWRy2dplyAQ8PkrAieYIZ90';
const privateKey = 'q8R0oe8Nx7L8fDwQ_wV-GPH5iGXIR_AcHOWqvKvq6PY';
webPush.setVapidDetails('https://pakhshmart.com', publicKey, privateKey);

// Store subscriptions
const subscriptions = [];

// Handle subscription requests
app.post('/subscribe', (req, res) => {
  const { subscription } = req.body;
  subscriptions.push(subscription);
  res.status(201).json({});
});

// Send push notifications
app.post('/sendNotification', (req, res) => {
  const { notification } = req.body;

  subscriptions.forEach((subscription) => {
    webPush.sendNotification(subscription, JSON.stringify(notification))
      .catch((err) => console.error(err));
  });

  res.status(201).json({});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});