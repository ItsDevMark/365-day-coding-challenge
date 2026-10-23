import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardFlip() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Flashcard Study</Text>
      <Text style={styles.sub}>Component: CardFlip</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 14, backgroundColor: '#ffffff', borderRadius: 8, marginVertical: 6 },
  title: { fontSize: 16, fontWeight: 'bold' },
  sub: { fontSize: 12, color: '#666' }
});
