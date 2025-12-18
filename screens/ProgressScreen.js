// screens/ProgressScreen.js - النسخة الصحيحة مع بيانات حقيقية
import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated,
  Dimensions,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { storage } from '../utils/storage';

const { width: screenWidth } = Dimensions.get('window');

export default function ProgressScreen() {
  const navigation = useNavigation();

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [categoryResults, setCategoryResults] = useState({});
  const [averagePercentage, setAveragePercentage] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  // ✅ Load real data from AsyncStorage
  const loadProgressData = async () => {
    try {
      setLoading(true);

      const stats = await storage.getUserStats();
      const categoryData = await storage.getCategoryResults();

      console.log('📊 User Stats:', stats);
      console.log('📊 Category Results:', categoryData);

      setTotalQuestions(stats.answeredQuestions || 0);
      setAnsweredQuestions(stats.answeredQuestions || 0);
      setCorrectAnswers(stats.correctAnswers || 0);
      setProgress(stats.percentage || 0);
      setTotalTime(stats.totalTime || 0);
      setCategoryResults(categoryData);

      const categories = Object.values(categoryData);
      if (categories.length > 0) {
        const avgPercentage = Math.round(
          categories.reduce((acc, cat) => acc + (cat.percentage || 0), 0) / categories.length
        );
        setAveragePercentage(avgPercentage);
      }

      setLoading(false);
    } catch (error) {
      console.error('❌ Error loading progress data:', error);
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadProgressData();
    }, [])
  );

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
  }, [fadeAnim, slideAnim]);

  const handleBack = () => {
    navigation.goBack();
  };

  const formatTime = (seconds) => {
    if (!seconds) return '0m';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <ArrowLeft size={24} color="#004643" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Votre progression</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={[styles.loadingContainer, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#004643" />
          <Text style={styles.loadingText}>Chargement...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <ArrowLeft size={24} color="#004643" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Votre progression</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View 
          style={[
            styles.progressContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Progression globale</Text>
            <Text style={styles.progressPercentage}>{progress}%</Text>
          </View>
          
          <View style={styles.progressOuter}>
            <Animated.View 
              style={[
                styles.progressInner, 
                { width: `${Math.min(progress, 100)}%` }
              ]} 
            />
          </View>
        </Animated.View>

        <Animated.View 
          style={[
            styles.statsContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{answeredQuestions}</Text>
            <Text style={styles.statLabel}>Questions répondues</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{correctAnswers}</Text>
            <Text style={styles.statLabel}>Réponses correctes</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{answeredQuestions - correctAnswers}</Text>
            <Text style={styles.statLabel}>Réponses incorrectes</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{formatTime(totalTime)}</Text>
            <Text style={styles.statLabel}>Temps total</Text>
          </View>
        </Animated.View>

        {Object.keys(categoryResults).length > 0 && (
          <Animated.View 
            style={[
              styles.categoryContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <Text style={styles.categoryTitle}>Résultats par catégorie</Text>
            
            {Object.entries(categoryResults).map(([categoryName, categoryData]) => (
              <View key={categoryName} style={styles.categoryItem}>
                <View style={styles.categoryHeader}>
                  <Text style={styles.categoryName}>{categoryName}</Text>
                  <Text style={styles.categoryPercentage}>{categoryData.percentage || 0}%</Text>
                </View>
                
                <View style={styles.categoryProgressBar}>
                  <View 
                    style={[
                      styles.categoryProgressFill, 
                      { width: `${Math.min(categoryData.percentage || 0, 100)}%` }
                    ]} 
                  />
                </View>
                
                <Text style={styles.categoryStats}>
                  {categoryData.correct || 0} / {categoryData.total || 0} bonnes réponses
                </Text>
              </View>
            ))}
          </Animated.View>
        )}

        <Animated.View 
          style={[
            styles.recommendationsContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <Text style={styles.recommendationTitle}>💡 Recommandations</Text>
          
          {progress < 50 ? (
            <Text style={styles.recommendationText}>
              Vous avez bien commencé ! Continuez à pratiquer pour améliorer vos résultats.
            </Text>
          ) : progress < 75 ? (
            <Text style={styles.recommendationText}>
              Bon travail ! Vous progressez bien. Concentrez-vous sur les catégories avec les scores les plus bas.
            </Text>
          ) : progress < 90 ? (
            <Text style={styles.recommendationText}>
              Excellent ! Vous approchez de la maîtrise. Continuez à pratiquer pour atteindre 100%.
            </Text>
          ) : (
            <Text style={styles.recommendationText}>
              Fantastique ! Vous avez atteint un excellent niveau. Continuez à réviser régulièrement.
            </Text>
          )}
        </Animated.View>

        {answeredQuestions === 0 && (
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>Aucun quiz complété pour le moment</Text>
            <Text style={styles.emptyStateSubtext}>Commencez un quiz pour voir votre progression</Text>
          </View>
        )}
      </ScrollView>
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
  content: {
    flex: 1,
    paddingBottom: 20,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666666',
  },
  progressContainer: {
    marginTop: 24,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  progressPercentage: {
    fontSize: 18,
    fontWeight: '700',
    color: '#004643',
  },
  progressOuter: {
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 24,
  },
  statCard: {
    width: '48%',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#004643',
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 6,
    textAlign: 'center',
  },
  categoryContainer: {
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#004643',
    marginBottom: 16,
  },
  categoryItem: {
    marginBottom: 12,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  categoryPercentage: {
    fontSize: 14,
    fontWeight: '700',
    color: '#004643',
  },
  categoryProgressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  categoryProgressFill: {
    height: '100%',
    backgroundColor: '#004643',
    borderRadius: 3,
  },
  categoryStats: {
    fontSize: 12,
    color: '#999999',
  },
  recommendationsContainer: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#004643',
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#004643',
    marginBottom: 8,
  },
  recommendationText: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
  },
  emptyStateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#004643',
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999999',
    marginTop: 8,
  },
});
