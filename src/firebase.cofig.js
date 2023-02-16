
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getMessaging } from "firebase/messaging"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsxsaZLORKXQTNadmXH8yussN_nytiFCk",
  authDomain: "cmgalaxy-f6c13.firebaseapp.com",
  projectId: "cmgalaxy-f6c13",
  storageBucket: "cmgalaxy-f6c13.appspot.com",
  messagingSenderId: "939419770063",
  appId: "1:939419770063:web:78c064c622d26a216d6bba"
}
const app = initializeApp(firebaseConfig)
export const messaging = getMessaging(app)
export default app
