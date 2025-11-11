// screens/ProgressScreen.js
import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { protozoaQuestions, protozoaLabels } from '../data/categories/protozoa';
import { helminthsQuestions, helminthsLabels } from '../data/categories/helminths';
import { arthropodsQuestions, arthropodsLabels } from '../data/categories/arthropods';

const { width: screenWidth } = Dimensions.get('window');

export default function ProgressScreen() {
  const navigation = useNavigation();
  
  // State
  const [totalQuestions, setTotalQuestions] = React.useState(0);
  const [answeredQuestions, setAnsweredQuestions] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  // Animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  // Effect for animations
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Calculate progress
  useEffect(() => {
    const total = allQuestions.length;
    const answered = Math.floor(total * 0.6); // مثال: 60% تم الإجابة عليها
    const correct = Math.floor(answered * 0.7); // مثال: 70% صحيحة

    setTotalQuestions(total);
    setAnsweredQuestions(answered);
    setCorrectAnswers(correct);
    setProgress((answered / total) * 100);
  }, [allQuestions]);

  // Handle back to home
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <ArrowLeft size={24} color="#004643" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Votre progression</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressOuter}>
          <Animated.View style={[styles.progressInner, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress.toFixed(0)}%</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{answeredQuestions}</Text>
          <Text style={styles.statLabel}>Questions répondues</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{correctAnswers}</Text>
          <Text style={styles.statLabel}>Réponses correctes</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{totalQuestions - answeredQuestions}</Text>
          <Text style={styles.statLabel}>À répondre</Text>
        </View>
      </View>

      {/* Recommendations */}
      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationTitle}>Recommandations</Text>
        <Text style={styles.recommendationText}>
          Vous avez bien commencé ! Continuez à pratiquer pour atteindre 100%.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0F3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#004643',
  },
  progressContainer: {
    marginTop: 32,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  progressOuter: {
    width: '80%',
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressInner: {
    height: '100%',
    backgroundColor: '#004643',
    borderRadius: 4,
  },
  progressText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
    color: '#004643',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginTop: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#004643',
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  recommendationsContainer: {
    marginTop: 32,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    alignItems: 'center',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#004643',
    marginBottom: 8,
  },
  recommendationText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});
