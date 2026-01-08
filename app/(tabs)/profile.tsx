import { auth, db } from "@/services/firebaseConfig";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextInputField from "../../components/ui/TextInputField";

const translations = {
  az: {
    personalInfo: "Şəxsi Məlumat",
    firstName: "Ad",
    lastName: "Soyad",
    age: "Yaş",
    healthInfo: "Sağlamlıq Məlumatı",
    weight: "Çəki (kq)",
    height: "Boy (sm)",
    settings: "Ayarlar",
    language: "Dil seçimi",
    notification: "Bildiriş tənzimləmələri",
    selectLanguage: "Dil Seçin",
    azerbaijani: "Azərbaycanca",
    english: "English",
    russian: "Русский",
  },
  en: {
    personalInfo: "Personal Information",
    firstName: "First Name",
    lastName: "Last Name",
    age: "Age",
    healthInfo: "Health Information",
    weight: "Weight (kg)",
    height: "Height (cm)",
    settings: "Settings",
    language: "Language",
    notification: "Notification",
    selectLanguage: "Select Language",
    azerbaijani: "Azerbaijani",
    english: "English",
    russian: "Russian",
  },
  ru: {
    personalInfo: "Личная информация",
    firstName: "Имя",
    lastName: "Фамилия",
    age: "Возраст",
    healthInfo: "Информация о здоровье",
    weight: "Вес (кг)",
    height: "Рост (см)",
    settings: "Настройки",
    language: "Язык",
    notification: "Уведомления",
    selectLanguage: "Выберите язык",
    azerbaijani: "Azerbaijani",
    english: "English",
    russian: "Русский",
  },
};

