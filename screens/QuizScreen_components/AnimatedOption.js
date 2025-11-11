// screens/QuizScreen_components/AnimatedOption.js
import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AnimatedOption({ 
  option, 
  isSelected, 
  showCorrect, 
  showWrong, 
  showExplanation, 
  onPress, 
  styles 
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isSelected) {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isSelected]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          isSelected && styles.optionSelected,
          showCorrect && styles.optionCorrect,
          showWrong && styles.optionWrong,
        ]}
        onPress={onPress}
        disabled={showExplanation}
      >
        <Text style={[
          styles.optionText,
          (isSelected || showCorrect || showWrong) && styles.optionTextBold
        ]}>
          {option}
        </Text>
        
        {showCorrect && (
          <Ionicons name="checkmark-circle" size={24} color="#10b981" />
        )}
        {showWrong && (
          <Ionicons name="close-circle" size={24} color="#dc2626" />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}