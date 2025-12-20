import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Animated,
  Modal,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ResultsScreen({ 
  score, 
  totalQuestions, 
  mistakes = [], // ✅ NEW: استقبال الأخطاء
  onRestart, 
  onGoHome 
}) {
  const [showMistakes, setShowMistakes] = useState(false); // ✅ للتحكم في المودال

  const percentage = Math.round((score / (totalQuestions || 1)) * 100);

  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const getResultFeedback = () => {
    if (percentage >= 90) return { msg: 'Excellent !', sub: 'Vous maîtrisez ce sujet.', emoji: '🏆', color: '#10B981' };
    if (percentage >= 70) return { msg: 'Très Bien !', sub: 'Continuez comme ça.', emoji: '🌟', color: '#059669' };
    if (percentage >= 50) return { msg: 'Pas Mal', sub: 'Encore un petit effort.', emoji: '👍', color: '#D97706' };
    return { msg: 'À Revoir', sub: 'Ne lâchez rien !', emoji: '📚', color: '#EF4444' };
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
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{feedback.emoji}</Text>
        </View>

        <View style={[styles.scoreCircle, { borderColor: feedback.color }]}>
          <Text style={[styles.percentageText, { color: feedback.color }]}>
            {percentage}%
          </Text>
          <Text style={styles.scoreText}>
            {score} sur {totalQuestions}
          </Text>
        </View>

        <View style={styles.feedbackContainer}>
          <Text style={[styles.title, { color: feedback.color }]}>
            {feedback.msg}
          </Text>
          <Text style={styles.subtitle}>{feedback.sub}</Text>
        </View>

        <View style={styles.divider} />

        {/* ✅ NEW: زر مراجعة الأخطاء يظهر فقط إذا وجد أخطاء */}
        {mistakes.length > 0 && (
          <TouchableOpacity 
            style={styles.reviewButton}
            onPress={() => setShowMistakes(true)}
            activeOpacity={0.8}
          >
            <Ionicons name="eye-outline" size={20} color="#004643" />
            <Text style={styles.reviewButtonText}>Revoir mes erreurs ({mistakes.length})</Text>
          </TouchableOpacity>
        )}

        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.homeButton} 
            onPress={onGoHome}
            activeOpacity={0.8}
          >
            <Ionicons name="home" size={20} color="#64748B" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.retryButton} 
            onPress={onRestart}
            activeOpacity={0.8}
          >
            <Ionicons name="refresh" size={20} color="#FFFFFF" style={{marginRight: 8}} />
            <Text style={styles.retryText}>Réessayer</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* ✅ NEW: Mistakes Modal */}
      <Modal
        visible={showMistakes}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowMistakes(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Mes Erreurs</Text>
              <TouchableOpacity onPress={() => setShowMistakes(false)} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.modalScroll}>
              {mistakes.map((mistake, index) => (
                <View key={index} style={styles.mistakeCard}>
                  <Text style={styles.mistakeQuestion}>Q{index + 1}. {mistake.question}</Text>
                  
                  {/* إجابة المستخدم الخاطئة */}
                  <View style={[styles.answerRow, styles.wrongAnswerBox]}>
                    <Ionicons name="close-circle" size={18} color="#EF4444" />
                    <Text style={[styles.answerText, { color: '#EF4444' }]}>
                      {mistake.userAnswerText || "Temps écoulé"}
                    </Text>
                  </View>

                  {/* الإجابة الصحيحة */}
                  <View style={[styles.answerRow, styles.correctAnswerBox]}>
                    <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                    <Text style={[styles.answerText, { color: '#065F46' }]}>
                      {mistake.correctAnswerText || mistake.options[mistake.correctAnswer]}
                    </Text>
                  </View>

                  {/* التبرير */}
                  {mistake.explanation && (
                    <View style={styles.explanationBox}>
                      <Text style={styles.explanationLabel}>💡 Explication:</Text>
                      <Text style={styles.explanationText}>{mistake.explanation}</Text>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  emojiContainer: {
    marginBottom: 20,
    backgroundColor: '#F8FAFC',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  emoji: { fontSize: 32 },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  percentageText: { fontSize: 36, fontWeight: '900', letterSpacing: -1 },
  scoreText: { fontSize: 14, color: '#94A3B8', fontWeight: '600', marginTop: 4 },
  feedbackContainer: { alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '800', marginBottom: 6, letterSpacing: 0.5 },
  subtitle: { fontSize: 15, color: '#64748B', fontWeight: '500' },
  divider: { width: '100%', height: 1, backgroundColor: '#E2E8F0', marginBottom: 15 },
  
  // ✅ NEW: زر المراجعة
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6FFFA',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#004643',
    gap: 8,
    width: '100%',
  },
  reviewButtonText: { color: '#004643', fontWeight: '700', fontSize: 14 },

  actionsContainer: { flexDirection: 'row', width: '100%', gap: 12 },
  homeButton: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  retryButton: {
    flex: 1,
    height: 52,
    backgroundColor: '#004643',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  retryText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },

  // ✅ NEW: Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#F3F4F6',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '85%',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: { fontSize: 20, fontWeight: '800', color: '#1F2937' },
  closeButton: { padding: 5 },
  modalScroll: { paddingBottom: 40 },
  mistakeCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  mistakeQuestion: { fontSize: 15, fontWeight: '700', color: '#1F2937', marginBottom: 12, lineHeight: 22 },
  answerRow: { flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 8, marginBottom: 8, gap: 10 },
  wrongAnswerBox: { backgroundColor: '#FEF2F2', borderWidth: 1, borderColor: '#FECACA' },
  correctAnswerBox: { backgroundColor: '#F0FDF4', borderWidth: 1, borderColor: '#BBF7D0' },
  answerText: { fontSize: 13, fontWeight: '600', flex: 1 },
  explanationBox: { marginTop: 8, padding: 10, backgroundColor: '#F9FAFB', borderRadius: 8 },
  explanationLabel: { fontSize: 12, fontWeight: '700', color: '#6B7280', marginBottom: 4 },
  explanationText: { fontSize: 13, color: '#4B5563', lineHeight: 20 },
});
