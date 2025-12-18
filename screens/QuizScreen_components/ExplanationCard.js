import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Icons } from './Icons';
import { styles } from '../QuizScreen_styles/styles';

export default function ExplanationCard({ 
  isCorrect, 
  explanation, 
  isLastQuestion,
  onNext,
  explanationFadeAnim,
  explanationSlideAnim
}) {
  if (!explanation) return null;

  return (
    <>
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
        <View style={styles.explanationHeader}>
          {isCorrect ? (
            <Icons.CheckCircle2 size={20} color="#10b981" />
          ) : (
            <Icons.AlertCircle size={20} color="#dc2626" />
          )}
          <Text style={[
            styles.explanationTitle,
            { color: isCorrect ? '#10b981' : '#dc2626' }
          ]}>
            {isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte'}
          </Text>
        </View>
        
        <Text style={styles.explanationText}>{explanation}</Text>
      </Animated.View>

      <Animated.View
        style={{
          opacity: explanationFadeAnim,
          transform: [{ translateY: explanationSlideAnim }]
        }}
      >
        <TouchableOpacity
          style={styles.nextButton}
          onPress={onNext}
        >
          <Text style={styles.nextButtonText}>
            {isLastQuestion ? 'Voir les résultats' : 'Question suivante'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}