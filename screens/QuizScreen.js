// screens/QuizScreen.js - النسخة المحدثة والمصلحة
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { protozoaQuestions, protozoaLabels, helminthsQuestions, helminthsLabels, arthropodsQuestions, arthropodsLabels } from '../data/categories';
import HorizontalFilter from '../components/HorizontalFilter';
import AnimatedOption from './QuizScreen_components/AnimatedOption';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// استبدال أيقونات lucide بأيقونات بسيطة
const CheckCircle2 = ({ size, color }) => <Ionicons name="checkmark-circle" size={size} color={color} />;
const AlertCircle = ({ size, color }) => <Ionicons name="alert-circle" size={size} color={color} />;
const Filter = ({ size, color }) => <Ionicons name="filter" size={size} color={color} />;
const Clock = ({ size, color }) => <Ionicons name="time" size={size} color={color} />;
const RotateCcw = ({ size, color }) => <Ionicons name="refresh" size={size} color={color} />;
const Star = ({ size, color }) => <Ionicons name="star" size={size} color={color} />;
const Trophy = ({ size, color }) => <Ionicons name="trophy" size={size} color={color} />;
const Target = ({ size, color }) => <MaterialIcons name="track-changes" size={size} color={color} />;
const Home = ({ size, color }) => <Ionicons name="home" size={size} color={color} />;

