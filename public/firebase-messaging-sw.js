
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({

  apiKey: "AIzaSyC9eIhmokrKlLB_zL0mL-yReUKw0zqGpi4",
  authDomain: "employee-app-8a676.firebaseapp.com",
  projectId: "employee-app-8a676",
  storageBucket: "employee-app-8a676.appspot.com",
  messagingSenderId: "147188562504",
  appId: "1:147188562504:web:c372ea409fa375a5d3767d",
  measurementId: "G-CYQGK3T0LV",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: "/logo.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
