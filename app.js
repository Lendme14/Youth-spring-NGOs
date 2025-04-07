// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD3mvLJORKunKc5HjLh73NJ1SkByp6797c",
  authDomain: "youthspring-af954.firebaseapp.com",
  projectId: "youthspring-af954",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Listen for auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userForm").addEventListener("submit", async (e) => {
      e.preventDefault();

      const docRef = doc(db, "Users", user.uid);
      await setDoc(docRef, {
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        description: document.getElementById("description").value,
        otherData: {
          age: parseInt(document.getElementById("age").value),
          isVerified: true
        }
      });

      alert("User info saved!");
    });
  } else {
    alert("You must be signed in to save info.");
  }
});
