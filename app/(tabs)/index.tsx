import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface SettingItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  type: 'switch' | 'arrow' | 'info';
  value?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
}

export default function ProfileScreen() {
  // Box grid için kutu listesi
  const boxes = [
    { key: 'children', label: 'Mənim uşaqlarım' },
    { key: 'vaccines', label: 'Peyvəndlər' },
    { key: 'examinations', label: 'Müşahidələr' },
    { key: 'allergy', label: 'Allergiya' },
    { key: 'personal', label: 'Şəxsi məlumatlar' },
    { key: 'nicknames', label: 'Ləqəblər' },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#D1DEBE' }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 36 }}>
        <Text style={{ color: '#073D3D', fontWeight: 'bold', fontSize: 22, marginBottom: 24 }}>
          Salam, Nazrin Tagieva!
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {boxes.map((box, idx) => (
            <View
              key={box.key}
              style={{
                width: '48%',
                height: 100,
                borderRadius: 18,
                marginBottom: 16,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                backgroundColor: '#fff',
                borderWidth: idx === 0 ? 2 : 0, // Sadece ilk (sol üst) vurgulu
                borderColor: idx === 0 ? '#B37CFB' : '#fff',
                padding: 16,
                shadowColor: '#073D3D33',
                shadowOpacity: 0.05,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 1 },
                elevation: 2,
              }}
            >
              <Text style={{ color: '#073D3D', fontWeight: 'bold', fontSize: 17 }}>{box.label}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 14,
            paddingVertical: 18,
            marginTop: 12,
            borderWidth: 1,
            borderColor: '#B7C8AF',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#073D3D', fontWeight: 'bold', fontSize: 15 }}>Çıxış</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIconBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  profileName: {
    marginBottom: 4,
  },
  profileEmail: {
    opacity: 0.6,
    fontSize: 14,
  },
  settingsContainer: {
    paddingHorizontal: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  settingItemFirst: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  settingItemLast: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomWidth: 0,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 12,
    opacity: 0.6,
  },
  logoutContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
    marginBottom: 32,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  logoutText: {
    color: '#ef4444',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 16,
  },
});

