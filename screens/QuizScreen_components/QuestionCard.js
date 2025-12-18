import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Icons } from './Icons';
import { styles } from '../QuizScreen_styles/styles';

export default function QuestionCard({ 
  currentQuestion, 
  totalQuestions, 
  questionText, 
  topic, 
  topicLabel,
  timeLeft,
  slideAnim,
  scaleAnim,
  timerPulseAnim
}) {
  return (
    <>
      <View style={styles.questionHeader}>
        <View style={styles.questionInfo}>
          <Text style={styles.questionNumber}>
            Question {currentQuestion + 1}/{totalQuestions}
          </Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {topicLabel || topic}
            </Text>
          </View>
        </View>
        
        <Animated.View 
          style={[
            styles.timerCircle,
            { transform: [{ scale: timerPulseAnim }] }
          ]}
        >
          <View style={styles.timerCircleInner}>
            <Icons.Clock size={16} color={timeLeft <= 10 ? "#dc2626" : "#004643"} />
            <Text style={[
              styles.timerText,
              timeLeft <= 10 && styles.timerWarning
            ]}>
              {timeLeft}s
            </Text>
          </View>
        </Animated.View>
      </View>

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
        <Text style={styles.questionText}>{questionText}</Text>
      </Animated.View>
    </>
  );
}