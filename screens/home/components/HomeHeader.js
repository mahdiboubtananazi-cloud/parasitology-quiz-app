import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { CheckCircle, Zap } from '../../../components/Icons';

export default function HomeHeader({ fadeAnim, translateYAnim }) {
  return (
    <Animated.View 
      style={[
        styles.headerContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }]
        }
      ]}
    >
      {/* Top Welcome Badge */}
      <View style={styles.welcomeBadge}>
        <Text style={styles.welcomeText}>👋 Bonjour, Étudiant</Text>
      </View>

      <Text style={styles.headerTitle}>ParaQuiz</Text>
      
      <Text style={styles.headerSubtitle}>
        Votre compagnon ultime pour la parasitologie clinique
      </Text>
      
      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statPill}>
          <CheckCircle size={16} color="#0F766E" />
          <Text style={styles.statText}>Apprentissage</Text>
        </View>
        
        <View style={styles.statDivider} />
        
        <View style={styles.statPill}>
          <Zap size={16} color="#B45309" />
          <Text style={[styles.statText, { color: '#B45309' }]}>Progression</Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10, // مساحة أقل لأننا أزلنا الكارد
    alignItems: 'center', // توسيط كل شيء
  },
  welcomeBadge: {
    backgroundColor: '#E6FFFA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F766E',
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontSize: 42, // أكبر وأجرأ
    fontWeight: '900',
    color: '#1F2937', // أسود فحمي بدلاً من الأخضر للعنوان الرئيسي
    marginBottom: 8,
    letterSpacing: -1.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 24,
    maxWidth: '80%', // لتحديد عرض النص
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    gap: 12,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F766E',
  },
  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#E5E7EB',
  },
});
