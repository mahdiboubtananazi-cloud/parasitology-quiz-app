import React, { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Animated, 
  StatusBar 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Microscope, BookOpen, Target } from '../../components/Icons';
import { storage } from '../../utils/storage';

// Import Data
import { 
  protozoaQuestions, helminthsQuestions, arthropodsQuestions,
  protozoaLabels, helminthsLabels, arthropodsLabels
} from '../../data/categories/index.js';

// Import New Components
import HomeHeader from './components/HomeHeader';
import CategoryCarousel from './components/CategoryCarousel';
import FeaturesSection from './components/FeaturesSection';
import ProgressModal from './components/ProgressModal';
import ResultsModal from './components/ResultsModal';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  // State
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [realData, setRealData] = useState({
    progress: { answered: 0, correct: 0, percentage: 0 },
    categories: { protozoa: 0, helminths: 0, arthropods: 0 }
  });
  const [modalLoading, setModalLoading] = useState(false);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const headerAnim = useRef(new Animated.Value(-100)).current;
  const progressModalAnim = useRef(new Animated.Value(0)).current;
  const resultsModalAnim = useRef(new Animated.Value(0)).current;
  
  const cardAnims = useRef(Array.from({ length: 3 }, () => new Animated.Value(0))).current;

  // Categories Data
  const categories = useMemo(() => [
    {
      id: 'protozoa', name: 'Protozoaires', emoji: '🦠',
      description: 'Organismes unicellulaires parasitaires',
      questions: protozoaQuestions, labels: protozoaLabels,
      color: '#0F766E', lightColor: '#E0F2F1', bgColor: '#FFFFFF',
      icon: <Microscope size={24} color="#FFFFFF" />,
    },
    {
      id: 'helminths', name: 'Helminthes', emoji: '🪱',
      description: 'Vers et parasites multicellulaires',
      questions: helminthsQuestions, labels: helminthsLabels,
      color: '#1B5E20', lightColor: '#E8F5E9', bgColor: '#FFFFFF',
      icon: <BookOpen size={24} color="#FFFFFF" />,
    },
    {
      id: 'arthropods', name: 'Arthropodes', emoji: '🦟',
      description: 'Vecteurs et ectoparasites cliniquement importants',
      questions: arthropodsQuestions, labels: arthropodsLabels,
      color: '#B71C1C', lightColor: '#FFEBEE', bgColor: '#FFFFFF',
      icon: <Target size={24} color="#FFFFFF" />,
    }
  ], []);

  // Navigation Logic
  const handleCategoryPress = useCallback((category) => {
    navigation.navigate('Quiz', {
      screen: 'QuizMain',
      params: {
        categoryId: category.id,
        categoryName: category.name,
        questions: category.questions,
        topicLabels: category.labels
      }
    });
  }, [navigation]);

  // Data Loading Logic
  const loadRealData = useCallback(async () => {
    try {
      const stats = await storage.getUserStats();
      const categoryStats = await storage.getCategoryResults();
      
      setRealData({
        progress: {
          answered: stats?.answeredQuestions || 0,
          correct: stats?.correctAnswers || 0,
          percentage: stats?.percentage || 0
        },
        categories: {
          protozoa: categoryStats?.Protozoaires?.percentage || 0,
          helminths: categoryStats?.Helminthes?.percentage || 0,
          arthropods: categoryStats?.Arthropodes?.percentage || 0
        }
      });
    } catch (error) {
      console.error('❌ Error loading data:', error);
    }
  }, []);

  // Modal Handlers
  const handleOpenModal = useCallback(async (type) => {
    setModalLoading(true);
    await loadRealData();
    setModalLoading(false);
    
    if (type === 'progress') {
      setShowProgressModal(true);
      Animated.spring(progressModalAnim, { toValue: 1, tension: 50, friction: 7, useNativeDriver: true }).start();
    } else {
      setShowResultsModal(true);
      Animated.spring(resultsModalAnim, { toValue: 1, tension: 50, friction: 7, useNativeDriver: true }).start();
    }
  }, [loadRealData, progressModalAnim, resultsModalAnim]);

  const handleCloseModal = useCallback((type) => {
    const anim = type === 'progress' ? progressModalAnim : resultsModalAnim;
    Animated.timing(anim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      type === 'progress' ? setShowProgressModal(false) : setShowResultsModal(false);
    });
  }, [progressModalAnim, resultsModalAnim]);

  // Initial Animation
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.spring(headerAnim, { toValue: 0, tension: 80, friction: 8, useNativeDriver: true }),
    ]).start();

    cardAnims.forEach((anim, index) => {
      Animated.timing(anim, { toValue: 1, duration: 500, delay: 200 + (index * 150), useNativeDriver: true }).start();
    });
  }, []);

  useFocusEffect(useCallback(() => { loadRealData(); }, [loadRealData]));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader fadeAnim={fadeAnim} translateYAnim={headerAnim} />

        <CategoryCarousel 
          categories={categories}
          onCategoryPress={handleCategoryPress}
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
          scaleAnim={scaleAnim}
          cardAnims={cardAnims}
        />

        <FeaturesSection 
          onProgressPress={() => handleOpenModal('progress')}
          onResultsPress={() => handleOpenModal('results')}
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
        />

        <View style={styles.footer}>
          <Text style={styles.footerVersion}>ParaQuiz v1.0.0 • Apprentissage médical</Text>
        </View>
      </ScrollView>

      <ProgressModal 
        visible={showProgressModal} 
        onClose={() => handleCloseModal('progress')} 
        data={realData.progress} 
        loading={modalLoading} 
        animation={progressModalAnim} 
      />

      <ResultsModal 
        visible={showResultsModal} 
        onClose={() => handleCloseModal('results')} 
        data={realData.categories} 
        loading={modalLoading} 
        animation={resultsModalAnim} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { flexGrow: 1, paddingBottom: 40 },
  footer: { alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20 },
  footerVersion: { fontSize: 12, color: '#AAAAAA', fontWeight: '500', letterSpacing: 0.3 },
});

export default React.memo(HomeScreen);
