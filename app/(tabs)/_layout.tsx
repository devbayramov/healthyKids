import { Slot, useRouter, useSegments } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TABS = [
  {
    key: 'healthy',
    label: 'Sağlamlıq',
    route: '/(tabs)/healthy',
  },
  {
    key: 'home',
    label: 'Əsas',
    route: '/(tabs)/home',
  },
  {
    key: 'profile',
    label: 'Profil',
    route: '/(tabs)/profile',
  },
];

export default function CustomTabBarLayout() {
  const router = useRouter();
  const segments = useSegments();
  // Aktif tabı route'a görə avtomatik uyğunlaşdır
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    const idx = TABS.findIndex(tab =>
      segments?.[segments.length - 1]?.toLowerCase() === tab.key
    );
    if (idx >= 0) setActiveTab(idx);
  }, [segments]);

  const handlePress = (idx: number) => {
    setActiveTab(idx);
    router.push(TABS[idx].route as any);
  };

  return (
    <View style={styles.container}>
      <Slot />
      <View style={styles.tabBar}>
        {TABS.map((tab, idx) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              activeTab === idx && styles.activeTab,
              activeTab === idx && { backgroundColor: '#073D3D' },
            ]}
            onPress={() => handlePress(idx)}
            activeOpacity={0.85}
          >
            <Text style={{ color: activeTab === idx ? '#fff' : '#073D3D', fontWeight: 'bold' }}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1DEBE',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C7D6B8',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginHorizontal: 8,
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 24,
    justifyContent: 'center',
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
});