export default function Profile() {
  const [language, setLanguage] = useState<"az" | "en" | "ru">("az");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    height: "",
    phone: "",
    photoURL: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [notificationSetting, setNotificationSetting] = useState<"none" | "periodic" | "all">("none");
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [notificationOption, setNotificationOption] = useState("all");
  const t = translations[language];
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data() as typeof userData);
          setNotificationSetting(userDoc.data().notificationSetting || "none");
        }
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (field: keyof typeof userData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
    setIsEditing(true);
  };

  const storage = getStorage();

  const handlePhotoChange = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const newPhotoUri = result.assets[0].uri;

      // Delete old photo from Firebase Storage
      if (userData.photoURL) {
        const oldPhotoRef = ref(storage, userData.photoURL);
        await deleteObject(oldPhotoRef).catch((error) => {
          console.error("Failed to delete old photo:", error);
        });
      }

      // Upload new photo to Firebase Storage
      const photoRef = ref(storage, `profile_photos/${user.uid}`);
      const response = await fetch(newPhotoUri);
      const blob = await response.blob();
      await uploadBytes(photoRef, blob);

      // Get the download URL and update Firestore
      const downloadURL = await getDownloadURL(photoRef);
      handleInputChange("photoURL", downloadURL);
      await updateDoc(doc(db, "users", user.uid), { photoURL: downloadURL });
    }
  };

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), { ...userData, notificationSetting });
      setIsEditing(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Photo */}
      <View style={styles.profilePhotoContainer}>
        <View style={styles.profilePhotoWrapper}>
          {userData.photoURL ? (
            <Image source={{ uri: userData.photoURL }} style={styles.profilePhoto} />
          ) : (
            <Text style={styles.initials}>PP</Text>
          )}
          <TouchableOpacity style={styles.cameraIconButton} onPress={handlePhotoChange}>
            <MaterialCommunityIcons name="camera" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.personalInfo}</Text>
        <TextInputField
          placeholder={t.firstName}
          value={userData.firstName}
          onChangeText={(value) => handleInputChange("firstName", value)}
        />
         <TextInputField
          placeholder={t.lastName}
          value={userData.lastName}
          onChangeText={(value) => handleInputChange("lastName", value)}
        />
        <TextInputField
          placeholder={t.age}
          keyboardType="numeric"
          value={userData.age}
          onChangeText={(value) => handleInputChange("age", value)}
        />
        <TextInputField
          placeholder="Phone"
          keyboardType="phone-pad"
          value={userData.phone}
          onChangeText={(value) => handleInputChange("phone", value)}
        />
      </View>

      {/* Health Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.healthInfo}</Text>
        <TextInputField
          placeholder={t.weight}
          keyboardType="numeric"
          value={userData.weight}
          onChangeText={(value) => handleInputChange("weight", value)}
        />
        <TextInputField
          placeholder={t.height}
          keyboardType="numeric"
          value={userData.height}
          onChangeText={(value) => handleInputChange("height", value)}
        />
      </View>

      {isEditing && (
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      )}

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.settings}</Text>
        <View style={styles.settingsRow}>
          <TouchableOpacity 
            style={styles.buttonWrapper}
            onPress={() => setShowLanguageModal(true)}
          >
            <Text style={styles.settingButtonText}>{t.language}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonWrapper}
            onPress={() => setShowNotificationModal(true)}
          >
            <Text style={styles.settingButtonText}>{t.notification}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutIconContainer} onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={24} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Language Modal */}
      <Modal
        visible={showLanguageModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t.selectLanguage}</Text>
            
            <TouchableOpacity 
              style={styles.languageOption}
              onPress={() => {
                setLanguage("az");
                setShowLanguageModal(false);
              }}
            >
              <Text style={styles.languageOptionText}>{t.azerbaijani}</Text>
              {language === "az" && <MaterialCommunityIcons name="check" size={24} color="#073D3D" />}
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.languageOption}
              onPress={() => {
                setLanguage("en");
                setShowLanguageModal(false);
              }}
            >
              <Text style={styles.languageOptionText}>{t.english}</Text>
              {language === "en" && <MaterialCommunityIcons name="check" size={24} color="#073D3D" />}
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.languageOption}
              onPress={() => {
                setLanguage("ru");
                setShowLanguageModal(false);
              }}
            >
              <Text style={styles.languageOptionText}>{t.russian}</Text>
              {language === "ru" && <MaterialCommunityIcons name="check" size={24} color="#073D3D" />}
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowLanguageModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Notification Settings Modal */}
      <Modal
        visible={showNotificationModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowNotificationModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t.notification}</Text>
            <TouchableOpacity
              style={[styles.notificationOption, notificationOption === "all" && styles.activeButton]}
              onPress={() => setNotificationOption("all")}
            >
              <Text style={[styles.notificationOptionText, notificationOption === "all" && styles.activeButton]}>Bütün bildirişlər</Text>
              {notificationOption === "all" && <MaterialCommunityIcons name="check" size={24} color="#073D3D" />}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.notificationOption, notificationOption === "periodic" && styles.activeButton]}
              onPress={() => setNotificationOption("periodic")}
            >
              <Text style={[styles.notificationOptionText, notificationOption === "periodic" && styles.activeButton]}>Mutəmadi yoxlanış bildirişləri</Text>
              {notificationOption === "periodic" && <MaterialCommunityIcons name="check" size={24} color="#073D3D" />}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.notificationOption, notificationOption === "tests" && styles.activeButton]}
              onPress={() => setNotificationOption("tests")}
            >
              <Text style={[styles.notificationOptionText, notificationOption === "tests" && styles.activeButton]}>Yeni testlər və kampaniyalar</Text>
              {notificationOption === "tests" && <MaterialCommunityIcons name="check" size={24} color="#073D3D" />}
            </TouchableOpacity>



            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowNotificationModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#D1DEBE",
    width: "100%",
    height: "100%",
  },
  profilePhotoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  profilePhotoWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#073D3D",
    backgroundColor: "#073D3D",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cameraIconButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#073D3D",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 2,
  },
  initials: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  section: {
    marginBottom: 20,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  settingsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonWrapper: {
    backgroundColor: "#073D3D",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
  },
  settingButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  logoutIconContainer: {
    padding: 7,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    width: "80%",
    minHeight: 250,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#073D3D",
  },
  languageOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  languageOptionText: {
    fontSize: 16,
    color: "#073D3D",
    fontWeight: "500",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: "#073D3D",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  profilePhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  submitButton: {
    backgroundColor: "#073D3D",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  activeButton: {
    backgroundColor: "#0A5F5F",
    color: "#FFFFFF",
  },
  notificationOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  notificationOptionText: {
    fontSize: 16,
    color: "#073D3D",
    fontWeight: "500",
  },
});