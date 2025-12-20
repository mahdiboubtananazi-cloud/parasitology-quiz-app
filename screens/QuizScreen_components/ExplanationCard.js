import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // تأكد من وجود المكتبة
import { styles } from '../QuizScreen_styles/styles';

export default function ExplanationCard({ 
  isCorrect, 
  explanation, 
  isLastQuestion, 
  onNext, 
  explanationFadeAnim, 
  explanationSlideAnim 
}) {
  return (
    <Animated.View 
      style={[
        styles.explanationCard,
        isCorrect ? styles.explanationCorrect : styles.explanationWrong,
        { 
          opacity: explanationFadeAnim,
          transform: [{ translateY: explanationSlideAnim }]
        }
      ]}
    >
      {/* Header with Icon */}
      <View style={styles.explanationHeader}>
        <Ionicons 
          name={isCorrect ? "checkmark-circle" : "alert-circle"} 
          size={22} 
          color={isCorrect ? "#10B981" : "#EF4444"} 
        />
        <Text style={[
          styles.explanationTitle, 
          { color: isCorrect ? "#065F46" : "#991B1B" }
        ]}>
          {isCorrect ? "Bonne réponse !" : "Réponse incorrecte"}
        </Text>
      </View>

      {/* Explanation Text */}
      <Text style={styles.explanationText}>
        {explanation || "Aucune explication disponible pour cette question."}
      </Text>

      {/* Next Button inside the card flow (Optional, or keep it separate) */}
      <TouchableOpacity 
        style={[styles.nextButton, { marginTop: 15 }]} 
        onPress={onNext}
        activeOpacity={0.8}
      >
        <Text style={styles.nextButtonText}>
          {isLastQuestion ? "Voir Résultats" : "Suivant"}
        </Text>
        <Ionicons 
          name={isLastQuestion ? "trophy-outline" : "arrow-forward"} 
          size={20} 
          color="#FFF" 
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
