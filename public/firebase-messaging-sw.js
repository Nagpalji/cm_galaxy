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
  apiKey: "AIzaSyCAPJx_1Jc5eH6STHwysTsVdGt7hliLgz0",
  authDomain: "cmgalaxy-8de7d.firebaseapp.com",
  projectId: "cmgalaxy-8de7d",
  storageBucket: "cmgalaxy-8de7d.appspot.com",
  messagingSenderId: "595038576433",
  appId: "1:595038576433:web:73e296d27fbda0f44b9a10",
  measurementId: "G-GKSE4F21K7",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
const analytics = firebase.getAnalytics(app);

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  var action_click = payload.data.click_action;
  console.log("====================================");
  console.log({ action_click });
  console.log("====================================");
  // eentpayload.openWindow(action_click);
  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    firebase.analytics().logEvent("notificationclick", {
      campaignId: payload.data.campaignId,
      notificationId: payload.data.notificationId,
    });
    event.waitUntil(clients.openWindow(action_click));
  })
});
