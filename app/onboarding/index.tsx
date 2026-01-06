import { router } from "expo-router";
import { useRef, useState } from "react";
import type { FlatList as FlatListType } from "react-native";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const [index, setIndex] = useState(0);
    const flatListRef = useRef<FlatListType>(null);
    const { width } = Dimensions.get("window");

    const slides = [
        {
          image: require('../../assets/images/kangaroo1.png'),
          title: "Healthy Kids",
          desc: "Забота о спине - легко и весело\n\nИгры, советы и упражнения для здоровья вашей спины",
        },
        {
          image: require('../../assets/images/kangaroo2.png'),
          title: "Healthy Kids",
          desc: "Забота о спине - легко и весело\n\nИгры, советы и упражнения для здоровья вашей спины",
        },
        {
          image: require('../../assets/images/kangaroo3.png'),
          title: "Healthy Kids",
          desc: "Забота о спине - легко и весело\n\nИгры, советы и упражнения для здоровья вашей спины",
        },
      ];



    
      const handleNext = () => {
        if (index < slides.length - 1) {
          setIndex(index + 1);
          flatListRef.current && flatListRef.current.scrollToIndex({ index: index + 1 });
        } else {
            //@ts-ignore
          router.replace("/auth/register"); 
        }
      };
    
      return (
        <View style={{ flex: 1, backgroundColor: "#D1DEBE" }}>
          <FlatList
            ref={flatListRef}
            data={slides}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setIndex(newIndex);
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  width,
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 24,
                }}
              >
                {/* Yuxarıda başlıq */}
                <Text
                  style={{
                    color: "#073D3D",
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    marginBottom: 24,
                  }}
                >
                  Healthy Kids
                </Text>

                {/* Şəkil */}
                <Image
                  source={item.image}
                  style={{ width: 260, height: 300, marginBottom: 28 }}
                  resizeMode="contain"
                />

                {/* Alt mətni daha yığcam box içində saxla */}
                <View style={{ width: "80%", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "#073D3D",
                      fontWeight: "bold",
                      fontSize: 20,
                      textAlign: "center",
                      marginBottom: 8,
                    }}
                  >
                    Забота о спине -{"\n"}легко и весело
                  </Text>
                  <Text
                    style={{
                      color: "#1A2B2B",
                      fontSize: 14,
                      textAlign: "center",
                      lineHeight: 20,
                    }}
                  >
                    Игры, советы и упражнения{"\n"}для здоровья вашей спины
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(_, i) => String(i)}
            extraData={index}
          />
        
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  margin: 3,
                  borderRadius: 5,
                  backgroundColor: i === index ? "#073D3D" : "#A9A9A9"
                }}
              />
            ))}
          </View>
          <TouchableOpacity onPress={handleNext} style={{ backgroundColor: "#073D3D", borderRadius: 50, width: "80%", alignSelf: "center", padding: 15, marginBottom: 40 }}>
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 17 }}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    }