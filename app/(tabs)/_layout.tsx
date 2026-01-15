import CustomNavBar from "@/components/CustomNavBar";
import { useLanguage } from "@/context/LanguageContext";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
    const { language, setLanguage, t } = useLanguage();
  
  return (
    <View style={{ flex: 1, backgroundColor: "#D1DEBE" }}>
      <Tabs initialRouteName="index" screenOptions={{ headerShown: false }} tabBar={(props) => <CustomNavBar {...props} />}>
        <Tabs.Screen name="index" options={{ title: t.homeTab }} />
        <Tabs.Screen name="tests" options={{ title: t.testTab }} />
        <Tabs.Screen name="healthy" options={{ title: t.healthy }} />
        <Tabs.Screen name="profile" options={{ title: t.profile }} />
      </Tabs>
    </View>
  );
}

