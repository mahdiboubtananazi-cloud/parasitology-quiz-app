import React from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from '../QuizScreen_styles/styles';

export default function QuestionCard({ 
  currentQuestion, 
  totalQuestions, 
  questionText, 
  topicLabel,
  timeLeft,
  slideAnim,
  scaleAnim,
  timerPulseAnim
}) {
  return (
    <View style={styles.questionContainer}>
      {/* 1. العداد العائم (Absolute Positioned) */}
      <Animated.View
        style={[
          styles.timerContainer,
          timeLeft <= 10 && { borderColor: '#DC2626' },
          { transform: [{ scale: timerPulseAnim }] }
        ]}
      >
        <Text style={[
          styles.timerText,
          timeLeft <= 10 && { color: '#DC2626' }
        ]}>
          {timeLeft}
        </Text>
      </Animated.View>

      {/* 2. كارت السؤال */}
      <Animated.View
        style={[
          styles.questionCard,
          {
            transform: [
              { translateX: slideAnim },
              { scale: scaleAnim }
            ]
          }
        ]}
      >
        {/* Badge الفئة داخل الكارت */}
        {topicLabel && (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{topicLabel}</Text>
          </View>
        )}
        
        <Text style={styles.questionText}>{questionText}</Text>
      </Animated.View>
      
      {/* رقم السؤال تحت الكارت مباشرة بخط صغير */}
      <View style={{ alignItems: 'center', marginTop: 5 }}>
         <Text style={styles.questionCounterText}>
           Question {currentQuestion + 1} sur {totalQuestions}
         </Text>
      </View>
    </View>
  );
}
