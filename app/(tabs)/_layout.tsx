import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Azerice başlıklar ve açıklamalar
const TABS = [
  {
    key: 'healthy',
    label: 'Sağlamlıq',
    icon: 'healthy.fill',
    route: '/(tabs)/home',
  },
  {
    key: 'home',
    label: 'Əsas',
    icon: 'home.fill',
    route: '/(tabs)/index',
  },
  {
    key: 'profile',
    label: 'Profil',
    icon: 'person.fill',
    route: '/(tabs)/profile',
  },
];

export default function CustomTabBarLayout() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const handlePress = (idx: number) => {
    setActiveTab(idx);
    router.push(TABS[idx].route as any);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      {/* Bottom Bar artık alta sabitlendi */}
      <View style={styles.tabBar}>
        {TABS.map((tab, idx) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              activeTab === idx && styles.activeTab,
              activeTab === idx && {backgroundColor: '#073D3D'}, // seçili tab tund ve belirgin
            ]}
            onPress={() => handlePress(idx)}
            activeOpacity={0.85}
          >
            <Text style={{
              color: activeTab === idx ? '#fff' : '#073D3D',
              fontWeight: 'bold'
            }}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1DEBE', // Genel arka plan
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C7D6B8',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,

    marginHorizontal: 8,
    marginBottom: 0,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    elevation: 24,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#DAF0E7',
  },
  rightTextBox: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#C7D6B8',
    borderRadius: 14,
    flex: 1,
  },
  rightText: {
    color: '#073D3D',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 18,
  },
});
