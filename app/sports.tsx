import { useLanguage } from "@/context/LanguageContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SportsOption {
  id: string;
  title: string;
  icon: string;
  route: string;
}

export default function Sports() {
      const { language, setLanguage, t } = useLanguage();
  
  const router = useRouter();

  const sportGroups: SportsOption[] = [
    {
      id: "1",
      title: t.upperBody,
      icon: "arm-flex",
      route: "/sports-detail/upper-body",
    },
    {
      id: "2",
      title: t.lowerBody,
      icon: "run",
      route: "/sports-detail/lower-body",
    },
    {
      id: "3",
      title: t.core,
      icon: "dumbbell",
      route: "/sports-detail/core",
    },
    {
      id: "4",
      title: t.cardio,
      icon: "heart-pulse",
      route: "/sports-detail/cardio",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t.sportsExercises}</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Sport Groups */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {sportGroups.map((sport) => (
          <TouchableOpacity
            key={sport.id}
            style={styles.sportBox}
            onPress={() => router.push(sport.route as any)}
          >
            <MaterialCommunityIcons
              name={sport.icon as any}
              size={50}
              color="#A3C9A8"
            />
            <View style={styles.divider} />
            <Text style={styles.sportTitle}>{sport.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D1DEBE",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  sportBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  divider: {
    height: 2,
    backgroundColor: "#A3C9A8",
    width: "80%",
    marginVertical: 12,
  },
  sportTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
