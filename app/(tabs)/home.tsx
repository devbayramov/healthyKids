import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#D1DEBE' }}>
      <View style={{ padding: 16, paddingTop: 36, backgroundColor: '#C7D6B8', borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#073D3D' }}>ANA SƏHİFƏ</Text>
      </View>
      {/* Diğer ana səhifə kontenti buraya */}
    </View>
  );
}
