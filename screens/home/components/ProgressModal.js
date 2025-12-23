import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // استخدام المكتبات الموجودة

export default function ProgressModal({ 
  visible, 
  onClose, 
  data, 
  loading, 
  animation 
}) {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible && !loading) {
      Animated.timing(progressAnim, {
        toValue: data?.percentage || 0,
        duration: 1000,
        delay: 200,
        useNativeDriver: false
      }).start();
    } else {
      progressAnim.setValue(0);
    }
  }, [visible, loading, data]);

  if (!visible) return null;

  return (
    <TouchableOpacity 
      style={styles.modalOverlay}
      activeOpacity={1}
      onPress={onClose}
    >
      <TouchableOpacity 
        style={styles.modalContent}
        activeOpacity={1}
        onPress={(e) => e.stopPropagation()}
      >
        <Animated.View 
          style={[
            styles.modalInnerContent,
            {
              transform: [{
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1]
                })
              }],
              opacity: animation
            }
          ]}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerTitleContainer}>
               <Text style={styles.headerEyebrow}>RAPPORT D'APPRENTISSAGE</Text>
               <Text style={styles.headerTitle}>Statistiques Globales</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={20} color="#374151" />
            </TouchableOpacity>
          </View>
          
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#0F766E" />
              <Text style={styles.loadingText}>Analyse des données...</Text>
            </View>
          ) : (
            <View style={styles.contentContainer}>
              
              {/* Main Score */}
              <View style={styles.scoreOverview}>
                <View style={styles.scoreCircle}>
                  <Text style={styles.scoreBigNumber}>{data?.percentage || 0}%</Text>
                  <Text style={styles.scoreLabel}>Précision</Text>
                </View>
                <View style={styles.scoreContext}>
                  <Text style={styles.contextTitle}>Performance Générale</Text>
                  <Text style={styles.contextDesc}>
                    Basé sur {data?.answered || 0} questions répondues au total.
                  </Text>
                </View>
              </View>

              {/* Data Grid */}
              <View style={styles.statsGrid}>
                {/* Total Answered */}
                <View style={styles.statBox}>
                  <View style={[styles.iconBadge, { backgroundColor: '#E0F2FE' }]}>
                    <Ionicons name="stats-chart" size={18} color="#0284C7" />
                  </View>
                  <Text style={styles.boxValue}>{data?.answered || 0}</Text>
                  <Text style={styles.boxLabel}>Questions</Text>
                </View>

                {/* Correct Answers */}
                <View style={styles.statBox}>
                  <View style={[styles.iconBadge, { backgroundColor: '#DCFCE7' }]}>
                    <Ionicons name="checkmark-circle" size={18} color="#16A34A" />
                  </View>
                  <Text style={styles.boxValue}>{data?.correct || 0}</Text>
                  <Text style={styles.boxLabel}>Correctes</Text>
                </View>

                {/* Efficiency Rate (Level) */}
                <View style={styles.statBox}>
                  <View style={[styles.iconBadge, { backgroundColor: '#FEF3C7' }]}>
                    <MaterialCommunityIcons name="lightning-bolt" size={18} color="#D97706" />
                  </View>
                  <Text style={styles.boxValue}>{(data?.percentage || 0) >= 80 ? 'A' : (data?.percentage || 0) >= 50 ? 'B' : 'C'}</Text>
                  <Text style={styles.boxLabel}>Niveau</Text>
                </View>
              </View>

              {/* Progress Bar */}
              <View style={styles.progressSection}>
                <View style={styles.progressLabels}>
                   <Text style={styles.progressTitle}>Taux de Complétion</Text>
                   <Text style={styles.progressValue}>{data?.percentage || 0}/100</Text>
                </View>
                <View style={styles.track}>
                   <Animated.View 
                     style={[
                       styles.fill, 
                       { 
                         width: progressAnim.interpolate({
                           inputRange: [0, 100],
                           outputRange: ['0%', '100%']
                         }) 
                       }
                     ]} 
                   />
                </View>
              </View>

              <TouchableOpacity style={styles.actionButton} onPress={onClose}>
                <Text style={styles.actionButtonText}>FERMER LE RAPPORT</Text>
              </TouchableOpacity>

            </View>
          )}
        </Animated.View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(17, 24, 39, 0.6)',
    justifyContent: 'center', alignItems: 'center', padding: 16, zIndex: 1000,
  },
  modalContent: { width: '100%', maxWidth: 380 },
  modalInnerContent: {
    backgroundColor: '#FFFFFF', borderRadius: 16, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2, shadowRadius: 20, elevation: 10,
  },
  
  // Header
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',
    padding: 20, borderBottomWidth: 1, borderBottomColor: '#F3F4F6',
    backgroundColor: '#FAFAFA',
  },
  headerEyebrow: {
    fontSize: 10, fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4,
  },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  closeButton: { padding: 4, backgroundColor: '#F3F4F6', borderRadius: 20 },

  loadingContainer: { padding: 40, alignItems: 'center' },
  loadingText: { marginTop: 10, fontSize: 13, color: '#6B7280' },

  contentContainer: { padding: 24 },

  // Overview Section
  scoreOverview: { flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 30 },
  scoreCircle: {
    width: 80, height: 80, borderRadius: 40, borderWidth: 4, borderColor: '#0F766E',
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0FDFA',
  },
  scoreBigNumber: { fontSize: 20, fontWeight: '900', color: '#0F766E' },
  scoreLabel: { fontSize: 9, fontWeight: '600', color: '#0F766E', textTransform: 'uppercase' },
  
  scoreContext: { flex: 1 },
  contextTitle: { fontSize: 16, fontWeight: '700', color: '#374151', marginBottom: 4 },
  contextDesc: { fontSize: 13, color: '#6B7280', lineHeight: 18 },

  // Grid Stats
  statsGrid: { flexDirection: 'row', gap: 12, marginBottom: 30 },
  statBox: {
    flex: 1, backgroundColor: '#F9FAFB', borderRadius: 12, padding: 12,
    alignItems: 'center', borderWidth: 1, borderColor: '#F3F4F6',
  },
  iconBadge: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  boxValue: { fontSize: 18, fontWeight: '800', color: '#1F2937' },
  boxLabel: { fontSize: 10, color: '#6B7280', fontWeight: '600', textTransform: 'uppercase', marginTop: 2 },

  // Progress Bar
  progressSection: { marginBottom: 24 },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressTitle: { fontSize: 13, fontWeight: '600', color: '#374151' },
  progressValue: { fontSize: 13, fontWeight: '700', color: '#0F766E' },
  track: { height: 8, backgroundColor: '#F3F4F6', borderRadius: 4, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#0F766E', borderRadius: 4 },

  // Button
  actionButton: {
    backgroundColor: '#1F2937', paddingVertical: 14, borderRadius: 10, alignItems: 'center',
  },
  actionButtonText: { color: '#FFFFFF', fontSize: 13, fontWeight: '700', letterSpacing: 0.5 },
});
