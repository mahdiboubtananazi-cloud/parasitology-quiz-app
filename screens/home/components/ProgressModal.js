import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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
        duration: 1200, // Slightly slower for elegance
        delay: 100,
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
            styles.cardContainer,
            {
              transform: [{ scale: animation.interpolate({ inputRange: [0, 1], outputRange: [0.9, 1] }) }],
              opacity: animation
            }
          ]}
        >
          {/* Header with Pattern */}
          <View style={styles.header}>
            <View style={styles.headerPattern}>
               <MaterialCommunityIcons name="microscope" size={120} color="rgba(255,255,255,0.05)" style={styles.bgIcon} />
            </View>
            <View style={styles.headerContent}>
               <View>
                 <Text style={styles.headerEyebrow}>ANALYSE DE PERFORMANCE</Text>
                 <Text style={styles.headerTitle}>Votre Progression</Text>
               </View>
               <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                 <Ionicons name="close" size={20} color="#fff" />
               </TouchableOpacity>
            </View>
          </View>
          
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#004643" />
              <Text style={styles.loadingText}>Calcul des données...</Text>
            </View>
          ) : (
            <View style={styles.body}>
              
              {/* Main Score Hero */}
              <View style={styles.heroSection}>
                <View style={styles.ringContainer}>
                   {/* Background Ring */}
                   <View style={styles.ringBg} />
                   {/* Value */}
                   <View style={styles.ringInner}>
                      <Text style={styles.heroNumber}>{data?.percentage || 0}<Text style={styles.percent}>%</Text></Text>
                      <Text style={styles.heroLabel}>MAÎTRISE</Text>
                   </View>
                </View>
                <View style={styles.heroTextContainer}>
                   <Text style={styles.heroTitleText}>Niveau Actuel</Text>
                   <Text style={styles.heroDesc}>
                     Vous avez complété {data?.answered || 0} exercices avec succès. Continuez ainsi !
                   </Text>
                </View>
              </View>

              {/* Stats Grid */}
              <View style={styles.grid}>
                {/* Total */}
                <View style={styles.gridItem}>
                   <View style={[styles.iconBox, {backgroundColor: '#e0f2fe'}]}>
                      <Ionicons name="layers" size={20} color="#0284c7" />
                   </View>
                   <Text style={styles.gridValue}>{data?.answered || 0}</Text>
                   <Text style={styles.gridLabel}>Total</Text>
                </View>

                {/* Correct */}
                <View style={styles.gridItem}>
                   <View style={[styles.iconBox, {backgroundColor: '#dcfce7'}]}>
                      <Ionicons name="checkmark-done" size={20} color="#16a34a" />
                   </View>
                   <Text style={styles.gridValue}>{data?.correct || 0}</Text>
                   <Text style={styles.gridLabel}>Correct</Text>
                </View>

                {/* Rank */}
                <View style={styles.gridItem}>
                   <View style={[styles.iconBox, {backgroundColor: '#fef3c7'}]}>
                      <MaterialCommunityIcons name="star" size={20} color="#d97706" />
                   </View>
                   <Text style={styles.gridValue}>{(data?.percentage || 0) >= 80 ? 'A+' : (data?.percentage || 0) >= 50 ? 'B' : 'C'}</Text>
                   <Text style={styles.gridLabel}>Rang</Text>
                </View>
              </View>

              {/* Animated Bar */}
              <View style={styles.barContainer}>
                 <View style={styles.barHeader}>
                    <Text style={styles.barTitle}>Objectif Quotidien</Text>
                    <Text style={styles.barValue}>{data?.percentage || 0}/100</Text>
                 </View>
                 <View style={styles.track}>
                    <Animated.View 
                      style={[
                        styles.fill, 
                        { width: progressAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }
                      ]} 
                    />
                 </View>
              </View>

              <TouchableOpacity style={styles.btn} onPress={onClose} activeOpacity={0.9}>
                <Text style={styles.btnText}>Continuer l'entraînement</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
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
    backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', // Blur works on some versions
    justifyContent: 'center', alignItems: 'center', padding: 20, zIndex: 999,
  },
  modalContent: { width: '100%', maxWidth: 360 },
  
  cardContainer: {
    backgroundColor: '#fff', borderRadius: 24, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.25, shadowRadius: 25, elevation: 15,
  },

  // Header Style (Medical Dark Green)
  header: {
    backgroundColor: '#004643', padding: 24, position: 'relative', overflow: 'hidden',
  },
  headerPattern: { position: 'absolute', right: -20, top: -20 },
  bgIcon: { transform: [{rotate: '15deg'}] },
  headerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  headerEyebrow: { color: '#ccfbf1', fontSize: 10, fontWeight: '700', letterSpacing: 1.2, marginBottom: 6 },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: '800' },
  closeButton: { padding: 6, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 12 },

  loadingContainer: { padding: 50, alignItems: 'center' },
  loadingText: { marginTop: 12, color: '#64748b', fontSize: 14, fontWeight: '500' },

  body: { padding: 24 },

  // Hero Section
  heroSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 30, gap: 20 },
  ringContainer: { width: 84, height: 84, justifyContent: 'center', alignItems: 'center' },
  ringBg: { 
    position: 'absolute', width: '100%', height: '100%', borderRadius: 42, 
    borderWidth: 6, borderColor: '#f0fdfa' 
  },
  ringInner: { alignItems: 'center' },
  heroNumber: { fontSize: 24, fontWeight: '900', color: '#004643' },
  percent: { fontSize: 14, fontWeight: '700' },
  heroLabel: { fontSize: 8, fontWeight: '800', color: '#0f766e', marginTop: 2 },
  
  heroTextContainer: { flex: 1 },
  heroTitleText: { fontSize: 16, fontWeight: '800', color: '#1e293b', marginBottom: 4 },
  heroDesc: { fontSize: 13, color: '#64748b', lineHeight: 18 },

  // Grid
  grid: { flexDirection: 'row', gap: 12, marginBottom: 30 },
  gridItem: { 
    flex: 1, backgroundColor: '#f8fafc', padding: 12, borderRadius: 16, 
    alignItems: 'center', borderWidth: 1, borderColor: '#e2e8f0' 
  },
  iconBox: { width: 36, height: 36, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  gridValue: { fontSize: 16, fontWeight: '800', color: '#0f172a' },
  gridLabel: { fontSize: 10, fontWeight: '600', color: '#64748b', marginTop: 2, textTransform: 'uppercase' },

  // Progress Bar
  barContainer: { marginBottom: 24 },
  barHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  barTitle: { fontSize: 12, fontWeight: '700', color: '#334155' },
  barValue: { fontSize: 12, fontWeight: '700', color: '#004643' },
  track: { height: 10, backgroundColor: '#f1f5f9', borderRadius: 5, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#004643', borderRadius: 5 },

  // Button
  btn: {
    backgroundColor: '#004643', paddingVertical: 16, borderRadius: 16,
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8,
    shadowColor: '#004643', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5
  },
  btnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
});