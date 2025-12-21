import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
  Image, 
  Dimensions,
  ScrollView,
  Platform,
  Alert,
  Animated,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

// استيراد البيانات
import { microscopyAtlas } from '../data/microscopyAtlas';

const { width, height } = Dimensions.get('window');

const DiagnosticScreen = () => {
  const navigation = useNavigation();

  // --- State ---
  const [mode, setMode] = useState('quiz'); // 'quiz' or 'scanner'
  const [loading, setLoading] = useState(true);
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  
  // Animation Values
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // --- Initialize ---
  useEffect(() => {
    // محاكاة تحميل قصيرة لضمان استقرار الواجهة
    const timer = setTimeout(() => {
      if (microscopyAtlas && microscopyAtlas.length > 0) {
        generateNewQuestion();
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // --- Logic ---
  const generateNewQuestion = () => {
    // Reset Animation & State
    fadeAnim.setValue(0);
    setSelectedOption(null);

    // 1. اختيار سؤال عشوائي
    const randomIndex = Math.floor(Math.random() * microscopyAtlas.length);
    const question = microscopyAtlas[randomIndex];

    // 2. ✅ خلط الخيارات عشوائياً (Fix: Shuffling logic)
    let finalOptions = [];
    if (question.options && question.options.length > 0) {
      // ننسخ المصفوفة ونخلطها
      finalOptions = [...question.options].sort(() => Math.random() - 0.5);
    } else {
      // Fallback في حال لا توجد خيارات
      finalOptions = [question.parasiteName, "Option A", "Option B", "Option C"];
    }

    setCurrentQuestion(question);
    setShuffledOptions(finalOptions);

    // Fade In New Question
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleOptionSelect = (option) => {
    if (selectedOption) return; 

    setSelectedOption(option);
    const isCorrect = option === currentQuestion.parasiteName;

    if (isCorrect) setScore(s => s + 1);

    // Auto-advance
    setTimeout(() => {
      generateNewQuestion();
    }, 1500); // زيادة الوقت قليلاً ليتمكن المستخدم من رؤية الإجابة الصحيحة
  };

  const handleAIScan = () => {
    Alert.alert(
      "Module IA (Bêta)",
      "L'algorithme de reconnaissance d'images est en cours d'entraînement. Cette fonctionnalité sera activée dans la prochaine mise à jour.",
      [{ text: "Compris", style: "cancel" }]
    );
  };

  // --- Components ---

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.statusBarPlaceholder} />
      <View style={styles.navBar}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.iconButton}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        {/* Segmented Control */}
        <View style={styles.modeSelector}>
          <TouchableOpacity 
            style={[styles.selectorBtn, mode === 'quiz' && styles.selectorBtnActive]}
            onPress={() => setMode('quiz')}
            activeOpacity={0.8}
          >
            <Text style={[styles.selectorText, mode === 'quiz' && styles.selectorTextActive]}>Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.selectorBtn, mode === 'scanner' && styles.selectorBtnActive]}
            onPress={() => setMode('scanner')}
            activeOpacity={0.8}
          >
            <Text style={[styles.selectorText, mode === 'scanner' && styles.selectorTextActive]}>Scanner</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scoreBadge}>
          <Text style={styles.scoreLabel}>PTS</Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>
      </View>
    </View>
  );

  const renderQuizContent = () => {
    if (loading || !currentQuestion) return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>Préparation des lames...</Text>
      </View>
    );

    return (
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Microscope View */}
          <View style={styles.microscopeCard}>
            <View style={styles.imageWrapper}>
              {currentQuestion.image ? (
                <Image 
                  source={currentQuestion.image} 
                  style={styles.microscopeImage}
                  resizeMode="contain" // ✅ تغيير إلى contain لضمان ظهور الصورة كاملة
                  onError={(e) => console.log("خطأ في تحميل الصورة:", e.nativeEvent.error)}
                />
              ) : (
                <View style={[styles.microscopeImage, { backgroundColor: '#1a1a1a', justifyContent: 'center', alignItems: 'center' }]}>
                  <Ionicons name="image-outline" size={40} color="#666" />
                  <Text style={{color: '#666', marginTop: 10}}>Image introuvable</Text>
                </View>
              )}
              
              {/* Overlays */}
              <View style={styles.liveBadge}>
                <View style={styles.recordingDot} />
                <Text style={styles.liveText}>LIVE</Text>
              </View>
              
              <View style={styles.zoomBadge}>
                <Text style={styles.zoomText}>400x</Text>
              </View>
            </View>

            {/* Metadata Footer */}
            <View style={styles.metaFooter}>
              <View style={styles.metaItem}>
                <Ionicons name="pricetag-outline" size={14} color="#64748b" />
                <Text style={styles.metaText}>{currentQuestion.family || 'Unknown'}</Text>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="hardware-chip-outline" size={14} color="#64748b" />
                <Text style={styles.metaText}>ID: {currentQuestion.id || '---'}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>IDENTIFICATION</Text>

          {/* Options Grid */}
          <View style={styles.optionsContainer}>
            {shuffledOptions.map((option, index) => {
              const isSelected = selectedOption === option;
              const isCorrectAnswer = option === currentQuestion.parasiteName;
              
              let cardStyle = styles.optionCard;
              let textStyle = styles.optionText;
              let iconName = "ellipse-outline";
              let iconColor = "#cbd5e1";

              if (selectedOption) {
                if (isCorrectAnswer) {
                  // ✅ الإجابة الصحيحة تظهر دائماً بالأخضر سواء اخترتها أم لا
                  cardStyle = [styles.optionCard, styles.cardCorrect];
                  textStyle = [styles.optionText, styles.textCorrect];
                  iconName = "checkmark-circle";
                  iconColor = "#059669";
                } else if (isSelected) {
                  // ✅ إجابتك الخاطئة تظهر بالأحمر
                  cardStyle = [styles.optionCard, styles.cardWrong];
                  textStyle = [styles.optionText, styles.textWrong];
                  iconName = "close-circle";
                  iconColor = "#dc2626";
                } else {
                  // ✅ باقي الخيارات تصبح باهتة
                  cardStyle = [styles.optionCard, styles.cardDimmed];
                }
              }

              return (
                <TouchableOpacity 
                  key={index}
                  style={cardStyle}
                  onPress={() => handleOptionSelect(option)}
                  activeOpacity={0.9}
                  disabled={selectedOption !== null}
                >
                  <Text style={textStyle}>{option}</Text>
                  <Ionicons name={iconName} size={22} color={iconColor} />
                </TouchableOpacity>
              );
            })}
          </View>
        </Animated.View>
      </ScrollView>
    );
  };

  const renderScannerContent = () => (
    <View style={styles.scannerContainer}>
      <View style={styles.scannerCircle}>
        <MaterialCommunityIcons name="line-scan" size={64} color="#6366f1" />
      </View>
      <Text style={styles.scannerTitle}>Analyseur IA</Text>
      <Text style={styles.scannerDesc}>
        Pointez votre caméra vers l'oculaire pour une identification en temps réel.
      </Text>
      <TouchableOpacity style={styles.scanButton} onPress={handleAIScan}>
        <Ionicons name="camera" size={20} color="#fff" style={{marginRight: 8}} />
        <Text style={styles.scanButtonText}>Activer Caméra</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      {renderHeader()}
      
      <View style={styles.contentArea}>
        {mode === 'quiz' ? renderQuizContent() : renderScannerContent()}
      </View>

      {/* Quick Switch FAB */}
      {mode === 'quiz' && (
        <TouchableOpacity 
          style={styles.fab} 
          onPress={() => setMode('scanner')}
          activeOpacity={0.9}
        >
          <MaterialCommunityIcons name="brain" size={26} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Very light slate
  },
  // --- Header ---
  headerContainer: {
    backgroundColor: '#0f172a', // Slate-900 (Deep Navy)
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    zIndex: 10,
  },
  statusBarPlaceholder: {
    height: Platform.OS === 'ios' ? 48 : StatusBar.currentHeight + 8,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modeSelector: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 4,
  },
  selectorBtn: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  selectorBtnActive: {
    backgroundColor: '#3b82f6', // Bright Blue
  },
  selectorText: {
    color: '#94a3b8',
    fontSize: 13,
    fontWeight: '600',
  },
  selectorTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  scoreBadge: {
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)', // Green tint
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  scoreLabel: {
    fontSize: 9,
    color: '#10b981',
    fontWeight: '800',
  },
  scoreValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '800',
  },

  // --- Content ---
  contentArea: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#64748b',
    fontSize: 14,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },

  // --- Microscope Card ---
  microscopeCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 8,
    elevation: 4,
    shadowColor: '#64748b',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    marginBottom: 24,
  },
  imageWrapper: {
    height: 260,
    backgroundColor: '#000', // خلفية سوداء لمحاكاة الميكروسكوب
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center', // لضمان توسط الصورة
    alignItems: 'center',
  },
  microscopeImage: {
    width: '100%',
    height: '100%',
  },
  liveBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  recordingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ef4444',
    marginRight: 6,
  },
  liveText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  zoomBadge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  zoomText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0f172a',
  },
  metaFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748b',
    marginBottom: 12,
    marginLeft: 4,
    letterSpacing: 1,
  },

  // --- Options ---
  optionsContainer: {
    gap: 12,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 15,
    color: '#334155',
    fontWeight: '600',
    flex: 1,
  },
  // States
  cardCorrect: {
    backgroundColor: '#ecfdf5',
    borderColor: '#059669',
  },
  textCorrect: {
    color: '#047857',
  },
  cardWrong: {
    backgroundColor: '#fef2f2',
    borderColor: '#dc2626',
  },
  textWrong: {
    color: '#b91c1c',
  },
  cardDimmed: {
    opacity: 0.5,
    backgroundColor: '#f1f5f9',
  },

  // --- Scanner ---
  scannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  scannerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  scannerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 10,
  },
  scannerDesc: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  scanButton: {
    flexDirection: 'row',
    backgroundColor: '#4f46e5',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  scanButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // --- FAB ---
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default DiagnosticScreen;
