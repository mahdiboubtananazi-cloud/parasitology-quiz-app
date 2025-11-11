import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function AnimatedSplash() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ParaQuiz</Text>
      <ActivityIndicator size="large" color="#4A90E2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  }
});
