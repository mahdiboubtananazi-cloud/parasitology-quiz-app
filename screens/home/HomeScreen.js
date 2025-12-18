// screens/home/HomeScreen.js - النسخة النهائية الكاملة المحسّنة
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
  ActivityIndicator,
  Platform
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
  X,
  CheckCircle,
  Zap
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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

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

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const headerAnim = useRef(new Animated.Value(-100)).current;
  const progressModalAnim = useRef(new Animated.Value(0)).current;
  const resultsModalAnim = useRef(new Animated.Value(0)).current;

  const cardAnims = useRef(
    Array.from({ length: 3 }, () => new Animated.Value(0))
  ).current;

  const categories = useMemo(() => [
    {
      id: 'protozoa',
      name: 'Protozoaires',
      emoji: '🦠',
      description: 'Organismes unicellulaires parasitaires',
      questions: protozoaQuestions,
      color: '#0F766E',
      lightColor: '#E0F2F1',
      accentColor: '#00897B',
      bgColor: '#FFFFFF',
      iconBgColor: '#FFFFFF',
      icon: <Microscope size={24} color="#FFFFFF" />,
    },
    {
      id: 'helminths',
      name: 'Helminthes',
      emoji: '🪱',
      description: 'Vers et parasites multicellulaires',
      questions: helminthsQuestions,
      color: '#1B5E20',
      lightColor: '#E8F5E9',
      accentColor: '#2E7D32',
      bgColor: '#FFFFFF',
      iconBgColor: '#FFFFFF',
      icon: <BookOpen size={24} color="#FFFFFF" />,
    },
    {
      id: 'arthropods',
      name: 'Arthropodes',
      emoji: '🦟',
      description: 'Vecteurs et ectoparasites cliniquement importants',
      questions: arthropodsQuestions,
      color: '#B71C1C',
      lightColor: '#FFEBEE',
      accentColor: '#D32F2F',
      bgColor: '#FFFFFF',
      iconBgColor: '#FFFFFF',
      icon: <Target size={24} color="#FFFFFF" />,
    }
  ], []);

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
  }, [progressModalAnim]);

  const closeResultsModal = useCallback(() => {
    Animated.timing(resultsModalAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setShowResultsModal(false));
  }, [resultsModalAnim]);

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
  }, [fadeAnim, slideAnim, scaleAnim, headerAnim, cardAnims]);

  useFocusEffect(
    useCallback(() => {
      loadRealData();
    }, [loadRealData])
  );

  const ModalLoadingIndicator = () => (
    <View style={styles.modalLoadingContainer}>
      <ActivityIndicator size="large" color="#0F766E" />
      <Text style={styles.modalLoadingText}>Chargement des données...</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
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
            <View style={styles.headerTopDecor}>
              <View style={styles.decorLine} />
            </View>
            
            <Text style={styles.headerTitle}>ParaQuiz</Text>
            
            <Text style={styles.headerSubtitle}>
              Maîtrisez les parasites cliniquement importants
            </Text>
            
            <View style={styles.headerStats}>
              <View style={styles.headerStat}>
                <CheckCircle size={18} color="#0F766E" />
                <Text style={styles.headerStatText}>Apprentissage interactif</Text>
              </View>
              <View style={styles.headerStat}>
                <Zap size={18} color="#0F766E" />
                <Text style={styles.headerStatText}>Progression suivie</Text>
              </View>
            </View>
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
          <Text style={styles.sectionTitle}>Catégories d'apprentissage</Text>
          <Text style={styles.sectionSubtitle}>Explorez les trois domaines de la parasitologie</Text>
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
                      styles.categoryTopLine,
                      { backgroundColor: category.color }
                    ]}
                  />
                  
                  <View 
                    style={[
                      styles.categoryIconContainer,
                      { 
                        backgroundColor: category.lightColor,
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

                  <View style={styles.categoryFooter}>
                    <View 
                      style={[
                        styles.categoryButton,
                        { backgroundColor: category.color }
                      ]}
                    >
                      <Text style={styles.categoryButtonText}>Commencer</Text>
                    </View>
                  </View>
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
          <Text style={styles.featuresSectionTitle}>Vos statistiques</Text>
          <Text style={styles.featuresSectionSubtitle}>Suivez votre progression</Text>
          
          <View style={styles.featuresGrid}>
            <View style={styles.featureItem}>
              <TouchableOpacity
                style={styles.featureButton}
                activeOpacity={0.85}
                onPress={openProgressModal}
              >
                <View style={[styles.featureIconContainer, { backgroundColor: '#0F766E' }]}>
                  <TrendingUp size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.featureName}>Progression</Text>
                <Text style={styles.featureDesc}>Consultez vos réponses</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.featureItem}>
              <TouchableOpacity
                style={styles.featureButton}
                activeOpacity={0.85}
                onPress={openResultsModal}
              >
                <View style={[styles.featureIconContainer, { backgroundColor: '#1B5E20' }]}>
                  <Award size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.featureName}>Résultats</Text>
                <Text style={styles.featureDesc}>Analysez vos scores</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <View style={styles.footer}>
          <Text style={styles.footerVersion}>ParaQuiz v1.0.0 • Apprentissage médical</Text>
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
                <View style={styles.modalHeaderLeft}>
                  <View style={styles.modalIconContainer}>
                    <TrendingUp size={20} color="#FFFFFF" />
                  </View>
                  <Text style={styles.modalTitle}>Votre progression</Text>
                </View>
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
                    <View style={styles.progressBarLabel}>
                      <Text style={styles.progressText}>Progression globale</Text>
                      <Text style={styles.progressPercent}>{realData.progress.percentage}%</Text>
                    </View>
                    <View style={styles.progressBar}>
                      <Animated.View 
                        style={[
                          styles.progressFill, 
                          { width: `${realData.progress.percentage}%` }
                        ]} 
                      />
                    </View>
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
                <View style={styles.modalHeaderLeft}>
                  <View style={[styles.modalIconContainer, { backgroundColor: '#1B5E20' }]}>
                    <Award size={20} color="#FFFFFF" />
                  </View>
                  <Text style={styles.modalTitle}>Résultats par catégorie</Text>
                </View>
                <TouchableOpacity onPress={closeResultsModal}>
                  <X size={24} color="#666" />
                </TouchableOpacity>
              </View>
              
              {modalLoading ? (
                <ModalLoadingIndicator />
              ) : (
                <>
                  <View style={styles.resultsSection}>
                    <Text style={styles.resultsSubtitle}>Vos performances actuelles</Text>
                    
                    <View style={[styles.resultItem, { borderLeftColor: '#0F766E' }]}>
                      <View style={styles.resultLeft}>
                        <Text style={styles.resultEmoji}>🦠</Text>
                        <View>
                          <Text style={styles.resultCategory}>Protozoaires</Text>
                          <Text style={styles.resultDesc}>Organismes unicellulaires</Text>
                        </View>
                      </View>
                      <View style={styles.resultScoreContainer}>
                        <Text style={[styles.resultScore, { color: '#0F766E' }]}>
                          {realData.categories.protozoa}%
                        </Text>
                      </View>
                    </View>
                    
                    <View style={[styles.resultItem, { borderLeftColor: '#1B5E20' }]}>
                      <View style={styles.resultLeft}>
                        <Text style={styles.resultEmoji}>🪱</Text>
                        <View>
                          <Text style={styles.resultCategory}>Helminthes</Text>
                          <Text style={styles.resultDesc}>Vers parasitaires</Text>
                        </View>
                      </View>
                      <View style={styles.resultScoreContainer}>
                        <Text style={[styles.resultScore, { color: '#1B5E20' }]}>
                          {realData.categories.helminths}%
                        </Text>
                      </View>
                    </View>
                    
                    <View style={[styles.resultItem, { borderLeftColor: '#B71C1C' }]}>
                      <View style={styles.resultLeft}>
                        <Text style={styles.resultEmoji}>🦟</Text>
                        <View>
                          <Text style={styles.resultCategory}>Arthropodes</Text>
                          <Text style={styles.resultDesc}>Vecteurs et ectoparasites</Text>
                        </View>
                      </View>
                      <View style={styles.resultScoreContainer}>
                        <Text style={[styles.resultScore, { color: '#B71C1C' }]}>
                          {realData.categories.arthropods}%
                        </Text>
                      </View>
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
    backgroundColor: '#FAFAFA',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  headerTopDecor: {
    width: 60,
    height: 4,
    backgroundColor: '#0F766E',
    borderRadius: 2,
    marginBottom: 20,
  },
  decorLine: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#0F766E',
    marginBottom: 8,
    letterSpacing: -1,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 20,
  },
  headerStats: {
    width: '100%',
    gap: 12,
  },
  headerStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
  },
  headerStatText: {
    fontSize: 14,
    color: '#0F766E',
    fontWeight: '600',
  },
  sectionTitleContainer: {
    paddingHorizontal: 16,
    marginVertical: 28,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1F2937',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
  },
  categoriesContainer: {
    marginBottom: 36,
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
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    height: 240,
  },
  categoryTopLine: {
    height: 6,
    width: '100%',
  },
  categoryIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  categoryEmoji: {
    fontSize: 32,
  },
  categoryContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 14,
    flex: 1,
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  categoryDescription: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18,
  },
  categoryFooter: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 8,
  },
  categoryButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  categoryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
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
    backgroundColor: '#0F766E',
    opacity: 0.3,
  },
  featuresSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  featuresSectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'center',
  },
  featuresSectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20,
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
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  featureIconContainer: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#0F766E',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 420,
  },
  modalInnerContent: {
    backgroundColor: 'white',
    borderRadius: 24,
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
    borderBottomColor: '#F5F5F5',
  },
  modalHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  modalIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
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
    backgroundColor: '#FAFAFA',
  },
  statItem: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  statNumber: {
    fontSize: 36,
    fontWeight: '900',
    color: '#0F766E',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 20,
  },
  progressBarContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  progressBarLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  progressPercent: {
    fontSize: 16,
    color: '#0F766E',
    fontWeight: '700',
  },
  progressBar: {
    height: 12,
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0F766E',
    borderRadius: 6,
  },
  resultsSection: {
    padding: 20,
  },
  resultsSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 0,
    marginBottom: 12,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderLeftWidth: 4,
  },
  resultLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  resultEmoji: {
    fontSize: 28,
  },
  resultCategory: {
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '700',
    lineHeight: 20,
  },
  resultDesc: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  resultScoreContainer: {
    paddingRight: 16,
  },
  resultScore: {
    fontSize: 20,
    fontWeight: '800',
  },
  modalButton: {
    backgroundColor: '#0F766E',
    margin: 20,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#0F766E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footerVersion: {
    fontSize: 12,
    color: '#AAAAAA',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});

export default React.memo(HomeScreen);
