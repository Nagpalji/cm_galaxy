// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDsxsaZLORKXQTNadmXH8yussN_nytiFCk",
  authDomain: "cmgalaxy-f6c13.firebaseapp.com",
  projectId: "cmgalaxy-f6c13",
  storageBucket: "cmgalaxy-f6c13.appspot.com",
  messagingSenderId: "939419770063",
  appId: "1:939419770063:web:78c064c622d26a216d6bba",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  var action_click = payload.data.click_action;
  console.log('====================================');
  console.log({action_click});
  console.log('====================================');
  // eentpayload.openWindow(action_click);
  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow(action_click));
  });
});
