import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Animated,
  Modal,
  ScrollView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// 📊 دالة مساعدة لحساب إحصائيات المحاور
const calculateAxisStats = (mistakes, totalQuestions) => {
  // نفترض أننا نمرر "كل الأسئلة التي تم حلها" وليس فقط الأخطاء للحصول على دقة أكبر
  // لكن للتبسيط الآن، سنحسب بناءً على ما توفر.
  // في المستقبل: يجب تمرير `history` كامل للكويز.
  
  // سنقوم بإنشاء "خريطة ضعف" بناءً على الأخطاء
  const axisWeakness = {};
  mistakes.forEach(m => {
    const axis = m.axis || 'general';
    axisWeakness[axis] = (axisWeakness[axis] || 0) + 1;
  });

  // تحديد أضعف محور
  let weakestAxis = null;
  let maxMistakes = 0;
  Object.keys(axisWeakness).forEach(axis => {
    if (axisWeakness[axis] > maxMistakes) {
      maxMistakes = axisWeakness[axis];
      weakestAxis = axis;
    }
  });

  return { axisWeakness, weakestAxis };
};

// 💡 دالة لتوليد النصيحة الذكية
const getSmartAdvice = (weakestAxis) => {
  if (!weakestAxis) return "Excellent travail sur tous les fronts !";
  
  const adviceMap = {
    morphology: "Révisez les formes (Kystes/Œufs). C'est la base du diagnostic !",
    lifecycle: "Attention aux cycles et aux vecteurs.",
    clinical: "Revoir les symptômes clés et les complications.",
    diagnosis: "Concentrez-vous sur les techniques de labo (EPS, Frottis).",
    treatment: "Attention aux molécules et contre-indications.",
    prelevement: "Le pré-analytique est crucial pour un bon résultat.",
  };
  return adviceMap[weakestAxis] || "Continuez à pratiquer pour vous améliorer.";
};