export default function QuizScreen({ route, navigation }) {
  const { categoryId, categoryName, questions: categoryQuestions } = route?.params || {};
  
  // ✅ تحديد الفئة بناءً على categoryId باستخدام useMemo للتحديث الصحيح
  const { allQuestionsData, currentLabels } = useMemo(() => {
    if (categoryId === 'helminths') {
      return {
        allQuestionsData: helminthsQuestions,
        currentLabels: helminthsLabels
      };
    } else if (categoryId === 'arthropods') {
      return {
        allQuestionsData: arthropodsQuestions,
        currentLabels: arthropodsLabels
      };
    } else {
      return {
        allQuestionsData: protozoaQuestions,
        currentLabels: protozoaLabels
      };
    }
  }, [categoryId]);

  // تحويل البيانات إلى مصفوفة أسئلة
  const convertToQuestions = (data) => {
    const questions = [];
    Object.keys(data).forEach(topic => {
      if (Array.isArray(data[topic]) && data[topic].length > 0) {
        data[topic].forEach(q => {
          questions.push({
            ...q,
            topic: topic,
            question: q.question,
            options: q.options,
            correctAnswer: q.correct,
            explanation: q.explanation
          });
        });
      }
    });
    return questions;
  };

  // State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [allQuestions, setAllQuestions] = useState(convertToQuestions(allQuestionsData));
  const [filteredQuestions, setFilteredQuestions] = useState(convertToQuestions(allQuestionsData));
  const [progressAnim] = useState(new Animated.Value(0));
  const [timeLeft, setTimeLeft] = useState(30);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ topics: [] });
  const [showNoQuestions, setShowNoQuestions] = useState(false);

  // Animations
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const timerPulseAnim = useRef(new Animated.Value(1)).current;
  const explanationFadeAnim = useRef(new Animated.Value(0)).current;
  const explanationSlideAnim = useRef(new Animated.Value(30)).current;
  const resultScaleAnim = useRef(new Animated.Value(0.8)).current;

  // ✅ تحديث الأسئلة عند تغيير الفئة
  useEffect(() => {
    const newQuestions = convertToQuestions(allQuestionsData);
    setAllQuestions(newQuestions);
    setFilteredQuestions(newQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setShowNoQuestions(false);
    setSelectedFilters({ topics: [] });
  }, [categoryId, categoryName, allQuestionsData]);

  // ✅ دالة تطبيق الفلاتر
  const handleApplyFilters = (filters) => {
    if (!allQuestions || allQuestions.length === 0) {
      setShowNoQuestions(true);
      setFilteredQuestions([]);
      return;
    }

    if (!filters.topics || filters.topics.length === 0) {
      setFilteredQuestions(allQuestions);
      setShowNoQuestions(false);
      setSelectedFilters({ topics: [] });
    } else {
      const selectedTopics = filters.topics.map(t => t.toLowerCase().trim());
      const filtered = allQuestions.filter(question => {
        const questionTopic = question.topic?.toLowerCase().trim();
        return selectedTopics.includes(questionTopic);
      });

      if (filtered.length === 0) {
        setShowNoQuestions(true);
        setFilteredQuestions([]);
      } else {
        setShowNoQuestions(false);
        setFilteredQuestions(filtered);
      }
      
      setSelectedFilters(filters);
    }

    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setShowFilterModal(false);
    setTimeLeft(30);
  };

  // باقي الكود نفسه... (Animations, Timer, Handlers)
  useEffect(() => {
    slideAnim.setValue(50);
    scaleAnim.setValue(0.95);

    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft <= 10 && timeLeft > 0) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(timerPulseAnim, {
            toValue: 1.15,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(timerPulseAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      timerPulseAnim.setValue(1);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (showExplanation) {
      explanationFadeAnim.setValue(0);
      explanationSlideAnim.setValue(30);

      Animated.parallel([
        Animated.timing(explanationFadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(explanationSlideAnim, {
          toValue: 0,
          tension: 80,
          friction: 10,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [showExplanation]);

  useEffect(() => {
    if (showResult) {
      Animated.spring(resultScaleAnim, {
        toValue: 1,
        tension: 60,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [showResult]);

  useEffect(() => {
    if (filteredQuestions.length === 0) {
      setShowNoQuestions(true);
      return;
    }

    setTimeLeft(30);

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          if (!showExplanation) {
            setShowExplanation(true);
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, filteredQuestions]);

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation || filteredQuestions.length === 0) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === filteredQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < filteredQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setShowNoQuestions(false);
    setTimeLeft(30);
    resultScaleAnim.setValue(0.8);
  };

  const resetAllFilters = () => {
    setSelectedFilters({ topics: [] });
    setFilteredQuestions(allQuestions);
    setShowNoQuestions(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setTimeLeft(30);
  };

  const goHome = () => {
    if (navigation) {
      navigation.navigate('Home');
    }
  };

  // ============ NO QUESTIONS SCREEN ============
  if (showNoQuestions) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔬</Text>
            <Text style={styles.headerTitle}>
              {categoryName ? `Quiz ${categoryName}` : 'Quiz de Parasitologie'}
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Filter size={22} color="#004643" />
          </TouchableOpacity>
        </View>

        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsEmoji}>🔍</Text>
          <Text style={styles.noQuestionsTitle}>Aucune question trouvée</Text>
          <Text style={styles.noQuestionsText}>
            Les filtres sélectionnés ne correspondent à aucune question.{'\n'}
            Veuillez ajuster vos critères.
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Text style={styles.primaryButtonText}>Modifier les filtres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={resetAllFilters}
          >
            <Text style={styles.secondaryButtonText}>Réinitialiser tout</Text>
          </TouchableOpacity>
        </View>

        <HorizontalFilter
          key={`filter-${categoryId}`}
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          selectedFilters={selectedFilters}
          onApplyFilters={handleApplyFilters}
          topicLabels={currentLabels}
        />
      </SafeAreaView>
    );
  }

  // ============ RESULTS SCREEN ============
  if (showResult) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);

    const getResultLevel = () => {
      if (percentage >= 90) return { 
        text: 'Excellent !', 
        emoji: '🏆', 
        color: '#004643', 
        icon: <Trophy size={32} color="#004643" />,
        advice: 'Maîtrise exceptionnelle ! Continuez à maintenir ce niveau d\'excellence.'
      };
      if (percentage >= 70) return { 
        text: 'Très bien !', 
        emoji: '⭐', 
        color: '#004643', 
        icon: <Star size={32} color="#004643" />,
        advice: 'Très bon niveau ! Quelques révisions pour atteindre l\'excellence.'
      };
      if (percentage >= 50) return { 
        text: 'Bien', 
        emoji: '👍', 
        color: '#004643', 
        icon: <CheckCircle2 size={32} color="#004643" />,
        advice: 'Niveau correct. Concentrez-vous sur vos points faibles pour progresser.'
      };
      return { 
        text: 'À réviser', 
        emoji: '📚', 
        color: '#004643', 
        icon: <Target size={32} color="#004643" />,
        advice: 'Des révisions sont nécessaires. Recommencez le quiz pour améliorer votre score.'
      };
    };

    const result = getResultLevel();

    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔬</Text>
            <Text style={styles.headerTitle}>
              {categoryName ? `Quiz ${categoryName}` : 'Quiz de Parasitologie'}
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Filter size={22} color="#004643" />
          </TouchableOpacity>
        </View>

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
              <View style={[styles.resultIconContainer, { backgroundColor: '#ABD1C6' }]}>
                {result.icon}
              </View>
              <Text style={styles.resultEmoji}>{result.emoji}</Text>
            </View>
            
            <Text style={[styles.resultLevel, { color: result.color }]}>
              {result.text}
            </Text>
            
            <View style={[styles.scoreCircle, { borderColor: result.color }]}>
              <Text style={[styles.scorePercentage, { color: result.color }]}>{percentage}%</Text>
              <Text style={styles.scoreText}>
                {score} / {filteredQuestions.length}
              </Text>
            </View>

            <View style={styles.resultStats}>
              <View style={styles.resultStatItem}>
                <View style={[styles.statIconContainer, { backgroundColor: '#ABD1C6' }]}>
                  <CheckCircle2 size={24} color="#004643" />
                </View>
                <Text style={styles.resultStatNumber}>{score}</Text>
                <Text style={styles.resultStatLabel}>Correctes</Text>
              </View>

              <View style={styles.resultDivider} />

              <View style={styles.resultStatItem}>
                <View style={[styles.statIconContainer, { backgroundColor: '#ABD1C6' }]}>
                  <AlertCircle size={24} color="#004643" />
                </View>
                <Text style={styles.resultStatNumber}>{filteredQuestions.length - score}</Text>
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
              onPress={resetQuiz}
            >
              <RotateCcw size={20} color="#ffffff" />
              <Text style={styles.primaryButtonText}>Recommencer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.homeButton, styles.resultButton]}
              onPress={() => {
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setScore(0);
                setShowExplanation(false);
                setShowResult(false);
                setShowNoQuestions(false);
                setSelectedFilters({ topics: [] });
                setFilteredQuestions(allQuestions);
                setTimeLeft(30);
              }}
            >
              <Home size={20} color="#ffffff" />
              <Text style={styles.homeButtonText}>Accueil</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.resultActionsRow}>
            <TouchableOpacity
              style={[styles.tertiaryButton, styles.resultButton]}
              onPress={() => setShowFilterModal(true)}
            >
              <Filter size={20} color="#004643" />
              <Text style={styles.tertiaryButtonText}>Changer filtres</Text>
            </TouchableOpacity>
          </View>
        </View>

        <HorizontalFilter
          key={`filter-${categoryId}`}
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          selectedFilters={selectedFilters}
          onApplyFilters={handleApplyFilters}
          topicLabels={currentLabels}
        />
      </SafeAreaView>
    );
  }

  const question = filteredQuestions[currentQuestion];

  if (!question) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔬</Text>
            <Text style={styles.headerTitle}>
              {categoryName ? `Quiz ${categoryName}` : 'Quiz de Parasitologie'}
            </Text>
          </View>
        </View>
        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsText}>Chargement...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>🔬</Text>
          <Text style={styles.headerTitle}>Quiz de Parasitologie</Text>
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilterModal(true)}
        >
          <Filter size={22} color="#004643" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Question Header with Timer and Category */}
        <View style={styles.questionHeader}>
          <View style={styles.questionInfo}>
            <Text style={styles.questionNumber}>
              Question {currentQuestion + 1}/{filteredQuestions.length}
            </Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>
                {currentLabels[question.topic] || question.topic}
              </Text>
            </View>
          </View>
          
          {/* Timer Circle */}
          <Animated.View 
            style={[
              styles.timerCircle,
              { transform: [{ scale: timerPulseAnim }] }
            ]}
          >
            <View style={styles.timerCircleInner}>
              <Clock size={16} color={timeLeft <= 10 ? "#dc2626" : "#004643"} />
              <Text style={[
                styles.timerText,
                timeLeft <= 10 && styles.timerWarning
              ]}>
                {timeLeft}s
              </Text>
            </View>
          </Animated.View>
        </View>

        {/* Question Card */}
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
          <Text style={styles.questionText}>{question.question}</Text>
        </Animated.View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            const showCorrect = showExplanation && isCorrectAnswer;
            const showWrong = showExplanation && isSelected && !isCorrect;

            return (
              <AnimatedOption
                key={index}
                option={option}
                isSelected={isSelected}
                showCorrect={showCorrect}
                showWrong={showWrong}
                showExplanation={showExplanation}
                onPress={() => handleAnswerSelect(index)}
                styles={styles}
              />
            );
          })}
        </View>

        {/* Explanation */}
        {showExplanation && (
          <Animated.View 
            style={[
              styles.explanationCard,
              isCorrect ? styles.explanationCorrect : styles.explanationWrong,
              {
                opacity: explanationFadeAnim,
                transform: [{ translateY: explanationSlideAnim }]
              }
            ]}
          >
            <View style={styles.explanationHeader}>
              {isCorrect ? (
                <CheckCircle2 size={20} color="#10b981" />
              ) : (
                <AlertCircle size={20} color="#dc2626" />
              )}
              <Text style={[
                styles.explanationTitle,
                { color: isCorrect ? '#10b981' : '#dc2626' }
              ]}>
                {isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte'}
              </Text>
            </View>
            
            <Text style={styles.explanationText}>
              {question.explanation}
            </Text>
          </Animated.View>
        )}

        {/* Next Button */}
        {showExplanation && (
          <Animated.View
            style={{
              opacity: explanationFadeAnim,
              transform: [{ translateY: explanationSlideAnim }]
            }}
          >
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextQuestion}
            >
              <Text style={styles.nextButtonText}>
                {currentQuestion + 1 === filteredQuestions.length ? 'Voir les résultats' : 'Question suivante'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </ScrollView>

      <HorizontalFilter
        visible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        selectedFilters={selectedFilters}
        onApplyFilters={handleApplyFilters}
        topicLabels={currentLabels}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0F3',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12, // تصغير
    paddingHorizontal: 16, // تصغير
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // تصغير
  },
  headerIcon: {
    fontSize: 20, // تصغير
  },
  headerTitle: {
    fontSize: 16, // تصغير
    fontWeight: '700',
    color: '#000000',
  },
  filterButton: {
    padding: 6, // تصغير
    borderRadius: 8,
    backgroundColor: '#ABD1C6',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 12, // تصغير
    paddingBottom: 80, // تقليل لرفع المحتوى
  },
  // Question Header - تصغير كبير
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8, // تصغير
  },
  questionInfo: {
    flex: 1,
  },
  questionNumber: {
    fontSize: 14, // تصغير
    fontWeight: '700',
    color: '#004643',
    marginBottom: 4, // تصغير
  },
  categoryBadge: {
    backgroundColor: '#ABD1C6',
    paddingHorizontal: 10, // تصغير
    paddingVertical: 3, // تصغير
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: 11, // تصغير
    fontWeight: '600',
    color: '#004643',
  },
  // Timer Circle - تصغير كبير
  timerCircle: {
    width: 50, // تصغير من 60
    height: 50, // تصغير من 60
    borderRadius: 25, // تصغير
    backgroundColor: '#FFFFFF',
    borderWidth: 2, // تصغير
    borderColor: '#ABD1C6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8, // تصغير
  },
  timerCircleInner: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 12, // تصغير
    fontWeight: '700',
    color: '#004643',
    marginTop: 1, // تصغير
  },
  timerWarning: {
    color: '#dc2626',
  },
  // Question Card - تصغير
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14, // تصغير
    padding: 16, // تصغير
    marginBottom: 12, // تصغير
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // تصغير
    shadowOpacity: 0.08, // تصغير
    shadowRadius: 6, // تصغير
    elevation: 3, // تصغير
    minHeight: 100, // تصغير من 137
  },
  questionText: {
    fontSize: 15, // تصغير
    fontWeight: '600',
    color: '#000000',
    lineHeight: 22, // تصغير
    textAlign: 'center',
  },
  // Options - تصغير
  optionsContainer: {
    gap: 6, // تصغير
    marginBottom: 12, // تصغير
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10, // تصغير
    padding: 12, // تصغير
    borderWidth: 1.5, // تصغير
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 45, // تصغير من 53
  },
  optionSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  optionCorrect: {
    borderColor: '#10b981',
    backgroundColor: '#d1fae5',
  },
  optionWrong: {
    borderColor: '#dc2626',
    backgroundColor: '#fee2e2',
  },
  optionText: {
    fontSize: 13, // تصغير
    color: '#4b5563',
    flex: 1,
    lineHeight: 18, // تصغير
  },
  optionTextBold: {
    color: '#111827',
    fontWeight: '600',
  },
  // Explanation - تصغير
  explanationCard: {
    borderRadius: 10, // تصغير
    padding: 14, // تصغير
    marginBottom: 10, // تصغير
    borderWidth: 1.5,
  },
  explanationCorrect: {
    backgroundColor: '#ecfdf5',
    borderColor: '#10b981',
  },
  explanationWrong: {
    backgroundColor: '#fef2f2',
    borderColor: '#dc2626',
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6, // تصغير
    marginBottom: 6, // تصغير
  },
  explanationTitle: {
    fontSize: 13, // تصغير
    fontWeight: '700',
  },
  explanationText: {
    fontSize: 12, // تصغير
    color: '#374151',
    lineHeight: 16, // تصغير
  },
  // Next Button - تصغير
  nextButton: {
    backgroundColor: '#004643',
    borderRadius: 10, // تصغير
    padding: 12, // تصغير
    alignItems: 'center',
    marginTop: 8, // إضافة مسافة علوية
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15, // تصغير
    fontWeight: '700',
  },
  // Results Screen (بقيت كما هي)
  resultScrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    marginBottom: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 16,
  },
  resultIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultEmoji: {
    fontSize: 48,
  },
  resultLevel: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 28,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  scoreCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    borderWidth: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  scorePercentage: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -1,
  },
  scoreText: {
    fontSize: 16,
    color: '#000000',
    marginTop: 6,
    fontWeight: '600',
  },
  resultStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 16,
  },
  resultDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#e5e7eb',
  },
  resultStatItem: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultStatNumber: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000000',
  },
  resultStatLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  adviceContainer: {
    backgroundColor: '#ABD1C6',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    width: '100%',
  },
  adviceTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#004643',
    marginBottom: 8,
    textAlign: 'center',
  },
  adviceText: {
    fontSize: 14,
    color: '#004643',
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  resultActionsContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  resultActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  resultActionsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    marginTop: 12,
  },
  resultButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 16,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#004643',
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  homeButton: {
    flex: 1,
    backgroundColor: '#004643',
    borderRadius: 12,
  },
  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  tertiaryButton: {
    flex: 1,
    backgroundColor: '#ABD1C6',
    borderRadius: 12,
  },
  tertiaryButtonText: {
    color: '#004643',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#ABD1C6',
    borderRadius: 12,
    marginTop: 12,
  },
  secondaryButtonText: {
    color: '#004643',
    fontSize: 16,
    fontWeight: '800',
  },
  noQuestionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noQuestionsEmoji: {
    fontSize: 72,
    marginBottom: 20,
  },
  noQuestionsTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  noQuestionsText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
});