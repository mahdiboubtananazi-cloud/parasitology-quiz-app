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
  ImageBackground 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { microscopyAtlas } from '../data/microscopyAtlas';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showClue, setShowClue] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // --- 🎓 Logic: Academic Lab Filter ---
  const getLabCategory = (item) => {
    // 1. Artefacts
    if (item.family && item.family.includes('Artefact')) return 'Artefacts';
    
    // 2. Sang (Malaria, Filaire, Trypano)
    if (item.family && (item.family.includes('Palu') || item.family.includes('Sang') || item.family.includes('Filaire') || item.family.includes('Tissulaire'))) return 'Sang';
    
    // 3. Urines / Génital (Schisto Haem, Tricho)
    if (item.parasiteName.includes('haematobium') || item.parasiteName.includes('Trichomonas')) return 'Urines/Divers';
    
    // 4. Selles (Tout le reste : Amibes, Helminthes, Coccidies...)
    return 'Selles';
  };

  // 🧪 الفلاتر الأكاديمية الجديدة
  const filtersData = [
    { id: 'Tout', label: 'Tout', icon: 'apps', color: '#64748b' },
    { id: 'Selles', label: 'Selles (Copro)', icon: 'flask', color: '#854d0e' }, // Gold/Brown
    { id: 'Sang', label: 'Sang (Hémato)', icon: 'water', color: '#ef4444' },     // Red
    { id: 'Urines/Divers', label: 'Urines/Divers', icon: 'beaker', color: '#eab308' }, // Yellow
    { id: 'Artefacts', label: 'Artefacts (Pièges)', icon: 'alert-circle', color: '#64748b' }, // Grey
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      generateNewQuestion('Tout');
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const generateNewQuestion = (filterOverride = activeFilter) => {
    fadeAnim.setValue(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowClue(false); 

    let pool = microscopyAtlas;
    if (filterOverride !== 'Tout') {
      pool = microscopyAtlas.filter(item => getLabCategory(item) === filterOverride);
    }

    if (pool.length === 0) {
      if (filterOverride !== 'Tout') {
         Alert.alert("Info", `Pas d'images disponibles pour: ${filterOverride}`);
         setActiveFilter('Tout');
         pool = microscopyAtlas;
      }
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const question = pool[randomIndex];

    // ✅ FIX: ضمان وجود الإجابة الصحيحة ضمن الخيارات
    let finalOptions = [];
    if (question.options && question.options.length > 0) {
      // هل الإجابة الصحيحة موجودة في المصفوفة؟
      if (!question.options.includes(question.parasiteName)) {
        // إذا لم تكن موجودة (خطأ في البيانات)، نضيفها قسراً
        finalOptions = [question.parasiteName, ...question.options.slice(0, 3)];
      } else {
        finalOptions = [...question.options];
      }
    } else {
      // Fallback
      const randomDistractors = microscopyAtlas
        .filter(i => i.id !== question.id)
        .slice(0, 3)
        .map(i => i.parasiteName);
      finalOptions = [question.parasiteName, ...randomDistractors];
    }
    
    // خلط الخيارات
    finalOptions = finalOptions.sort(() => Math.random() - 0.5);

    setCurrentQuestion(question);
    setShuffledOptions(finalOptions);

    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
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
    
    setTotalAnswered(t => t + 1);
    const isCorrect = option === currentQuestion.parasiteName;
    if (isCorrect) {
        setCorrectCount(c => c + 1);
    }
    setShowClue(true);
  };

  const handleNextQuestion = () => generateNewQuestion();

  // --- UI Renderers ---

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.statusBarPlaceholder} />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
           <Text style={styles.headerTitle}>Labo-Vision</Text>
           <Text style={styles.subHeaderTitle}>Diagnostic Microscopique</Text>
        </View>

        <View style={styles.actionsRow}>
           <TouchableOpacity 
             style={[styles.iconButton, showFilters && styles.iconButtonActive]} 
             onPress={toggleFilterBar}
           >
             <Ionicons name="filter" size={20} color={showFilters ? "#0f172a" : "#fff"} />
           </TouchableOpacity>
           
           <View style={styles.scoreBadge}>
              <Text style={styles.scoreValue}>{correctCount}/{totalAnswered}</Text>
           </View>
        </View>
      </View>

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
                  <Ionicons name={cat.icon} size={14} color={isActive ? "#fff" : cat.color} style={{marginRight: 6}} />
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
        <Text style={styles.loadingText}>Mise au point...</Text>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Animated.View style={{ opacity: fadeAnim }}>
            
            {/* 🔬 Medical Report Card */}
            <View style={styles.reportCard}>
              
              <View style={styles.imageFrame}>
                {currentQuestion.image ? (
                  <ImageBackground 
                    source={currentQuestion.image} 
                    style={styles.microscopeImageBg}
                    blurRadius={Platform.OS === 'ios' ? 10 : 5}
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
                  </View>
                )}
              </View>

              <View style={styles.techHeader}>
                 <View style={styles.techItem}>
                    <Text style={styles.techLabel}>COLORATION</Text>
                    <Text style={styles.techValue}>{currentQuestion.stain || "N/A"}</Text>
                 </View>
                 <View style={styles.verticalDivider} />
                 <View style={styles.techItem}>
                    <Text style={styles.techLabel}>OBJECTIF</Text>
                    <Text style={styles.techValue}>{currentQuestion.magnification || "x40"}</Text>
                 </View>
                 
                 {!isAnswered && (
                    <TouchableOpacity 
                        style={styles.simpleHintButton} 
                        onPress={() => {
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                            setShowClue(!showClue);
                        }}
                    >
                        <MaterialCommunityIcons name={showClue ? "eye-off" : "eye"} size={18} color="#475569" />
                        <Text style={styles.simpleHintText}>
                            {showClue ? "Masquer" : "Indice"}
                        </Text>
                    </TouchableOpacity>
                 )}
              </View>

              {showClue && currentQuestion.clue && (
                <View style={styles.clueBox}>
                  <Text style={styles.clueTitle}>OBSERVATION CLÉ :</Text>
                  <Text style={styles.clueText}>{currentQuestion.clue}</Text>
                </View>
              )}
            </View>

            <View style={styles.sectionHeader}>
                <View style={styles.sectionLine} />
                <Text style={styles.sectionTitle}>IDENTIFICATION</Text>
                <View style={styles.sectionLine} />
            </View>

            {/* Grid Options */}
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
                    // ✅ الإجابة الصحيحة دائماً خضراء
                    cardStyle = [styles.gridCard, styles.cardCorrect];
                    textStyle = [styles.gridText, styles.textCorrect];
                    borderColor = '#10b981';
                    iconName = "check-circle";
                    iconColor = "#10b981";
                  } else if (isSelected) {
                    // ❌ إجابتك الخاطئة حمراء
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
                   cardStyle = [styles.gridCard, {backgroundColor: '#eff6ff'}];
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
                    {isAnswered && (iconName && (isSelected || isCorrectAnswer)) && (
                       <View style={styles.resultIcon}>
                          <MaterialCommunityIcons name={iconName} size={20} color={iconColor} />
                       </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </Animated.View>
        </ScrollView>

        {isAnswered && (
          <View style={styles.bottomFloater}>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
              <Text style={styles.nextButtonText}>Cas Suivant</Text>
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

// 🎨 Same Styles as before (Optimized)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  headerContainer: { backgroundColor: '#0f172a', paddingBottom: 12, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, elevation: 4 },
  statusBarPlaceholder: { height: Platform.OS === 'ios' ? 48 : StatusBar.currentHeight + 4 },
  navBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 10 },
  titleContainer: { alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '700', letterSpacing: 0.5 },
  subHeaderTitle: { color: '#94a3b8', fontSize: 10, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1 },
  actionsRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconButton: { width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center' },
  iconButtonActive: { backgroundColor: '#fff' },
  scoreBadge: { backgroundColor: 'rgba(255,255,255,0.15)', paddingHorizontal: 12, height: 36, borderRadius: 10, justifyContent: 'center' },
  scoreValue: { fontSize: 14, color: '#fff', fontWeight: '700', fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace' },
  filterBar: { marginTop: 4 },
  filterChip: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, backgroundColor: '#1e293b', marginRight: 8, borderWidth: 1, borderColor: '#334155' },
  filterText: { fontSize: 11, fontWeight: '600', color: '#cbd5e1' },
  filterTextActive: { color: '#0f172a', fontWeight: '700' },
  contentArea: { flex: 1 },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, color: '#64748b', fontSize: 14, fontWeight: '600' },
  scrollContent: { padding: 16, paddingBottom: 100 },
  reportCard: { backgroundColor: '#fff', borderRadius: 24, marginBottom: 20, overflow: 'hidden', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, shadowOffset: {width: 0, height: 4} },
  imageFrame: { height: 280, backgroundColor: '#e2e8f0', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
  microscopeImageBg: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },
  microscopeImageFg: { width: '100%', height: '100%' },
  missingImage: { opacity: 0.5 },
  techHeader: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 12, paddingHorizontal: 16, borderTopWidth: 1, borderTopColor: '#f1f5f9' },
  techItem: { flex: 1 },
  techLabel: { fontSize: 9, color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' },
  techValue: { fontSize: 13, color: '#334155', fontWeight: '700' },
  verticalDivider: { width: 1, height: 20, backgroundColor: '#e2e8f0', marginHorizontal: 12 },
  simpleHintButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 6 },
  simpleHintText: { color: '#475569', fontSize: 11, fontWeight: '700' },
  clueBox: { padding: 16, backgroundColor: '#f8fafc', borderTopWidth: 1, borderTopColor: '#f1f5f9' },
  clueTitle: { fontSize: 10, fontWeight: '800', color: '#64748b', marginBottom: 4, textTransform: 'uppercase' },
  clueText: { fontSize: 13, color: '#334155', lineHeight: 20 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  sectionLine: { flex: 1, height: 1, backgroundColor: '#cbd5e1' },
  sectionTitle: { fontSize: 11, fontWeight: '700', color: '#64748b', marginHorizontal: 10, letterSpacing: 1 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 },
  gridCard: { width: '48%', backgroundColor: '#fff', borderRadius: 16, padding: 14, minHeight: 70, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#e2e8f0', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 2, shadowOffset: {width: 0, height: 2} },
  gridText: { fontSize: 13, color: '#334155', fontWeight: '600', textAlign: 'center', lineHeight: 18 },
  resultIcon: { position: 'absolute', top: 6, right: 6 },
  cardCorrect: { backgroundColor: '#f0fdf4', borderColor: '#10b981' },
  textCorrect: { color: '#15803d' },
  cardWrong: { backgroundColor: '#fef2f2', borderColor: '#ef4444' },
  textWrong: { color: '#b91c1c' },
  cardDimmed: { opacity: 0.5 },
  bottomFloater: { position: 'absolute', bottom: 24, left: 24, right: 24 },
  nextButton: { flexDirection: 'row', backgroundColor: '#0f172a', paddingVertical: 16, borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, shadowColor: '#0f172a', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: {width: 0, height: 6} },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 0.5 },
});

export default DiagnosticScreen;