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
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
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
    const name = item.parasiteName.toLowerCase();
    const family = item.family.toLowerCase();
    if (name.includes('haematobium') || name.includes('vaginalis')) return 'Urines';
    if (name.includes('plasmodium') || name.includes('brucei') || family.includes('blood')) return 'Sang';
    if (name.includes('enterobius') || item.technique.includes('Scotch')) return 'Scotch Test';
    return 'Selles';
  };

  // بيانات الفلاتر المحسنة (مع الأيقونات والألوان)
  const filtersData = [
    { id: 'Tout', label: 'Tout', icon: 'apps', color: '#64748b' },
    { id: 'Selles', label: 'Selles', icon: 'flask', color: '#854d0e' }, // Brown/Gold
    { id: 'Sang', label: 'Sang', icon: 'water', color: '#ef4444' },     // Red
    { id: 'Urines', label: 'Urines', icon: 'beaker', color: '#eab308' }, // Yellow
    { id: 'Scotch Test', label: 'Scotch', icon: 'clipboard', color: '#3b82f6' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      generateNewQuestion('Tout');
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const generateNewQuestion = (filterOverride = activeFilter) => {
    fadeAnim.setValue(0);
    clueAnim.setValue(0); 
    setSelectedOption(null);
    setIsAnswered(false);

    let pool = microscopyAtlas;
    if (filterOverride !== 'Tout') {
      pool = microscopyAtlas.filter(item => getSampleType(item) === filterOverride);
    }

    if (pool.length === 0) {
      pool = microscopyAtlas; 
      if (filterOverride !== 'Tout') {
         Alert.alert("Info", `Pas d'images pour: ${filterOverride}`);
         setActiveFilter('Tout');
      }
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const question = pool[randomIndex];

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
    if (option === currentQuestion.parasiteName) setScore(s => s + 1);
    Animated.timing(clueAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  };

  const handleNextQuestion = () => generateNewQuestion();

  // --- UI Components ---

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

           {/* Score Badge (Integrated, not floating) */}
           <View style={styles.scoreBadge}>
              <Text style={styles.scoreLabel}>PTS</Text>
              <Text style={styles.scoreValue}>{score}</Text>
           </View>
        </View>
      </View>

      {/* 🔽 Professional Filter Bar */}
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
        <Text style={styles.loadingText}>Calibrage du microscope...</Text>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            
            {/* 🔬 Microscope View (Clean & White) */}
            <View style={styles.microscopeCard}>
              <View style={styles.imageHeaderRow}>
                 <View style={[styles.sampleBadge, { backgroundColor: getSampleType(currentQuestion) === 'Sang' ? '#ef4444' : '#f59e0b' }]}>
                    <Text style={styles.sampleText}>{getSampleType(currentQuestion)}</Text>
                 </View>
                 <Text style={styles.techniqueText}>{currentQuestion.technique}</Text>
              </View>

              <View style={styles.imageWrapper}>
                {currentQuestion.image ? (
                  <Image 
                    source={currentQuestion.image} 
                    style={styles.microscopeImage}
                    resizeMode="contain"
                  />
                ) : (
                  <View style={styles.missingImage}>
                     <MaterialCommunityIcons name="microscope" size={48} color="#cbd5e1" />
                     <Text style={{color: '#94a3b8', marginTop: 8}}>Image non disponible</Text>
                  </View>
                )}
              </View>

              {/* Clue Box (Appears smoothly) */}
              {isAnswered && currentQuestion.clue && (
                <Animated.View style={[styles.clueBox, { opacity: clueAnim }]}>
                  <View style={styles.clueHeader}>
                    <MaterialCommunityIcons name="lightbulb-on" size={18} color="#b45309" />
                    <Text style={styles.clueTitle}>Observation Clé</Text>
                  </View>
                  <Text style={styles.clueText}>{currentQuestion.clue}</Text>
                </Animated.View>
              )}
            </View>

            <Text style={styles.sectionTitle}>IDENTIFICATION</Text>

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
                    <Text style={textStyle} numberOfLines={2}>{option}</Text>
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
              <Text style={styles.nextButtonText}>Question Suivante</Text>
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
  container: { flex: 1, backgroundColor: '#f1f5f9' }, // Light Gray Background
  
  // Header
  headerContainer: { backgroundColor: '#0f172a', paddingBottom: 10, elevation: 4, zIndex: 10 },
  statusBarPlaceholder: { height: Platform.OS === 'ios' ? 48 : StatusBar.currentHeight + 4 },
  navBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 8 },
  
  titleContainer: { alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  subHeaderTitle: { color: '#94a3b8', fontSize: 11, fontWeight: '500', textTransform: 'uppercase', letterSpacing: 1 },

  actionsRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconButton: { width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  iconButtonActive: { backgroundColor: '#fff' },

  scoreBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16, 185, 129, 0.15)', paddingHorizontal: 10, height: 40, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(16, 185, 129, 0.4)' },
  scoreLabel: { fontSize: 10, color: '#34d399', fontWeight: '800', marginRight: 4 },
  scoreValue: { fontSize: 16, color: '#fff', fontWeight: '800' },

  // Filters
  filterBar: { marginTop: 4 },
  filterChip: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#fff', marginRight: 8, borderWidth: 1, borderColor: '#e2e8f0', elevation: 1 },
  filterText: { fontSize: 13, fontWeight: '600', color: '#475569' },
  filterTextActive: { color: '#fff' },

  // Content
  contentArea: { flex: 1 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, color: '#64748b' },
  scrollContent: { padding: 16, paddingBottom: 100 },

  // Microscope Card (The Fix)
  microscopeCard: { backgroundColor: '#fff', borderRadius: 20, padding: 16, elevation: 2, marginBottom: 20, borderWidth: 1, borderColor: '#e2e8f0' },
  imageHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  
  sampleBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  sampleText: { color: '#fff', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' },
  techniqueText: { color: '#64748b', fontSize: 12, fontWeight: '500' },

  imageWrapper: { 
    height: 260, 
    backgroundColor: '#f8fafc', // Light Laboratory Gray (NOT BLACK)
    borderRadius: 16, 
    overflow: 'hidden', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#e2e8f0' 
  },
  microscopeImage: { width: '100%', height: '100%' },
  missingImage: { alignItems: 'center' },

  // Clue
  clueBox: { marginTop: 16, backgroundColor: '#fffbeb', padding: 14, borderRadius: 12, borderWidth: 1, borderColor: '#fcd34d' },
  clueHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, gap: 6 },
  clueTitle: { fontSize: 12, fontWeight: '700', color: '#92400e', textTransform: 'uppercase' },
  clueText: { fontSize: 14, color: '#451a03', lineHeight: 22 },

  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#64748b', marginBottom: 12, marginLeft: 4, letterSpacing: 1 },

  // Grid Options
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 },
  gridCard: { width: '48%', backgroundColor: '#fff', borderRadius: 16, padding: 16, minHeight: 85, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#e2e8f0', elevation: 1 },
  gridText: { fontSize: 14, color: '#334155', fontWeight: '600', textAlign: 'center' },
  resultIcon: { position: 'absolute', top: 6, right: 6 },

  cardCorrect: { backgroundColor: '#ecfdf5', borderColor: '#10b981' },
  textCorrect: { color: '#065f46' },
  cardWrong: { backgroundColor: '#fef2f2', borderColor: '#ef4444' },
  textWrong: { color: '#991b1b' },
  cardDimmed: { opacity: 0.4 },

  // Bottom Button
  bottomFloater: { position: 'absolute', bottom: 20, left: 20, right: 20 },
  nextButton: { flexDirection: 'row', backgroundColor: '#0f172a', paddingVertical: 16, borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, elevation: 8, shadowColor: '#3b82f6', shadowOpacity: 0.3, shadowRadius: 10 },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default DiagnosticScreen;
