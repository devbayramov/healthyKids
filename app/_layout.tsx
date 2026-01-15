import { LanguageProvider } from "@/context/LanguageContext";
import { auth } from "@/services/firebaseConfig";
import { Stack, useRouter, useSegments } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function AuthCheck({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "auth";
    const inOnboarding = segments[0] === "onboarding";

    if (user && (inAuthGroup || inOnboarding)) {
      // User is signed in but on auth/onboarding page, redirect to home
      router.replace("/(tabs)");
    } else if (!user && !inAuthGroup && !inOnboarding) {
      // User is not signed in and not on auth/onboarding page, redirect to onboarding
      router.replace("/onboarding");
    }
  }, [user, loading, segments]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#D1DEBE" }}>
        <ActivityIndicator size="large" color="#073D3D" />
      </View>
    );
  }

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#D1DEBE" }} edges={["top"]}>
        <AuthCheck>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="onboarding/index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="auth/login" />
            <Stack.Screen name="auth/register" />
          </Stack>
        </AuthCheck>
      </SafeAreaView>
    </LanguageProvider>
  );
}
