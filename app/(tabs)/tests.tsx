import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, Text, View } from "react-native";

const TestBox = ({
  icon,
  title,
  gradient,
}: {
  icon: string;
  title: string;
  gradient: [string, string];
}) => {
  return (
    <Pressable className="rounded-2xl overflow-hidden">
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="aspect-square justify-center items-center rounded-2xl"
      >
        {/* Background icon */}
        <Text
          className="absolute opacity-15 text-white"
          style={{ fontSize: 120 }}
        >
          {icon}
        </Text>

        {/* Transparent overlay */}
        <View className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <View className="z-10 items-center px-3">
          <Text className="text-5xl mb-3">{icon}</Text>
          <Text className="text-white font-bold text-center text-lg">
            {title}
          </Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default function Tests() {
  const testSections: Array<{
    title: string;
    boxes: Array<{ icon: string; title: string; gradient: [string, string] }>;
  }> = [

    {
      title: "IQ Testləri",
      boxes: [
        { icon: "🧠", title: "Məntiq", gradient: ["#DDA0DD", "#4B0082"] },
        { icon: "🔢", title: "Riyaziyyat", gradient: ["#9370DB", "#5F00B3"] },
        { icon: "📊", title: "Məntiq", gradient: ["#9370DB", "#5F00B3"] },
      { icon: "📊", title: "Məntiq", gradient: ["#9370DB", "#5F00B3"] },

      ],
    },
    {
      title: "Psixologiya Testləri",
      boxes: [
        { icon: "💭", title: "Şəxsiyyət", gradient: ["#6495ED", "#1E90FF"] },
        { icon: "😊", title: "Emosional", gradient: ["#4169E1", "#0047AB"] },
      ],
    },
    {
      title: "Maraqlı Testlər",
      boxes: [
        { icon: "🎮", title: "Oyun", gradient: ["#FF6347", "#FF4500"] },
        { icon: "🎨", title: "Sənət", gradient: ["#FF69B4", "#FF1493"] },
      ],
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 24,
        backgroundColor: "#D1DEBE",
      }}
    >
      {testSections.map((section, sectionIndex) => (
        <View key={sectionIndex} style={{ marginBottom: 24 }}>
          {/* Section Title */}
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
            {section.title}
          </Text>

          {/* 1x2 layout */}
          <View style={{ flexDirection: "row", gap: 16 }}>
            {section.boxes.map((box, boxIndex) => (
              <View
                key={boxIndex}
                style={{ flex: 1, aspectRatio: 1 }}
              >
                <TestBox
                  icon={box.icon}
                  title={box.title}
                  gradient={box.gradient}
                />
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

