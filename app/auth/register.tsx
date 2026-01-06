import PrimaryButton from "@/components/ui/PrimaryButton";
import TextInputField from "@/components/ui/TextInputField";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!firstName || !lastName || !phone || !email || !password) {
      Alert.alert("Xəta", "Bütün sahələr məcburidir.");
      return;
    }
    // Burada backend-ə sorğu göndərə bilərsən.
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Регистрация</Text>

        <View style={styles.form}>
          <TextInputField
            placeholder="Имя"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInputField
            placeholder="Фамилия"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInputField
            placeholder="+994 _ _ ___ __ __"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInputField
            placeholder="E-Mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInputField
            placeholder="Пароль"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.checkboxRow}>
          <View style={styles.checkbox} />
          <Text style={styles.checkboxText}>
            Я даю согласие на обработку моих{"\n"}
            <Text style={styles.linkText}>личных данных</Text>
          </Text>
        </View>

        <View style={styles.buttonWrapper}>
          <PrimaryButton title="Зарегистрироваться" onPress={handleRegister} />
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>У вас уже есть аккаунт? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text style={[styles.bottomText, styles.bottomLink]}>Войти</Text>
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
    display:"flex",
    gap:"20"
    
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 16,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#073D3D",
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 12,
    color: "#073D3D",
  },
  linkText: {
    textDecorationLine: "underline",
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


