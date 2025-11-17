// screens/QuizScreen_components/AnimatedOption.js - النسخة الصحيحة
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AnimatedOption({ 
  option, 
  index, 
  isSelected, 
  isCorrect, 
  showResult, 
  onPress 
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isSelected && showResult) {
      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 1.05,
          tension: 100,
          friction: 5,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isSelected, showResult]);

  const getButtonStyle = () => {
    if (showResult) {
      if (isSelected && isCorrect) {
        return styles.correctButton;
      }
      if (isSelected && !isCorrect) {
        return styles.incorrectButton;
      }
      if (!isSelected && isCorrect) {
        return styles.correctButton;
      }
    }
    if (isSelected) {
      return styles.selectedButton;
    }
    return styles.defaultButton;
  };

  const getIcon = () => {
    if (showResult) {
      if (isCorrect) {
        return <Ionicons name="checkmark-circle" size={24} color="#10B981" />;
      }
      if (isSelected && !isCorrect) {
        return <Ionicons name="close-circle" size={24} color="#EF4444" />;
      }
    }
    return null;
  };

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }],
        opacity: opacityAnim,
      }}
    >
      <TouchableOpacity
        style={[styles.optionButton, getButtonStyle()]}
        onPress={() => !showResult && onPress()}
        disabled={showResult}
        activeOpacity={0.7}
      >
        <Text style={styles.optionLabel}>{String.fromCharCode(65 + index)}.</Text>
        <Text style={styles.optionText}>{option}</Text>
        {getIcon()}
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  defaultButton: {
    borderColor: '#E2E8F0',
  },
  selectedButton: {
    borderColor: '#004643',
    backgroundColor: '#E0F2FE',
  },
  correctButton: {
    borderColor: '#10B981',
    backgroundColor: '#D1FAE5',
  },
  incorrectButton: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#64748B',
    marginRight: 12,
    minWidth: 24,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
    lineHeight: 22,
  },
});