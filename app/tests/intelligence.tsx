import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TestOption {
  id: string;
  title: string;
  icon: string;
  route: string;
}

export default function IntelligenceTests() {
  const router = useRouter();

  const tests: TestOption[] = [
    {
      id: "1",
      title: "Məntiq Sualları",
      icon: "head-cog",
      route: "/tests/intelligence-detail/logic",
    },
    {
      id: "2",
      title: "Ardıcıllıq Tapşırıqları",
      icon: "format-list-numbered",
      route: "/tests/intelligence-detail/sequences",
    },
    {
      id: "3",
      title: "Analogiyalar",
      icon: "link-variant",
      route: "/tests/intelligence-detail/analogies",
    },
    {
      id: "4",
      title: "Vizual Düşüncə",
      icon: "eye",
      route: "/tests/intelligence-detail/visual",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Məntiq Testləri</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Test Boxes */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {tests.map((test) => (
          <TouchableOpacity
            key={test.id}
            style={styles.testBox}
            onPress={() => router.push(test.route as any)}
          >
            <MaterialCommunityIcons
              name={test.icon as any}
              size={50}
              color="#A3C9A8"
            />
            <View style={styles.divider} />
            <Text style={styles.testTitle}>{test.title}</Text>
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
  testBox: {
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
  testTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
