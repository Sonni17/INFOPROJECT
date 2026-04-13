import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbW4Rwm6lJxc0u5OI5K887zAQbIwcYF9A",
  authDomain: "info-1601-project-fdc77.firebaseapp.com",
  projectId: "info-1601-project-fdc77",
  storageBucket: "info-1601-project-fdc77.firebasestorage.app",
  messagingSenderId: "188792371451",
  appId: "1:188792371451:web:95e6e74e1f7c36561f585e",
  measurementId: "G-CG6E6V0Q5K"
};

let db;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error("Firebase failed to initialize:", error);
}
