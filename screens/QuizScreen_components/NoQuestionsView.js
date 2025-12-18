import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizHeader from './QuizHeader';
import HorizontalFilter from '../../components/HorizontalFilter';
import { styles } from '../QuizScreen_styles/styles';

export default function NoQuestionsView({
  categoryName,
  timerPulseAnim,
  onFilterPress,
  onResetFilters,
  showFilterModal,
  setShowFilterModal,
  selectedFilters,
  onApplyFilters,
  currentLabels
}) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <QuizHeader 
        categoryName={categoryName}
        onFilterPress={onFilterPress}
      />

      <View style={styles.noQuestionsContainer}>
        <Animated.View
          style={{
            transform: [{ scale: timerPulseAnim }]
          }}
        >
          <Text style={styles.noQuestionsEmoji}>🔍</Text>
        </Animated.View>
        <Text style={styles.noQuestionsTitle}>Aucune question trouvée</Text>
        <Text style={styles.noQuestionsText}>
          Les filtres sélectionnés ne correspondent à aucune question.{'\n'}
          Veuillez ajuster vos critères.
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={onFilterPress}
        >
          <Text style={styles.primaryButtonText}>Modifier les filtres</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onResetFilters}
        >
          <Text style={styles.secondaryButtonText}>Réinitialiser tout</Text>
        </TouchableOpacity>
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