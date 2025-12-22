import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
  Image, 
  ScrollView,
  Platform,
  Alert,
  Animated,
  ActivityIndicator,
  LayoutAnimation,
  UIManager,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { microscopyAtlas } from '../data/microscopyAtlas';

// تفعيل الأنيميشن للأندرويد
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width } = Dimensions.get('window');

const DiagnosticScreen = () => {
  const navigation = useNavigation();

  // --- State ---
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('quiz'); // 'quiz' OR 'scanner'
  
  // 🔬 Clinical Filters (Selles, Sang, Urines...)
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tout'); 

  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false); 
  const [score, setScore] = useState(0);
  
  // Animation Values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const clueAnim = useRef(new Animated.Value(0)).current;
  const scannerAnim = useRef(new Animated.Value(0)).current; // Animation for AI Scanner

  // --- Helper: تصنيف الطفيليات حسب العينة (Sample Type Logic) ---
  const getSampleType = (item) => {
    const name = item.parasiteName.toLowerCase();
    const family = item.family.toLowerCase();

    if (name.includes('haematobium') || name.includes('vaginalis')) return 'Urines';
    if (name.includes('plasmodium') || name.includes('brucei') || family.includes('blood')) return 'Sang';
    if (name.includes('enterobius') || item.technique.includes('Scotch')) return 'Scotch Test';
    return 'Selles'; // Default (Most parasites are in stool)
  };

  // --- Initialize ---
  useEffect(() => {
    const timer = setTimeout(() => {
      generateNewQuestion('Tout');
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // --- 🧠 The Smart Quiz Engine ---
  
  const generateNewQuestion = (filterOverride = activeFilter) => {
    fadeAnim.setValue(0);
    clueAnim.setValue(0); 
    setSelectedOption(null);
    setIsAnswered(false);

    // 1. Smart Filtering based on Clinical Sample
    let pool = microscopyAtlas;
    if (filterOverride !== 'Tout') {
      pool = microscopyAtlas.filter(item => getSampleType(item) === filterOverride);
    }

    if (pool.length === 0) {
      Alert.alert("Info", `Aucun parasite trouvé dans la catégorie: ${filterOverride}`);
      pool = microscopyAtlas; // Fallback
      setActiveFilter('Tout');
    }

    // 2. Random Selection
    const randomIndex = Math.floor(Math.random() * pool.length);
    const question = pool[randomIndex];

    // 3. Options Generation
    let finalOptions = [];
    if (question.options && question.options.length > 0) {
      finalOptions = [...question.options].sort(() => Math.random() - 0.5);
    } else {
      const randomDistractors = microscopyAtlas
        .filter(i => i.id !== question.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(i => i.parasiteName);
      finalOptions = [question.parasiteName, ...randomDistractors].sort(() => Math.random() - 0.5);
    }

    setCurrentQuestion(question);
    setShuffledOptions(finalOptions);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleFilterSelect = (category) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveFilter(category);
    generateNewQuestion(category);
  };

  const toggleFilterBar = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowFilters(!showFilters);
  };

  const handleOptionSelect = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === currentQuestion.parasiteName;
    if (isCorrect) setScore(s => s + 1);

    Animated.timing(clueAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleNextQuestion = () => {
    generateNewQuestion();
  };

  // --- 🤖 AI Scanner Logic ---
  const handleAIScan = () => {
    // تشغيل أنيميشن وهمي للمسح
    Animated.loop(
      Animated.sequence([
        Animated.timing(scannerAnim, { toValue: 1, duration: 1500, useNativeDriver: true }),
        Animated.timing(scannerAnim, { toValue: 0, duration: 1500, useNativeDriver: true })
      ])
    ).start();

    // هنا سنربط الذكاء الاصطناعي لاحقاً
    setTimeout(() => {
      Alert.alert(
        "Module IA (Bêta)",
        "Je suis prêt à apprendre, Professeur ! \nDonnez-moi des données pour m'entraîner.",
        [{ text: "Commencer l'entraînement" }]
      );
    }, 2000);
  };

  // --- Categories List (Clinical) ---
  const clinicalCategories = ['Tout', 'Selles', 'Sang', 'Urines', 'Scotch Test'];

  // --- Renderers ---

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.statusBarPlaceholder} />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        {/* Mode Switcher (Quiz vs AI) */}
        <View style={styles.modeSwitchContainer}>
          <TouchableOpacity 
            style={[styles.modeBtn, mode === 'quiz' && styles.modeBtnActive]}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setMode('quiz');
            }}
          >
            <Text style={[styles.modeText, mode === 'quiz' && styles.modeTextActive]}>Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.modeBtn, mode === 'scanner' && styles.modeBtnActive]}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setMode('scanner');
            }}
          >
            <MaterialCommunityIcons name="line-scan" size={16} color={mode === 'scanner' ? "#fff" : "#94a3b8"} style={{marginRight:4}} />
            <Text style={[styles.modeText, mode === 'scanner' && styles.modeTextActive]}>AI</Text>
          </TouchableOpacity>
        </View>

        {/* Filter Toggle (Only in Quiz Mode) */}
        {mode === 'quiz' ? (
          <TouchableOpacity 
            style={[styles.iconButton, showFilters && styles.iconButtonActive]} 
            onPress={toggleFilterBar}
          >
            <Ionicons name="filter" size={20} color={showFilters ? "#3b82f6" : "#fff"} />
          </TouchableOpacity>
        ) : (
          <View style={{width: 40}} /> // Spacer
        )}
      </View>

      {/* 🔽 Collapsible Clinical Filter Bar */}
      {mode === 'quiz' && showFilters && (
        <View style={styles.filterBar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 16}}>
            {clinicalCategories.map((cat) => (
              <TouchableOpacity 
                key={cat} 
                style={[styles.filterChip, activeFilter === cat && styles.filterChipActive]}
                onPress={() => handleFilterSelect(cat)}
              >
                <Text style={[styles.filterText, activeFilter === cat && styles.filterTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
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
      <View style={{flex: 1}}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            
            {/* 🔬 Microscope View */}
            <View style={styles.microscopeCard}>
              <View style={styles.imageWrapper}>
                {currentQuestion.image ? (
                  <Image 
                    source={currentQuestion.image} 
                    style={styles.microscopeImage}
                    resizeMode="contain"
                  />
                ) : (
                  <View style={styles.missingImage}>
                    <Ionicons name="image-outline" size={40} color="#94a3b8" />
                  </View>
                )}
                
                {/* Sample Badge (Dynamic) */}
                <View style={[styles.sampleBadge, { backgroundColor: getSampleType(currentQuestion) === 'Sang' ? '#ef4444' : '#f59e0b' }]}>
                   <Ionicons name="eyedrop" size={10} color="#fff" style={{marginRight:4}} />
                   <Text style={styles.sampleText}>{getSampleType(currentQuestion)}</Text>
                </View>

                {/* Technique Badge */}
                <View style={styles.techniqueBadge}>
                  <Text style={styles.badgeText}>{currentQuestion.technique}</Text>
                </View>
              </View>

              {/* Clue Box */}
              {isAnswered && currentQuestion.clue && (
                <Animated.View style={[styles.clueBox, { opacity: clueAnim }]}>
                  <View style={styles.clueHeader}>
                    <MaterialCommunityIcons name="microscope" size={18} color="#0f172a" />
                    <Text style={styles.clueTitle}>Observation</Text>
                  </View>
                  <Text style={styles.clueText}>{currentQuestion.clue}</Text>
                </Animated.View>
              )}
            </View>

            <Text style={styles.sectionTitle}>DIAGNOSTIC ?</Text>

            {/* Options Grid */}
            <View style={styles.gridContainer}>
              {shuffledOptions.map((option, index) => {
                const isSelected = selectedOption === option;
                const isCorrectAnswer = option === currentQuestion.parasiteName;
                
                let cardStyle = styles.gridCard;
                let textStyle = styles.gridText;
                let borderColor = '#e2e8f0';

                if (isAnswered) {
                  if (isCorrectAnswer) {
                    cardStyle = [styles.gridCard, styles.cardCorrect];
                    textStyle = [styles.gridText, styles.textCorrect];
                    borderColor = '#059669';
                  } else if (isSelected) {
                    cardStyle = [styles.gridCard, styles.cardWrong];
                    textStyle = [styles.gridText, styles.textWrong];
                    borderColor = '#dc2626';
                  } else {
                    cardStyle = [styles.gridCard, styles.cardDimmed];
                  }
                } else if (isSelected) {
                   borderColor = '#3b82f6';
                }

                return (
                  <TouchableOpacity 
                    key={index}
                    style={[cardStyle, { borderColor }]}
                    onPress={() => handleOptionSelect(option)}
                    activeOpacity={0.9}
                    disabled={isAnswered}
                  >
                    <Text style={textStyle} numberOfLines={2}>{option}</Text>
                    {isAnswered && isCorrectAnswer && (
                       <Ionicons name="checkmark-circle" size={20} color="#059669" style={styles.cardIcon} />
                    )}
                    {isAnswered && isSelected && !isCorrectAnswer && (
                       <Ionicons name="close-circle" size={20} color="#dc2626" style={styles.cardIcon} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </Animated.View>
        </ScrollView>

        {/* Next Button */}
        {isAnswered && (
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
              <Text style={styles.nextButtonText}>Suivant</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  // --- 🤖 THE AI SCANNER INTERFACE ---
  const renderScannerContent = () => (
    <View style={styles.scannerContainer}>
      <View style={styles.scannerCircle}>
        <Animated.View style={{ opacity: scannerAnim, transform: [{ scale: scannerAnim.interpolate({inputRange:[0,1], outputRange:[1, 1.2]}) }] }}>
          <View style={styles.laserBeam} />
        </Animated.View>
        <MaterialCommunityIcons name="robot" size={80} color="#6366f1" />
      </View>
      
      <Text style={styles.scannerTitle}>AI Parasitologist</Text>
      <Text style={styles.scannerDesc}>
        Pointez votre caméra vers l'oculaire du microscope ou importez une photo pour l'analyse.
      </Text>
      
      <TouchableOpacity style={styles.scanButton} onPress={handleAIScan}>
        <Ionicons name="camera" size={24} color="#fff" style={{marginRight: 8}} />
        <Text style={styles.scanButtonText}>Analyser l'échantillon</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.galleryButton}>
        <Ionicons name="images" size={20} color="#6366f1" style={{marginRight: 8}} />
        <Text style={styles.galleryButtonText}>Importer de la galerie</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  
  // Header
  headerContainer: { backgroundColor: '#0f172a', paddingBottom: 15, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, elevation: 8, zIndex: 10 },
  statusBarPlaceholder: { height: Platform.OS === 'ios' ? 48 : StatusBar.currentHeight + 8 },
  navBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 },
  
  // Mode Switcher
  modeSwitchContainer: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: 4 },
  modeBtn: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 16 },
  modeBtnActive: { backgroundColor: '#3b82f6' },
  modeText: { color: '#94a3b8', fontSize: 13, fontWeight: '600' },
  modeTextActive: { color: '#fff', fontWeight: '700' },

  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center' },
  iconButtonActive: { backgroundColor: '#fff' },

  // Filters
  filterBar: { marginTop: 15 },
  filterChip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)', marginRight: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  filterChipActive: { backgroundColor: '#3b82f6', borderColor: '#3b82f6' },
  filterText: { fontSize: 13, fontWeight: '600', color: '#94a3b8' },
  filterTextActive: { color: '#fff' },

  // Content
  contentArea: { flex: 1 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, color: '#64748b' },
  scrollContent: { padding: 20, paddingBottom: 100 },

  // Microscope Card
  microscopeCard: { backgroundColor: '#fff', borderRadius: 24, padding: 12, elevation: 4, marginBottom: 20, shadowColor: '#0f172a', shadowOpacity: 0.1, shadowRadius: 10 },
  imageWrapper: { height: 260, backgroundColor: '#000', borderRadius: 16, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' },
  microscopeImage: { width: '100%', height: '100%' },
  missingImage: { opacity: 0.5 },
  
  sampleBadge: { position: 'absolute', top: 12, left: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20, elevation: 2 },
  sampleText: { color: '#fff', fontSize: 11, fontWeight: '700', textTransform: 'uppercase' },
  techniqueBadge: { position: 'absolute', bottom: 12, right: 12, backgroundColor: 'rgba(0,0,0,0.7)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20 },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '600' },

  // Clue
  clueBox: { marginTop: 12, backgroundColor: '#f1f5f9', padding: 12, borderRadius: 12 },
  clueHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 4, gap: 6 },
  clueTitle: { fontSize: 12, fontWeight: '700', color: '#0f172a', textTransform: 'uppercase' },
  clueText: { fontSize: 13, color: '#334155', lineHeight: 20 },

  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#64748b', marginBottom: 12, marginLeft: 4, letterSpacing: 1 },

  // Grid
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 },
  gridCard: { width: '48%', backgroundColor: '#fff', borderRadius: 16, padding: 16, minHeight: 90, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#f1f5f9', elevation: 2 },
  gridText: { fontSize: 14, color: '#334155', fontWeight: '600', textAlign: 'center' },
  cardIcon: { marginTop: 6 },
  cardCorrect: { backgroundColor: '#ecfdf5', borderColor: '#10b981' },
  textCorrect: { color: '#047857' },
  cardWrong: { backgroundColor: '#fef2f2', borderColor: '#ef4444' },
  textWrong: { color: '#b91c1c' },
  cardDimmed: { opacity: 0.5 },

  // Bottom Bar
  bottomBar: { position: 'absolute', bottom: 30, left: 0, right: 0, alignItems: 'center' },
  nextButton: { flexDirection: 'row', backgroundColor: '#0f172a', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 30, alignItems: 'center', gap: 8, elevation: 10, shadowColor: '#3b82f6', shadowOpacity: 0.4, shadowOffset: {width: 0, height: 4} },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  // Scanner AI Styles
  scannerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: '#f8fafc' },
  scannerCircle: { width: 160, height: 160, borderRadius: 80, backgroundColor: '#e0e7ff', justifyContent: 'center', alignItems: 'center', marginBottom: 30, borderWidth: 1, borderColor: '#c7d2fe' },
  laserBeam: { position: 'absolute', width: 140, height: 2, backgroundColor: '#f43f5e', top: 70 },
  scannerTitle: { fontSize: 24, fontWeight: '800', color: '#1e293b', marginBottom: 10 },
  scannerDesc: { fontSize: 15, color: '#64748b', textAlign: 'center', marginBottom: 40, lineHeight: 24 },
  scanButton: { flexDirection: 'row', backgroundColor: '#4f46e5', paddingVertical: 16, paddingHorizontal: 32, borderRadius: 30, elevation: 6, width: '100%', justifyContent: 'center', alignItems: 'center' },
  scanButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  galleryButton: { flexDirection: 'row', marginTop: 16, paddingVertical: 16, width: '100%', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#e2e8f0', borderRadius: 30 },
  galleryButtonText: { color: '#6366f1', fontWeight: '700', fontSize: 16 },
});

export default DiagnosticScreen;