export default function ResultsScreen({ 
  score, 
  totalQuestions, 
  mistakes = [], 
  onRestart, 
  onGoHome 
}) {
  const [showMistakes, setShowMistakes] = useState(false);
  
  // 🧠 Smart Coach Logic
  const { weakestAxis } = calculateAxisStats(mistakes, totalQuestions);
  const smartAdvice = getSmartAdvice(weakestAxis);
  
  const percentage = Math.round((score / (totalQuestions || 1)) * 100);
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, { toValue: 1, friction: 6, tension: 40, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
  }, []);

  const getResultFeedback = () => {
    if (percentage >= 90) return { msg: 'Maître Absolu !', sub: 'Performance exceptionnelle.', emoji: '👑', color: '#10B981', bg: '#D1FAE5' };
    if (percentage >= 75) return { msg: 'Excellent !', sub: 'Très solide connaissances.', emoji: '🚀', color: '#059669', bg: '#ECFDF5' };
    if (percentage >= 50) return { msg: 'Pas Mal', sub: 'Encore quelques efforts.', emoji: '👍', color: '#D97706', bg: '#FEF3C7' };
    return { msg: 'À Revoir', sub: 'Ne lâchez rien, révisez !', emoji: '📚', color: '#EF4444', bg: '#FEE2E2' };
  };

  const feedback = getResultFeedback();

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.card,
          { opacity: opacityAnim, transform: [{ scale: scaleAnim }] }
        ]}
      >
        {/* Header Badge */}
        <View style={[styles.badgeContainer, { backgroundColor: feedback.bg }]}>
          <Text style={styles.emoji}>{feedback.emoji}</Text>
          <Text style={[styles.badgeText, { color: feedback.color }]}>{feedback.msg}</Text>
        </View>

        {/* Score Big Display */}
        <View style={styles.scoreContainer}>
          <Text style={[styles.percentageText, { color: feedback.color }]}>
            {percentage}%
          </Text>
          <Text style={styles.scoreSubText}>
            {score} / {totalQuestions} Correctes
          </Text>
        </View>

        {/* 🧠 Smart Coach Advice Box */}
        {percentage < 100 && (
          <View style={styles.coachBox}>
            <View style={styles.coachHeader}>
              <Ionicons name="bulb" size={18} color="#F59E0B" />
              <Text style={styles.coachLabel}>Conseil du Coach</Text>
            </View>
            <Text style={styles.coachText}>
              {weakestAxis ? `Point faible détecté : ` : ""}{smartAdvice}
            </Text>
            {weakestAxis && (
              <View style={styles.weaknessTag}>
                <Text style={styles.weaknessText}>{weakestAxis.toUpperCase()}</Text>
              </View>
            )}
          </View>
        )}

        <View style={styles.divider} />

        {/* Mistakes Review Button */}
        {mistakes.length > 0 && (
          <TouchableOpacity 
            style={styles.reviewButton}
            onPress={() => setShowMistakes(true)}
            activeOpacity={0.8}
          >
            <View style={styles.reviewIconBox}>
              <Ionicons name="bug-outline" size={20} color="#EF4444" />
            </View>
            <View style={{flex:1}}>
              <Text style={styles.reviewButtonTitle}>Revoir mes erreurs</Text>
              <Text style={styles.reviewButtonSub}>{mistakes.length} questions à corriger</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </TouchableOpacity>
        )}

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.homeButton} 
            onPress={onGoHome}
            activeOpacity={0.8}
          >
            <Ionicons name="home-outline" size={22} color="#475569" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.retryButton} 
            onPress={onRestart}
            activeOpacity={0.8}
          >
            <Text style={styles.retryText}>Nouveau Quiz</Text>
            <Ionicons name="refresh" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* 🛑 Mistakes Modal (Full Screen & Professional) */}
      <Modal
        visible={showMistakes}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowMistakes(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Analyse des Erreurs</Text>
            <TouchableOpacity onPress={() => setShowMistakes(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Fermer</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.modalScroll}>
            {mistakes.map((mistake, index) => (
              <View key={index} style={styles.mistakeCard}>
                
                {/* Header: Question & Axis */}
                <View style={styles.mistakeHeader}>
                  <View style={[styles.axisTag, { backgroundColor: '#E0F2FE' }]}>
                    <Text style={[styles.axisTagText, { color: '#0284C7' }]}>
                      {mistake.axis || "Général"}
                    </Text>
                  </View>
                  <Text style={styles.mistakeNumber}>Q{index + 1}</Text>
                </View>

                <Text style={styles.mistakeQuestion}>{mistake.question}</Text>
                
                {/* Answers Comparison */}
                <View style={styles.comparisonBox}>
                  {/* Wrong Answer */}
                  <View style={styles.answerItem}>
                    <Ionicons name="close-circle" size={20} color="#EF4444" style={{marginRight:8}} />
                    <Text style={[styles.answerText, { color: '#EF4444', textDecorationLine: 'line-through' }]}>
                      {mistake.userAnswerText || "Temps écoulé"}
                    </Text>
                  </View>

                  {/* Correct Answer */}
                  <View style={styles.answerItem}>
                    <Ionicons name="checkmark-circle" size={20} color="#10B981" style={{marginRight:8}} />
                    <Text style={[styles.answerText, { color: '#059669', fontWeight: '700' }]}>
                      {mistake.correctAnswerText || mistake.options[mistake.correctAnswer]}
                    </Text>
                  </View>
                </View>

                {/* Explanation */}
                {mistake.explanation && (
                  <View style={styles.explanationBox}>
                    <Text style={styles.explanationTitle}>💡 Le Saviez-vous ?</Text>
                    <Text style={styles.explanationText}>{mistake.explanation}</Text>
                  </View>
                )}
              </View>
            ))}
            <View style={{height: 40}} /> 
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9', // Slate-100
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 10,
  },
  
  // Badge Style
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 20,
    gap: 8,
  },
  emoji: { fontSize: 24 },
  badgeText: { fontSize: 16, fontWeight: '800', letterSpacing: 0.5 },

  // Score Style
  scoreContainer: { alignItems: 'center', marginBottom: 24 },
  percentageText: { fontSize: 56, fontWeight: '900', letterSpacing: -2, lineHeight: 60 },
  scoreSubText: { fontSize: 16, color: '#64748B', fontWeight: '600', marginTop: 4 },

  // Smart Coach Box
  coachBox: {
    width: '100%',
    backgroundColor: '#FFFBEB', // Amber-50
    borderWidth: 1,
    borderColor: '#FCD34D',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  coachHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, gap: 6 },
  coachLabel: { fontSize: 13, fontWeight: '800', color: '#B45309', textTransform: 'uppercase' },
  coachText: { fontSize: 14, color: '#92400E', lineHeight: 20, fontStyle: 'italic' },
  weaknessTag: { 
    alignSelf: 'flex-start', 
    backgroundColor: '#FEF3C7', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 4, 
    marginTop: 8 
  },
  weaknessText: { fontSize: 10, fontWeight: '800', color: '#D97706' },

  divider: { width: '100%', height: 1, backgroundColor: '#F1F5F9', marginBottom: 20 },

  // Review Button Style
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 16,
    marginBottom: 24,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  reviewIconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reviewButtonTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B' },
  reviewButtonSub: { fontSize: 12, color: '#64748B', marginTop: 2 },

  // Actions
  actionsContainer: { flexDirection: 'row', width: '100%', gap: 12 },
  homeButton: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  retryButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#0F172A', // Dark Slate
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 5,
  },
  retryText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },

  // Modal Styles
  modalContainer: { flex: 1, backgroundColor: '#F8FAFC' },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  modalTitle: { fontSize: 18, fontWeight: '800', color: '#0F172A' },
  closeButton: { padding: 8, backgroundColor: '#F1F5F9', borderRadius: 8 },
  closeText: { fontSize: 14, fontWeight: '700', color: '#475569' },
  modalScroll: { padding: 20 },
  
  // Mistake Card
  mistakeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
  },
  mistakeHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  axisTag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  axisTagText: { fontSize: 10, fontWeight: '800', textTransform: 'uppercase' },
  mistakeNumber: { fontSize: 12, fontWeight: '700', color: '#CBD5E1' },
  mistakeQuestion: { fontSize: 16, fontWeight: '700', color: '#1E293B', marginBottom: 16, lineHeight: 24 },
  
  comparisonBox: { backgroundColor: '#F8FAFC', borderRadius: 12, padding: 12, gap: 8 },
  answerItem: { flexDirection: 'row', alignItems: 'flex-start' },
  answerText: { fontSize: 14, flex: 1, lineHeight: 20, marginTop: 2 },
  
  explanationBox: { marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  explanationTitle: { fontSize: 12, fontWeight: '800', color: '#64748B', marginBottom: 6, textTransform: 'uppercase' },
  explanationText: { fontSize: 14, color: '#475569', lineHeight: 22 },
});