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
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "Users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();

      if (userData.profileCompleted) {
        window.location.href = "/dashboard.html"; // go to dashboard
      } else {
        window.location.href = "/update-profile.html"; // go to profile form
      }

    } else {
      // No user doc yet – treat as new
      window.location.href = "/update-profile.html";
    }
  }
});
{
  fullName: "John Doe",
  dateOfBirth: "2001-01-01",
  address: "123 Main St",
  phoneNumber: "1234567890",
  description: "Just me.",
  profileCompleted: true
    }
