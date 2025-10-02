import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TopicsScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Topics Screen - قيد التطوير</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBF4FF',
  },
  text: {
    fontSize: 20,
    color: '#1F2937',
  },
});