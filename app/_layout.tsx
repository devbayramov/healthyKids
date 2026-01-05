import CustomNavBar from "@/components/CustomNavBar";
import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs tabBar={(props)=><CustomNavBar {...props}/>}>
    <Tabs.Screen name="healthy" options={{title: "Healthy"}}/>
    <Tabs.Screen name="index" options={{title: "Home"}}/>
    <Tabs.Screen name="profile" options={{title: "Profile"}}/>

    </Tabs>;
}
