
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getMessaging } from "firebase/messaging"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAPJx_1Jc5eH6STHwysTsVdGt7hliLgz0",
  authDomain: "cmgalaxy-8de7d.firebaseapp.com",
  projectId: "cmgalaxy-8de7d",
  storageBucket: "cmgalaxy-8de7d.appspot.com",
  messagingSenderId: "595038576433",
  appId: "1:595038576433:web:73e296d27fbda0f44b9a10",
  measurementId: "G-GKSE4F21K7"
}
const app = initializeApp(firebaseConfig)
export const messaging = getMessaging(app)
export default app
