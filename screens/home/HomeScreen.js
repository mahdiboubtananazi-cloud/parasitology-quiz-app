// screens/home/HomeScreen.js - النسخة النهائية المصححة
import React, { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Animated, 
  Dimensions,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { 
  Microscope, 
  BookOpen, 
  Target, 
  TrendingUp,
  Star,
  Award,
  X
} from '../../components/Icons';

import { 
  protozoaQuestions, 
  helminthsQuestions, 
  arthropodsQuestions,
  protozoaLabels,
  helminthsLabels,
  arthropodsLabels
} from '../../data/categories/index.js';

import { storage } from '../../utils/storage.js';

const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [realData, setRealData] = useState({
    progress: { answered: 0, correct: 0, percentage: 0 },
    categories: { protozoa: 0, helminths: 0, arthropods: 0 }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const headerAnim = useRef(new Animated.Value(-100)).current;
  const progressModalAnim = useRef(new Animated.Value(0)).current;
  const resultsModalAnim = useRef(new Animated.Value(0)).current;

  const cardAnims = useRef(
    Array.from({ length: 3 }, () => new Animated.Value(0))
  ).current;

  // ✅ قائمة الفئات مع خلفيات بيضاء للإيموجيات
  const categories = useMemo(() => [
    {
      id: 'protozoa',
      name: 'Protozoaires',
      emoji: '🦠',
      description: 'Organismes unicellulaires',
      questions: protozoaQuestions,
      color: '#1E40AF',      // أزرق داكن احترافي
      bgColor: '#FFFFFF',    // ✅ خلفية بيضاء
      iconBgColor: '#FFFFFF', // ✅ خلفية بيضاء للإيموجي
      icon: <Microscope size={24} color="#FFFFFF" />,
    },
    {
      id: 'helminths',
      name: 'Helminthes',
      emoji: '🪱',
      description: 'Vers parasitaires',
      questions: helminthsQuestions,
      color: '#065F46',      // أخضر داكن احترافي
      bgColor: '#FFFFFF',    // ✅ خلفية بيضاء
      iconBgColor: '#FFFFFF', // ✅ خلفية بيضاء للإيموجي
      icon: <BookOpen size={24} color="#FFFFFF" />,
    },
    {
      id: 'arthropods',
      name: 'Arthropodes',
      emoji: '🦟',
      description: 'Vecteurs & Ectoparasites',
      questions: arthropodsQuestions,
      color: '#C2410C',      // برتقالي داكن احترافي
      bgColor: '#FFFFFF',    // ✅ خلفية بيضاء
      iconBgColor: '#FFFFFF', // ✅ خلفية بيضاء للإيموجي
      icon: <Target size={24} color="#FFFFFF" />,
    }
  ], []);

// في HomeScreen.js - غيّر دالة handleCategoryPress

const handleCategoryPress = useCallback((category) => {
  let labels = {};
  
  switch (category.id) {
    case 'protozoa':
      labels = protozoaLabels;
      break;
    case 'helminths':
      labels = helminthsLabels;
      break;
    case 'arthropods':
      labels = arthropodsLabels;
      break;
    default:
      labels = {};
  }

  console.log('🚀 Navigation avec categoryId:', category.id);
  console.log('📝 Topics disponibles:', Object.keys(labels));

  // ✅ الحل: الانتقال إلى Quiz Tab وتمرير الـ params
  navigation.navigate('Quiz', {
    screen: 'QuizMain',
    params: {
      categoryId: category.id,
      categoryName: category.name,
      questions: category.questions,
      topicLabels: labels
    }
  });
}, [navigation]);
  // ✅ تحميل البيانات الحقيقية
  const loadRealData = useCallback(async () => {
    try {
      console.log('📊 Loading real user data...');
      
      const stats = await storage.getUserStats();
      const categoryStats = await storage.getCategoryResults();
      
      console.log('✅ User stats loaded:', stats);
      console.log('✅ Category stats loaded:', categoryStats);
      
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
      setRealData({
        progress: { answered: 0, correct: 0, percentage: 0 },
        categories: { protozoa: 0, helminths: 0, arthropods: 0 }
      });
    }
  }, []);

  const openProgressModal = useCallback(async () => {
    setModalLoading(true);
    await loadRealData();
    setModalLoading(false);
    setShowProgressModal(true);
    Animated.spring(progressModalAnim, {
      toValue: 1,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, [loadRealData]);

  const openResultsModal = useCallback(async () => {
    setModalLoading(true);
    await loadRealData();
    setModalLoading(false);
    setShowResultsModal(true);
    Animated.spring(resultsModalAnim, {
      toValue: 1,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, [loadRealData]);

  const closeProgressModal = useCallback(() => {
    Animated.timing(progressModalAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setShowProgressModal(false));
  }, []);

  const closeResultsModal = useCallback(() => {
    Animated.timing(resultsModalAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setShowResultsModal(false));
  }, []);

  const handleOverlayPress = useCallback((modalType) => {
    if (modalType === 'progress') closeProgressModal();
    if (modalType === 'results') closeResultsModal();
  }, [closeProgressModal, closeResultsModal]);

  useEffect(() => {
    const startAnimations = () => {
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
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.spring(headerAnim, {
          toValue: 0,
          tension: 80,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    };

    startAnimations();

    cardAnims.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        delay: 200 + (index * 150),
        useNativeDriver: true,
      }).start();
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadRealData();
    }, [loadRealData])
  );

  const ModalLoadingIndicator = () => (
    <View style={styles.modalLoadingContainer}>
      <ActivityIndicator size="large" color="#004643" />
      <Text style={styles.modalLoadingText}>Chargement des données...</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFF0F3" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View 
          style={[
            styles.headerContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: headerAnim }]
            }
          ]}
        >
          <View style={styles.headerCard}>
            <View style={styles.headerIconContainer}>
              <View style={styles.headerIconBg}>
                <Microscope size={28} color="#FFFFFF" />
              </View>
            </View>
            <Text style={styles.headerTitle}>ParaQuiz</Text>
            <Text style={styles.headerSubtitle}>
              Maîtrisez la parasitologie médicale
            </Text>
          </View>
        </Animated.View>

        <Animated.View 
          style={[
            styles.sectionTitleContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <Text style={styles.sectionTitle}>Catégories disponibles</Text>
          <Text style={styles.sectionSubtitle}>Sélectionnez une catégorie pour commencer</Text>
        </Animated.View>

        <Animated.View 
          style={[
            styles.categoriesContainer,
            {
              opacity: fadeAnim,
              transform: [
                { translateY: slideAnim },
                { scale: scaleAnim }
              ]
            }
          ]}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={screenWidth - 80}
            snapToAlignment="center"
            contentContainerStyle={styles.categoriesHorizontalScroll}
          >
            {categories.map((category, index) => (
              <Animated.View
                key={category.id}
                style={[
                  styles.categoryCardWrapper,
                  {
                    opacity: cardAnims[index],
                    transform: [
                      {
                        translateY: cardAnims[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [50, 0],
                        })
                      }
                    ]
                  }
                ]}
              >
                <TouchableOpacity 
                  style={[
                    styles.categoryCard,
                    { backgroundColor: category.bgColor }
                  ]}
                  activeOpacity={0.85}
                  onPress={() => handleCategoryPress(category)}
                >
                  <View 
                    style={[
                      styles.categoryIconContainer,
                      { 
                        backgroundColor: category.iconBgColor, // ✅ خلفية بيضاء للإيموجي
                        borderWidth: 2,
                        borderColor: category.color
                      }
                    ]}
                  >
                    <Text style={styles.categoryEmoji}>{category.emoji}</Text>
                  </View>

                  <View style={styles.categoryContent}>
                    <Text style={[styles.categoryName, { color: category.color }]}>
                      {category.name}
                    </Text>
                    <Text style={styles.categoryDescription}>
                      {category.description}
                    </Text>
                  </View>

                  <View 
                    style={[
                      styles.accentLine,
                      { backgroundColor: category.color }
                    ]}
                  />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>

          <View style={styles.scrollIndicatorContainer}>
            {categories.map((_, index) => (
              <View 
                key={index}
                style={styles.scrollIndicatorDot}
              />
            ))}
          </View>
        </Animated.View>

        <Animated.View 
          style={[
            styles.featuresSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <Text style={styles.featuresSectionTitle}>Statistiques</Text>
          
          <View style={styles.featuresGrid}>
            <View style={styles.featureItem}>
              <TouchableOpacity
                style={styles.featureButton}
                activeOpacity={0.85}
                onPress={openProgressModal}
              >
                <View style={styles.featureIconContainer}>
                  <TrendingUp size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.featureName}>Progression</Text>
                <Text style={styles.featureDesc}>Suivez vos réponses</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.featureItem}>
              <TouchableOpacity
                style={styles.featureButton}
                activeOpacity={0.85}
                onPress={openResultsModal}
              >
                <View style={styles.featureIconContainer}>
                  <Award size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.featureName}>Résultats</Text>
                <Text style={styles.featureDesc}>Analysez vos scores</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <View style={styles.footer}>
          <Text style={styles.footerVersion}>ParaQuiz v1.0.0</Text>
        </View>
      </ScrollView>

      {showProgressModal && (
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => handleOverlayPress('progress')}
        >
          <TouchableOpacity 
            style={styles.modalContent}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            <Animated.View 
              style={[
                styles.modalInnerContent,
                {
                  transform: [{
                    scale: progressModalAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1]
                    })
                  }],
                  opacity: progressModalAnim
                }
              ]}
            >
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Votre progression</Text>
                <TouchableOpacity onPress={closeProgressModal}>
                  <X size={24} color="#666" />
                </TouchableOpacity>
              </View>
              
              {modalLoading ? (
                <ModalLoadingIndicator />
              ) : (
                <>
                  <View style={styles.progressStats}>
                    <View style={styles.statItem}>
                      <Text style={styles.statNumber}>
                        {realData.progress.answered}
                      </Text>
                      <Text style={styles.statLabel}>
                        Questions répondues
                      </Text>
                    </View>

                    <View style={styles.statItem}>
                      <Text style={styles.statNumber}>
                        {realData.progress.correct}
                      </Text>
                      <Text style={styles.statLabel}>
                        Réponses correctes
                      </Text>
                    </View>

                    <View style={[styles.statItem, { borderBottomWidth: 0 }]}>
                      <Text style={styles.statNumber}>
                        {realData.progress.percentage}%
                      </Text>
                      <Text style={styles.statLabel}>
                        Taux de réussite
                      </Text>
                    </View>
                  </View>

                  <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar}>
                      <View 
                        style={[
                          styles.progressFill, 
                          { width: `${realData.progress.percentage}%` }
                        ]} 
                      />
                    </View>
                    <Text style={styles.progressText}>
                      Progression globale
                    </Text>
                  </View>

                  <TouchableOpacity 
                    style={styles.modalButton}
                    onPress={closeProgressModal}
                  >
                    <Text style={styles.modalButtonText}>Fermer</Text>
                  </TouchableOpacity>
                </>
              )}
            </Animated.View>
          </TouchableOpacity>
        </TouchableOpacity>
      )}

      {showResultsModal && (
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => handleOverlayPress('results')}
        >
          <TouchableOpacity 
            style={styles.modalContent}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            <Animated.View 
              style={[
                styles.modalInnerContent,
                {
                  transform: [{
                    scale: resultsModalAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1]
                    })
                  }],
                  opacity: resultsModalAnim
                }
              ]}
            >
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Résultats par catégorie</Text>
                <TouchableOpacity onPress={closeResultsModal}>
                  <X size={24} color="#666" />
                </TouchableOpacity>
              </View>
              
              {modalLoading ? (
                <ModalLoadingIndicator />
              ) : (
                <>
                  <View style={styles.resultsSection}>
                    <Text style={styles.resultsSubtitle}>Performances actuelles</Text>
                    
                    <View style={styles.resultItem}>
                      <View style={styles.resultLeft}>
                        <Text style={styles.resultEmoji}>🦠</Text>
                        <Text style={styles.resultCategory}>Protozoaires</Text>
                      </View>
                      <Text style={styles.resultScore}>{realData.categories.protozoa}%</Text>
                    </View>
                    
                    <View style={styles.resultItem}>
                      <View style={styles.resultLeft}>
                        <Text style={styles.resultEmoji}>🪱</Text>
                        <Text style={styles.resultCategory}>Helminthes</Text>
                      </View>
                      <Text style={styles.resultScore}>{realData.categories.helminths}%</Text>
                    </View>
                    
                    <View style={styles.resultItem}>
                      <View style={styles.resultLeft}>
                        <Text style={styles.resultEmoji}>🦟</Text>
                        <Text style={styles.resultCategory}>Arthropodes</Text>
                      </View>
                      <Text style={styles.resultScore}>{realData.categories.arthropods}%</Text>
                    </View>
                  </View>

                  <TouchableOpacity 
                    style={styles.modalButton}
                    onPress={closeResultsModal}
                  >
                    <Text style={styles.modalButtonText}>Fermer</Text>
                  </TouchableOpacity>
                </>
              )}
            </Animated.View>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0F3',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  headerIconContainer: {
    marginBottom: 16,
  },
  headerIconBg: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#004643',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#004643',
    marginBottom: 6,
    letterSpacing: -1,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#5F6368',
    textAlign: 'center',
    fontWeight: '500',
  },
  sectionTitleContainer: {
    paddingHorizontal: 16,
    marginVertical: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
  },
  categoriesContainer: {
    marginBottom: 32,
  },
  categoriesHorizontalScroll: {
    paddingHorizontal: 24,
    gap: 16,
    flexDirection: 'row',
  },
  categoryCardWrapper: {
    width: screenWidth - 100,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    height: 180,
    justifyContent: 'space-between',
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#FFFFFF', // ✅ خلفية بيضاء ثابتة
  },
  categoryEmoji: {
    fontSize: 28,
  },
  categoryContent: {
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  categoryDescription: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
  },
  accentLine: {
    height: 4,
    width: '80%',
    borderRadius: 2,
    marginTop: 8,
  },
  scrollIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  scrollIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#004643',
    opacity: 0.3,
  },
  featuresSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  featuresSectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  featureItem: {
    flex: 1,
  },
  featureButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#004643',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  featureName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
  },
  modalInnerContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#004643',
  },
  modalLoadingContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalLoadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  progressStats: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#F8FAFC',
  },
  statItem: {
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#004643',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18,
  },
  progressBarContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#004643',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  resultsSection: {
    padding: 20,
  },
  resultsSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  resultLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resultEmoji: {
    fontSize: 24,
  },
  resultCategory: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  resultScore: {
    fontSize: 18,
    fontWeight: '700',
    color: '#004643',
  },
  modalButton: {
    backgroundColor: '#004643',
    margin: 20,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  footerVersion: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});

export default React.memo(HomeScreen);