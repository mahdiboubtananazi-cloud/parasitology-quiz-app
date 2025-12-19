import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Animated 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ResultsScreen({ 
  score, 
  totalQuestions, 
  onRestart, 
  onGoHome 
}) {
  // حساب النسبة المئوية
  // نستخدم (totalQuestions || 1) لتجنب القسمة على صفر
  const percentage = Math.round((score / (totalQuestions || 1)) * 100);

  // أنيميشن الظهور (Card Pop-up)
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

  // تحديد الرسالة واللون والإيموجي حسب النتيجة
  const getResultFeedback = () => {
    if (percentage >= 90) return { 
      msg: 'Excellent !', 
      sub: 'Vous maîtrisez ce sujet.', 
      emoji: '🏆', 
      color: '#10B981' // Green
    };
    if (percentage >= 70) return { 
      msg: 'Très Bien !', 
      sub: 'Continuez comme ça.', 
      emoji: '🌟', 
      color: '#059669' // Teal
    };
    if (percentage >= 50) return { 
      msg: 'Pas Mal', 
      sub: 'Encore un petit effort.', 
      emoji: '👍', 
      color: '#D97706' // Amber
    };
    return { 
      msg: 'À Revoir', 
      sub: 'Ne lâchez rien !', 
      emoji: '📚', 
      color: '#EF4444' // Red
    };
  };

  const feedback = getResultFeedback();

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.card,
          { 
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }] 
          }
        ]}
      >
        {/* Header Icon/Emoji */}
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{feedback.emoji}</Text>
        </View>

        {/* Score Circle */}
        <View style={[styles.scoreCircle, { borderColor: feedback.color }]}>
          <Text style={[styles.percentageText, { color: feedback.color }]}>
            {percentage}%
          </Text>
          <Text style={styles.scoreText}>
            {score} sur {totalQuestions}
          </Text>
        </View>

        {/* Text Feedback */}
        <View style={styles.feedbackContainer}>
          <Text style={[styles.title, { color: feedback.color }]}>
            {feedback.msg}
          </Text>
          <Text style={styles.subtitle}>{feedback.sub}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Actions Buttons */}
        <View style={styles.actionsContainer}>
          {/* زر الصفحة الرئيسية (رمادي فاتح) */}
          <TouchableOpacity 
            style={styles.homeButton} 
            onPress={onGoHome}
            activeOpacity={0.8}
          >
            <Ionicons name="home" size={20} color="#64748B" />
          </TouchableOpacity>

          {/* زر إعادة المحاولة (عريض وملون) */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // يتناسق مع باقي التطبيق
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
    // الظل الفخم
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  
  // Emoji Top
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
  emoji: {
    fontSize: 32,
  },

  // Score Circle
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 6, // سمك الدائرة
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  percentageText: {
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: -1,
  },
  scoreText: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '600',
    marginTop: 4,
  },

  // Feedback Text
  feedbackContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    fontWeight: '500',
  },

  // Divider
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 24,
  },

  // Buttons
  actionsContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
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
    flex: 1, // يأخذ باقي المساحة
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
  retryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
