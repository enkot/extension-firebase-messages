const firebaseConfig = {
  /*
    Firebase config here
  */
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(/* Public key here */);

messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log('getToken success: ', currentToken);
  } else {
    console.log('getToken failure');
  }
  }).catch((err) => {
  console.log('getToken error: ', err);
});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('getToken success: ', refreshedToken);
  }).catch((err) => {
    console.log('onTokenRefresh error: ', err);
  });
});

messaging.onMessage((payload) => {
  console.log('Message received: ', payload)
})