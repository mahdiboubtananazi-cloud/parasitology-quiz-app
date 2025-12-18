import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icons } from './Icons';
import { styles } from '../QuizScreen_styles/styles';

export default function QuizHeader({ categoryName, onFilterPress }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.headerIcon}>🔬</Text>
        <Text style={styles.headerTitle}>
          {categoryName ? `Quiz ${categoryName}` : 'Quiz de Parasitologie'}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.filterButton}
        onPress={onFilterPress}
      >
        <Icons.Filter size={22} color="#004643" />
      </TouchableOpacity>
    </View>
  );
}