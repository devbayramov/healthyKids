import { router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../services/firebaseConfig";

export default function Index() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, navigate to the tabs page
        router.replace("/(tabs)");
      } else {
        // If user is not logged in, navigate to the onboarding page
        router.replace("/(tabs)");
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return null;
}
