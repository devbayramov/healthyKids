import PrimaryButton from "@/components/ui/PrimaryButton";
import TextInputField from "@/components/ui/TextInputField";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Xəta", "E-mail və şifrə məcburidir.");
      return;
    }
    // Burada login sorğusunu edəcəksən.
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Вход</Text>

        <View style={styles.form}>
          <TextInputField
            placeholder="E-Mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInputField
            placeholder="Пароль"
            secureTextEntry
            style={{ marginTop: 12 }}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <PrimaryButton title="Войти" onPress={handleLogin} />
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>У вас нет аккаунта? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/register")}>
            <Text style={[styles.bottomText, styles.bottomLink]}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#D1DEBE",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#073D3D",
    textAlign: "center",
    marginBottom: 40,
  },
  form: {
    width: "100%",
  },
  buttonWrapper: {
    marginTop: 40,
  },
  bottomRow: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 12,
    color: "#073D3D",
  },
  bottomLink: {
    textDecorationLine: "underline",
  },
});


