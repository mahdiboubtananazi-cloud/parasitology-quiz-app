import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { TrendingUp, Award } from '../../../components/Icons';

export default function FeaturesSection({ 
  onProgressPress, 
  onResultsPress, 
  fadeAnim, 
  slideAnim 
}) {
  return (
    <Animated.View 
      style={[
        styles.featuresSection,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }]
        }
      ]}
    >
      <Text style={styles.featuresSectionTitle}>Statistiques</Text>
      
      <View style={styles.featuresGrid}>
        {/* Progress Widget */}
        <TouchableOpacity
          style={[styles.featureCard, styles.progressCard]}
          activeOpacity={0.9}
          onPress={onProgressPress}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconBox, styles.progressIconBox]}>
              <TrendingUp size={24} color="#0F766E" />
            </View>
            <View style={[styles.badge, styles.progressBadge]}>
              <Text style={styles.badgeText}>Suivi</Text>
            </View>
          </View>
          
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Progression</Text>
            <Text style={styles.cardDesc}>Vos réponses et succès</Text>
          </View>

          {/* Decor Icon in Background */}
          <View style={[styles.bgIcon, { opacity: 0.1 }]}>
             <TrendingUp size={80} color="#0F766E" />
          </View>
        </TouchableOpacity>

        {/* Results Widget */}
        <TouchableOpacity
          style={[styles.featureCard, styles.resultsCard]}
          activeOpacity={0.9}
          onPress={onResultsPress}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconBox, styles.resultsIconBox]}>
              <Award size={24} color="#B45309" />
            </View>
            <View style={[styles.badge, styles.resultsBadge]}>
              <Text style={[styles.badgeText, { color: '#B45309' }]}>Scores</Text>
            </View>
          </View>
          
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Résultats</Text>
            <Text style={styles.cardDesc}>Performance par sujet</Text>
          </View>

           {/* Decor Icon in Background */}
           <View style={[styles.bgIcon, { opacity: 0.1 }]}>
             <Award size={80} color="#B45309" />
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  featuresSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  featuresSectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 16,
    marginLeft: 4,
  },
  featuresGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  featureCard: {
    flex: 1,
    borderRadius: 24,
    padding: 20,
    height: 160,
    justifyContent: 'space-between',
    overflow: 'hidden', // لقص الأيقونة الخلفية
    position: 'relative',
    // ظلال ناعمة
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
  },
  
  // Progress Styles
  progressCard: {
    backgroundColor: '#F0FDFA', // تدرج أخضر فاتح جداً
    borderColor: '#CCFBF1',
  },
  progressIconBox: { backgroundColor: '#CCFBF1' },
  progressBadge: { backgroundColor: '#0F766E' },

  // Results Styles
  resultsCard: {
    backgroundColor: '#FFFBEB', // تدرج أصفر فاتح جداً
    borderColor: '#FEF3C7',
  },
  resultsIconBox: { backgroundColor: '#FEF3C7' },
  resultsBadge: { backgroundColor: '#FEF3C7' }, // هنا نجعل البادج فاتحاً
  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  
  cardContent: {
    zIndex: 1, // ليكون النص فوق الأيقونة الخلفية
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    lineHeight: 16,
  },
  
  // Background Decor
  bgIcon: {
    position: 'absolute',
    right: -20,
    bottom: -20,
    transform: [{ rotate: '-15deg' }],
  },
});
