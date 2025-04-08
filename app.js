// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

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
        },
        isNewUser: false // Set isNewUser to false after saving the profile
      });

      alert("User info saved!");
    });
  } else {
    alert("You must be signed in to save info.");
  }
});

// Redirect based on profile completion and new user status
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "Users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();

      if (userData.profileCompleted) {
        window.location.href = "/dashboard.html"; // go to dashboard
      } else if (userData.isNewUser) {
        window.location.href = "pages/edith-profile.html"; // go to profile form
      } else {
        // If the user is not new and profile is not completed
        window.location.href = "pages/edith-profile.html"; // go to profile form - CORRECTED
      }

    } else {
      // No user doc yet – treat as new
      window.location.href = "pages/edith-profile.html";
    }
  }
});
