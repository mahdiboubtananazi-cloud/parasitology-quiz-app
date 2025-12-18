import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from './Icons';
import QuizHeader from './QuizHeader';
import HorizontalFilter from '../../components/HorizontalFilter';
import { styles } from '../QuizScreen_styles/styles';

export default function ResultsScreen({
  score,
  totalQuestions,
  categoryName,
  resultScaleAnim,
  onRestart,
  onGoHome,
  onFilterPress,
  showFilterModal,
  setShowFilterModal,
  selectedFilters,
  onApplyFilters,
  currentLabels
}) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultLevel = () => {
    if (percentage >= 90) return { 
      text: 'Excellent !', 
      emoji: '🏆', 
      color: '#004643', 
      icon: <Icons.Trophy size={32} color="#004643" />,
      advice: 'Maîtrise exceptionnelle ! Continuez à maintenir ce niveau d\'excellence.'
    };
    if (percentage >= 70) return { 
      text: 'Très bien !', 
      emoji: '⭐', 
      color: '#004643', 
      icon: <Icons.Star size={32} color="#004643" />,
      advice: 'Très bon niveau ! Quelques révisions pour atteindre l\'excellence.'
    };
    if (percentage >= 50) return { 
      text: 'Bien', 
      emoji: '👍', 
      color: '#004643', 
      icon: <Icons.CheckCircle2 size={32} color="#004643" />,
      advice: 'Niveau correct. Concentrez-vous sur vos points faibles pour progresser.'
    };
    return { 
      text: 'À réviser', 
      emoji: '📚', 
      color: '#004643', 
      icon: <Icons.Target size={32} color="#004643" />,
      advice: 'Des révisions sont nécessaires. Recommencez le quiz pour améliorer votre score.'
    };
  };

  const result = getResultLevel();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <QuizHeader 
        categoryName={categoryName}
        onFilterPress={onFilterPress}
      />

      <ScrollView 
        contentContainerStyle={styles.resultScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View 
          style={[
            styles.resultCard,
            { transform: [{ scale: resultScaleAnim }] }
          ]}
        >
          <View style={styles.resultHeader}>
            <Animated.View
              style={{
                transform: [{ scale: resultScaleAnim }]
              }}
            >
              <View style={[styles.resultIconContainer, { backgroundColor: '#ABD1C6' }]}>
                {result.icon}
              </View>
            </Animated.View>
            <Text style={styles.resultEmoji}>{result.emoji}</Text>
          </View>
          
          <Text style={[styles.resultLevel, { color: result.color }]}>
            {result.text}
          </Text>
          
          <View style={[styles.scoreCircle, { borderColor: result.color }]}>
            <Text style={[styles.scorePercentage, { color: result.color }]}>{percentage}%</Text>
            <Text style={styles.scoreText}>
              {score} / {totalQuestions}
            </Text>
          </View>

          <View style={styles.resultStats}>
            <View style={styles.resultStatItem}>
              <View style={[styles.statIconContainer, { backgroundColor: '#ABD1C6' }]}>
                <Icons.CheckCircle2 size={24} color="#004643" />
              </View>
              <Text style={styles.resultStatNumber}>{score}</Text>
              <Text style={styles.resultStatLabel}>Correctes</Text>
            </View>

            <View style={styles.resultDivider} />

            <View style={styles.resultStatItem}>
              <View style={[styles.statIconContainer, { backgroundColor: '#ABD1C6' }]}>
                <Icons.AlertCircle size={24} color="#004643" />
              </View>
              <Text style={styles.resultStatNumber}>{totalQuestions - score}</Text>
              <Text style={styles.resultStatLabel}>Incorrectes</Text>
            </View>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Conseil</Text>
            <Text style={styles.adviceText}>{result.advice}</Text>
          </View>
        </Animated.View>
      </ScrollView>

      <View style={styles.resultActionsContainer}>
        <View style={styles.resultActions}>
          <TouchableOpacity
            style={[styles.primaryButton, styles.resultButton]}
            onPress={onRestart}
          >
            <Icons.RotateCcw size={20} color="#ffffff" />
            <Text style={styles.primaryButtonText}>Recommencer</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.homeButton, styles.resultButton]}
            onPress={onGoHome}
          >
            <Icons.Home size={20} color="#ffffff" />
            <Text style={styles.homeButtonText}>Accueil</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.resultActionsRow}>
          <TouchableOpacity
            style={[styles.tertiaryButton, styles.resultButton]}
            onPress={onFilterPress}
          >
            <Icons.Filter size={20} color="#004643" />
            <Text style={styles.tertiaryButtonText}>Changer filtres</Text>
          </TouchableOpacity>
        </View>
      </View>

      <HorizontalFilter
        visible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        selectedFilters={selectedFilters}
        onApplyFilters={onApplyFilters}
        topicLabels={currentLabels}
      />
    </SafeAreaView>
  );
}