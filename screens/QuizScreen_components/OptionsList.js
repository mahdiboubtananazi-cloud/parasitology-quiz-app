import React from 'react';
import { View } from 'react-native';
import AnimatedOption from './AnimatedOption';
import { styles } from '../QuizScreen_styles/styles';

export default function OptionsList({ 
  options, 
  selectedAnswer, 
  correctAnswer,
  showExplanation,
  onAnswerSelect 
}) {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option, index) => {
        const isSelected = selectedAnswer === index;
        const isCorrectAnswer = index === correctAnswer;
        const showCorrect = showExplanation && isCorrectAnswer;
        const showWrong = showExplanation && isSelected && selectedAnswer !== correctAnswer;

        return (
          <AnimatedOption
            key={index}
            option={option}
            isSelected={isSelected}
            showCorrect={showCorrect}
            showWrong={showWrong}
            showExplanation={showExplanation}
            onPress={() => onAnswerSelect(index)}
            styles={styles}
          />
        );
      })}
    </View>
  );
}