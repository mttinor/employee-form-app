import { initializeApp } from "firebase/app";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC9eIhmokrKlLB_zL0mL-yReUKw0zqGpi4",
  authDomain: "employee-app-8a676.firebaseapp.com",
  projectId: "employee-app-8a676",
  storageBucket: "employee-app-8a676.appspot.com",
  messagingSenderId: "147188562504",
  appId: "1:147188562504:web:c372ea409fa375a5d3767d",
  measurementId: "G-CYQGK3T0LV",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
});
console.log(messaging, "messaging");
getToken(messaging, {
  vapidKey: `BCCanYrZeS4Pa0z0EXmj-Y3jRyLgcpFgUi_mbnycWsiRkvIsxqKPbrhlTtRTQneoBRuPiFGFyGex96IMiVArJqs`,
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      console.log("Token is :", currentToken);
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
