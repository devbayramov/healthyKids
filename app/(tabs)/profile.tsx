import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
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
      <View style={{ padding: 16, paddingTop: 36, backgroundColor: '#C7D6B8', borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#073D3D' }}>PROFİL</Text>
      </View>
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
                borderWidth: idx === 0 ? 2 : 0,
                borderColor: idx === 0 ? '#B37CFB' : '#fff',
                padding: 16,
                shadowColor: '#073D3D33',
                shadowOpacity: 0.05,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 1 },
                elevation: 2,
              }}
            >
              <Text style={{ color: '#073D3D', fontWeight: 'bold', fontSize: 17 }}>
                {box.label}
              </Text>
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
