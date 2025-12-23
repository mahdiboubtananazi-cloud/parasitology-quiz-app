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
  Dimensions,
  ImageBackground // Added for better visual effect
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { microscopyAtlas } from '../data/microscopyAtlas';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width } = Dimensions.get('window');

const DiagnosticScreen = () => {
  const navigation = useNavigation();

  // --- State ---
  const [loading, setLoading] = useState(true);
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

  // --- Logic ---
  const getSampleType = (item) => {
    // Safety check for item
    if (!item) return 'Inconnu';
    
    const name = item.parasiteName ? item.parasiteName.toLowerCase() : '';
    const family = item.family ? item.family.toLowerCase() : '';
    const technique = item.technique ? item.technique.toLowerCase() : '';

    if (name.includes('haematobium') || name.includes('vaginalis') || technique.includes('urine')) return 'Urines';
    if (name.includes('plasmodium') || name.includes('brucei') || family.includes('blood') || technique.includes('giemsa')) return 'Sang';
    if (name.includes('enterobius') || technique.includes('scotch')) return 'Scotch Test';
    return 'Selles';
  };

  // بيانات الفلاتر المحسنة
  const filtersData = [
    { id: 'Tout', label: 'Tout', icon: 'apps', color: '#64748b' },
    { id: 'Selles', label: 'Selles', icon: 'flask', color: '#854d0e' }, // Brown/Gold
    { id: 'Sang', label: 'Sang', icon: 'water', color: '#ef4444' },     // Red
    { id: 'Urines', label: 'Urines', icon: 'beaker', color: '#eab308' }, // Yellow
    { id: 'Scotch Test', label: 'Scotch', icon: 'clipboard', color: '#3b82f6' },
  ];

  useEffect(() => {
    // Initial load simulation
    const timer = setTimeout(() => {
      generateNewQuestion('Tout');
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const generateNewQuestion = (filterOverride = activeFilter) => {
    // Reset states
    fadeAnim.setValue(0);
    clueAnim.setValue(0); 
    setSelectedOption(null);
    setIsAnswered(false);

    // Filter Logic
    let pool = microscopyAtlas;
    if (filterOverride !== 'Tout') {
      pool = microscopyAtlas.filter(item => getSampleType(item) === filterOverride);
    }

    // Fallback if empty
    if (pool.length === 0) {
      if (filterOverride !== 'Tout') {
         Alert.alert("Info", `Pas d'images disponibles pour: ${filterOverride}`);
         setActiveFilter('Tout');
         pool = microscopyAtlas; // Reset to all
      }
    }

    // Pick Random Question
    const randomIndex = Math.floor(Math.random() * pool.length);
    const question = pool[randomIndex];

    // Options Logic (Smart Fallback)
    let finalOptions = [];
    if (question.options && question.options.length > 0) {
      // Use predefined options if available (Preferred)
      finalOptions = [...question.options].sort(() => Math.random() - 0.5);
    } else {
      // Fallback: Generate distractors if 'options' array is missing
      const randomDistractors = microscopyAtlas
        .filter(i => i.id !== question.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(i => i.parasiteName);
      finalOptions = [question.parasiteName, ...randomDistractors].sort(() => Math.random() - 0.5);
    }

    setCurrentQuestion(question);
    setShuffledOptions(finalOptions);

    // Start Fade In
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
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
    
    if (isCorrect) {
        setScore(s => s + 10); // 10 Points for correct answer
    }

    // Show clue animation
    Animated.timing(clueAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  };

  const handleNextQuestion = () => generateNewQuestion();

  // --- UI Renderers ---

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.statusBarPlaceholder} />
      
      {/* Top Row: Back | Title | Actions */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
           <Text style={styles.headerTitle}>Micro Quiz</Text>
           <Text style={styles.subHeaderTitle}>Diagnostic Rapide</Text>
        </View>

        <View style={styles.actionsRow}>
           {/* Filter Button */}
           <TouchableOpacity 
             style={[styles.iconButton, showFilters && styles.iconButtonActive]} 
             onPress={toggleFilterBar}
           >
             <Ionicons name="filter" size={20} color={showFilters ? "#0f172a" : "#fff"} />
           </TouchableOpacity>

           {/* Score Badge */}
           <View style={styles.scoreBadge}>
              <Text style={styles.scoreLabel}>PTS</Text>
              <Text style={styles.scoreValue}>{score}</Text>
           </View>
        </View>
      </View>

      {/* Filter Bar */}
      {showFilters && (
        <View style={styles.filterBar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 12}}>
            {filtersData.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <TouchableOpacity 
                  key={cat.id} 
                  style={[styles.filterChip, isActive && { backgroundColor: cat.color, borderColor: cat.color }]}
                  onPress={() => handleFilterSelect(cat.id)}
                >
                  <Ionicons name={cat.icon} size={16} color={isActive ? "#fff" : cat.color} style={{marginRight: 6}} />
                  <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              )
            })}
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
              <View style={styles.imageHeaderRow}>
                 {/* Sample Type Badge */}
                 <View style={[styles.sampleBadge, { backgroundColor: getSampleType(currentQuestion) === 'Sang' ? '#ef4444' : getSampleType(currentQuestion) === 'Urines' ? '#eab308' : '#854d0e' }]}>
                    <Text style={styles.sampleText}>{getSampleType(currentQuestion)}</Text>
                 </View>
                 
                 {/* Difficulty Badge */}
                 {currentQuestion.difficulty && (
                     <View style={[styles.diffBadge, 
                        currentQuestion.difficulty === 'Easy' ? styles.diffEasy : 
                        currentQuestion.difficulty === 'Hard' ? styles.diffHard : styles.diffMedium
                     ]}>
                        <Text style={[styles.diffText, {color: currentQuestion.difficulty === 'Easy' ? '#059669' : currentQuestion.difficulty === 'Hard' ? '#b91c1c' : '#b45309'}]}>
                            {currentQuestion.difficulty}
                        </Text>
                     </View>
                 )}
              </View>

              {/* Image Container with Blur Background Effect */}
              <View style={styles.imageWrapper}>
                {currentQuestion.image ? (
                  <ImageBackground 
                    source={currentQuestion.image} 
                    style={styles.microscopeImageBg}
                    blurRadius={Platform.OS === 'ios' ? 8 : 4} // Blur effect for background
                  >
                     <Image 
                       source={currentQuestion.image} 
                       style={styles.microscopeImageFg}
                       resizeMode="contain"
                     />
                  </ImageBackground>
                ) : (
                  <View style={styles.missingImage}>
                     <MaterialCommunityIcons name="microscope" size={48} color="#cbd5e1" />
                     <Text style={{color: '#94a3b8', marginTop: 8}}>Image non disponible</Text>
                  </View>
                )}
                
                {/* Technique Overlay (Bottom) */}
                <View style={styles.techniqueOverlay}>
                    <Text style={styles.techniqueText}>{currentQuestion.technique || "Microscopie"}</Text>
                </View>
              </View>

              {/* Clue Box (Appears after answer) */}
              {isAnswered && currentQuestion.clue && (
                <Animated.View style={[styles.clueBox, { opacity: clueAnim, transform: [{translateY: clueAnim.interpolate({inputRange: [0, 1], outputRange: [10, 0]})}] }]}>
                  <View style={styles.clueHeader}>
                    <MaterialCommunityIcons name="lightbulb-on-outline" size={18} color="#b45309" />
                    <Text style={styles.clueTitle}>Indice Clinique</Text>
                  </View>
                  <Text style={styles.clueText}>{currentQuestion.clue}</Text>
                </Animated.View>
              )}
            </View>

            <Text style={styles.sectionTitle}>IDENTIFICATION DU PARASITE</Text>

            {/* Options Grid */}
            <View style={styles.gridContainer}>
              {shuffledOptions.map((option, index) => {
                const isSelected = selectedOption === option;
                const isCorrectAnswer = option === currentQuestion.parasiteName;
                
                let cardStyle = styles.gridCard;
                let textStyle = styles.gridText;
                let borderColor = '#e2e8f0';
                let iconName = null;
                let iconColor = null;

                if (isAnswered) {
                  if (isCorrectAnswer) {
                    cardStyle = [styles.gridCard, styles.cardCorrect];
                    textStyle = [styles.gridText, styles.textCorrect];
                    borderColor = '#10b981';
                    iconName = "checkmark-circle";
                    iconColor = "#10b981";
                  } else if (isSelected) {
                    cardStyle = [styles.gridCard, styles.cardWrong];
                    textStyle = [styles.gridText, styles.textWrong];
                    borderColor = '#ef4444';
                    iconName = "close-circle";
                    iconColor = "#ef4444";
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
                    activeOpacity={0.8}
                    disabled={isAnswered}
                  >
                    <Text style={textStyle} numberOfLines={3}>{option}</Text>
                    {isAnswered && iconName && (
                       <View style={styles.resultIcon}>
                          <Ionicons name={iconName} size={22} color={iconColor} />
                       </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </Animated.View>
        </ScrollView>

        {/* Floating Next Button */}
        {isAnswered && (
          <View style={styles.bottomFloater}>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
              <Text style={styles.nextButtonText}>Image Suivante</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      {renderHeader()}
      <View style={styles.contentArea}>
        {renderQuizContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  
  // Header
  headerContainer: { backgroundColor: '#0f172a', paddingBottom: 10, elevation: 6, zIndex: 10, borderBottomRightRadius: 24, borderBottomLeftRadius: 24 },
  statusBarPlaceholder: { height: Platform.OS === 'ios' ? 48 : StatusBar.currentHeight + 4 },
  navBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 8 },
  
  titleContainer: { alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '800', letterSpacing: 0.5 },
  subHeaderTitle: { color: '#94a3b8', fontSize: 11, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1.2 },

  actionsRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconButton: { width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  iconButtonActive: { backgroundColor: '#fff' },

  scoreBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16, 185, 129, 0.2)', paddingHorizontal: 12, height: 40, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(16, 185, 129, 0.5)' },
  scoreLabel: { fontSize: 10, color: '#6ee7b7', fontWeight: '800', marginRight: 4 },
  scoreValue: { fontSize: 16, color: '#fff', fontWeight: '800' },

  // Filters
  filterBar: { marginTop: 8 },
  filterChip: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#1e293b', marginRight: 8, borderWidth: 1, borderColor: '#334155' },
  filterText: { fontSize: 12, fontWeight: '600', color: '#cbd5e1' },
  filterTextActive: { color: '#0f172a', fontWeight: '700' },

  // Content
  contentArea: { flex: 1 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, color: '#64748b', fontSize: 14, fontWeight: '500' },
  scrollContent: { padding: 16, paddingBottom: 100 },

  // Microscope Card
  microscopeCard: { backgroundColor: '#fff', borderRadius: 20, padding: 12, elevation: 4, marginBottom: 20, shadowColor: '#64748b', shadowOpacity: 0.15, shadowRadius: 10, shadowOffset: {width: 0, height: 4} },
  
  imageHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingHorizontal: 4 },
  
  sampleBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  sampleText: { color: '#fff', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' },
  
  diffBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, borderWidth: 1 },
  diffEasy: { backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' },
  diffMedium: { backgroundColor: '#fffbeb', borderColor: '#fde68a' },
  diffHard: { backgroundColor: '#fef2f2', borderColor: '#fecaca' },
  diffText: { fontSize: 10, fontWeight: '700' },

  imageWrapper: { 
    height: 250, 
    borderRadius: 16, 
    overflow: 'hidden', 
    borderWidth: 1, 
    borderColor: '#e2e8f0',
    backgroundColor: '#000', // Fallback
    position: 'relative'
  },
  microscopeImageBg: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },
  microscopeImageFg: { width: '100%', height: '100%' },
  
  techniqueOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.7)',
      paddingVertical: 6,
      alignItems: 'center'
  },
  techniqueText: { color: '#e2e8f0', fontSize: 11, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },

  missingImage: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f5f9' },

  // Clue
  clueBox: { marginTop: 12, backgroundColor: '#fffbeb', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#fcd34d' },
  clueHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 4, gap: 6 },
  clueTitle: { fontSize: 11, fontWeight: '700', color: '#b45309', textTransform: 'uppercase' },
  clueText: { fontSize: 13, color: '#451a03', lineHeight: 20 },

  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#94a3b8', marginBottom: 12, marginLeft: 4, letterSpacing: 1, textAlign: 'center' },

  // Grid Options
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10 },
  gridCard: { width: '48%', backgroundColor: '#fff', borderRadius: 16, padding: 12, minHeight: 80, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#f1f5f9', elevation: 1 },
  gridText: { fontSize: 13, color: '#334155', fontWeight: '600', textAlign: 'center', lineHeight: 18 },
  resultIcon: { position: 'absolute', top: -8, right: -8, backgroundColor: '#fff', borderRadius: 12 },

  cardCorrect: { backgroundColor: '#ecfdf5', borderColor: '#10b981' },
  textCorrect: { color: '#065f46' },
  cardWrong: { backgroundColor: '#fef2f2', borderColor: '#ef4444' },
  textWrong: { color: '#991b1b' },
  cardDimmed: { opacity: 0.3 },

  // Bottom Button
  bottomFloater: { position: 'absolute', bottom: 24, left: 24, right: 24 },
  nextButton: { flexDirection: 'row', backgroundColor: '#0f172a', paddingVertical: 16, borderRadius: 18, justifyContent: 'center', alignItems: 'center', gap: 10, elevation: 10, shadowColor: '#0f172a', shadowOpacity: 0.4, shadowRadius: 12, shadowOffset: {width: 0, height: 6} },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 0.5 },
});

export default DiagnosticScreen;
