import React, { useRef, useEffect, useCallback, useState } from 'react';
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
import { storage } from '../../utils/storage';

// Import New Components
import HomeHeader from './components/HomeHeader';
import CategoryCarousel from './components/CategoryCarousel';
import FeaturesSection from './components/FeaturesSection';
import ProgressModal from './components/ProgressModal';
import ResultsModal from './components/ResultsModal';

// --- DATA CONFIGURATION ---
// نقلنا البيانات للخارج لمنع إعادة إنشائها مع كل Render
// يمكنك لاحقاً نقلها لملف منفصل تماماً (data/categories.js)
const CATEGORIES_DATA = [
    {
      id: 'diagnostic', 
      name: 'Diagnostic Lab', 
      description: 'Identification microscopique (Images Réelles)',
      questions: [], 
      labels: [],
      color: '#3b82f6', // أزرق (نفس لون الفلتر النشط في التشخيص)
      iconName: 'microscope', 
      buttonLabel: 'Ouvrir le Labo',
      screenRoute: 'Diagnostic' // توجيه مباشر
    },
    {
      id: 'protozoa', 
      name: 'Protozoaires', 
      description: 'Amibes, Flagellés et Ciliés.',
      color: '#0F766E', // Teal
      iconName: 'virus', 
      buttonLabel: 'Quiz Théorique',
      screenRoute: 'Quiz'
    },
    {
      id: 'helminths', 
      name: 'Helminthes', 
      description: 'Nématodes, Cestodes et Trématodes.',
      color: '#15803d', // Green
      iconName: 'snake', 
      buttonLabel: 'Quiz Théorique',
      screenRoute: 'Quiz'
    },
    {
      id: 'arthropods', 
      name: 'Arthropodes', 
      description: 'Vecteurs et Ectoparasites.',
      color: '#b91c1c', // Red
      iconName: 'spider', 
      buttonLabel: 'Quiz Théorique',
      screenRoute: 'Quiz'
    }
];

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
  const headerAnim = useRef(new Animated.Value(-50)).current;
  const progressModalAnim = useRef(new Animated.Value(0)).current;
  const resultsModalAnim = useRef(new Animated.Value(0)).current;
  
  // Navigation Logic
  const handleCategoryPress = useCallback((category) => {
    // 1. Direct Route (مثل التشخيص)
    if (category.screenRoute === 'Diagnostic') {
      navigation.navigate('Diagnostic');
      return;
    }

    // 2. Quiz Route (مع تمرير البيانات)
    // ملاحظة: تأكد أنك تستورد الأسئلة الحقيقية هنا أو تمرر الـ ID فقط وتجلبها هناك
    navigation.navigate('Quiz', {
      screen: 'QuizMain',
      params: {
        categoryId: category.id,
        categoryName: category.name,
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
      console.warn('⚠️ Error loading stats:', error);
    }
  }, []);

  // Modal Handlers
  const handleOpenModal = useCallback(async (type) => {
    setModalLoading(true);
    await loadRealData(); // Refresh data on open
    setModalLoading(false);
    
    const isProgress = type === 'progress';
    if (isProgress) setShowProgressModal(true);
    else setShowResultsModal(true);

    Animated.spring(isProgress ? progressModalAnim : resultsModalAnim, { 
      toValue: 1, tension: 60, friction: 8, useNativeDriver: true 
    }).start();
  }, [loadRealData, progressModalAnim, resultsModalAnim]);

  const handleCloseModal = useCallback((type) => {
    const isProgress = type === 'progress';
    const anim = isProgress ? progressModalAnim : resultsModalAnim;
    
    Animated.timing(anim, { toValue: 0, duration: 250, useNativeDriver: true }).start(() => {
      isProgress ? setShowProgressModal(false) : setShowResultsModal(false);
    });
  }, [progressModalAnim, resultsModalAnim]);

  // Initial Animation
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
      Animated.spring(headerAnim, { toValue: 0, tension: 40, friction: 7, useNativeDriver: true }),
    ]).start();
  }, []);

  useFocusEffect(useCallback(() => { loadRealData(); }, [loadRealData]));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader fadeAnim={fadeAnim} translateYAnim={headerAnim} />

        <CategoryCarousel 
          categories={CATEGORIES_DATA}
          onCategoryPress={handleCategoryPress}
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
        />

        <FeaturesSection 
          onProgressPress={() => handleOpenModal('progress')}
          onResultsPress={() => handleOpenModal('results')}
          fadeAnim={fadeAnim}
          slideAnim={slideAnim}
        />

        <View style={styles.footer}>
          <Text style={styles.footerVersion}>ParaQuiz v1.0.0 • Medical Learning</Text>
        </View>
      </ScrollView>

      {/* Modals */}
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
  container: { flex: 1, backgroundColor: '#f8fafc' }, // خلفية رمادية فاتحة جداً (أنظف من الأبيض)
  scrollContent: { flexGrow: 1, paddingBottom: 100 }, 
  footer: { alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20 },
  footerVersion: { fontSize: 11, color: '#94a3b8', fontWeight: '600', letterSpacing: 0.5 },
});

export default React.memo(HomeScreen);
