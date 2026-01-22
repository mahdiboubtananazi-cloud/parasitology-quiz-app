import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// مكون الشريط المتحرك (Animated Bar Component)
const AnimatedProgressBar = ({ score, color, delay }) => {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: score,
      duration: 1000,
      delay: delay, // تأخير متتابع للجمالية
      useNativeDriver: false, // width doesn't support native driver
    }).start();
  }, [score]);

  return (
    <View style={styles.progressBarBg}>
      <Animated.View 
        style={[
          styles.progressBarFill, 
          { 
            width: widthAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%']
            }),
            backgroundColor: color 
          }
        ]} 
      />
    </View>
  );
};

export default function ResultsModal({ 
  visible, 
  onClose, 
  data, 
  loading, 
  animation 
}) {
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
              transform: [{ scale: animation.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) }],
              opacity: animation
            }
          ]}
        >
          {/* Header */}
          <View style={styles.modalHeader}>
            <View style={styles.headerLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#e0f2fe' }]}>
                <Ionicons name="ribbon" size={24} color="#0284c7" />
              </View>
              <View>
                 <Text style={styles.headerTitle}>Bulletin de Notes</Text>
                 <Text style={styles.headerSubtitle}>Détails par catégorie</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={22} color="#64748b" />
            </TouchableOpacity>
          </View>
          
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0284c7" />
              <Text style={styles.loadingText}>Calcul des scores...</Text>
            </View>
          ) : (
            <>
              <View style={styles.resultsContainer}>
                
                {/* Protozoaires */}
                <ResultItem 
                  icon="virus" 
                  iconLib="material"
                  title="Protozoaires" 
                  subtitle="Amibes & Flagellés"
                  score={data?.protozoa || 0} 
                  color="#0F766E" 
                  delay={100}
                />
                
                {/* Helminthes */}
                <ResultItem 
                  icon="snake" 
                  iconLib="material"
                  title="Helminthes" 
                  subtitle="Vers & Larves"
                  score={data?.helminths || 0} 
                  color="#15803d" 
                  delay={200}
                />
                
                {/* Arthropodes */}
                <ResultItem 
                  icon="spider" 
                  iconLib="material"
                  title="Arthropodes" 
                  subtitle="Vecteurs Cliniques"
                  score={data?.arthropods || 0} 
                  color="#b91c1c" 
                  delay={300}
                />

                {/* Techniques (New) */}
                <ResultItem 
                  icon="flask" 
                  iconLib="ion"
                  title="Techniques Labo" 
                  subtitle="Méthodes & Colorations"
                  score={data?.microscopy || 0} // تأكد من الاسم في HomeScreen (microscopy أو techniques)
                  color="#d97706" 
                  delay={400}
                />
              </View>

              <TouchableOpacity style={styles.closeButtonMain} onPress={onClose}>
                <Text style={styles.closeButtonText}>Fermer</Text>
              </TouchableOpacity>
            </>
          )}
        </Animated.View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const ResultItem = ({ icon, iconLib, title, subtitle, score, color, delay }) => {
  const IconComponent = iconLib === 'material' ? MaterialCommunityIcons : Ionicons;
  
  return (
    <View style={styles.resultItem}>
      {/* Icon & Title */}
      <View style={styles.itemHeader}>
         <View style={[styles.itemIcon, { backgroundColor: color + '15' }]}>
            <IconComponent name={icon} size={22} color={color} />
         </View>
         <View style={{flex: 1}}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemSubtitle}>{subtitle}</Text>
         </View>
         <View style={styles.scoreBox}>
            <Text style={[styles.scoreText, { color: color }]}>{score}%</Text>
         </View>
      </View>

      {/* Animated Progress Bar */}
      <AnimatedProgressBar score={score} color={color} delay={delay} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
    justifyContent: 'center', alignItems: 'center', padding: 20, zIndex: 999,
  },
  modalContent: { width: '100%', maxWidth: 360 },
  modalInnerContent: {
    backgroundColor: '#fff', borderRadius: 24, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25, shadowRadius: 25, elevation: 10,
  },
  
  // Header
  modalHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 24, borderBottomWidth: 1, borderBottomColor: '#f1f5f9', backgroundColor: '#fff'
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  iconBox: { width: 44, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#0f172a' },
  headerSubtitle: { fontSize: 12, color: '#64748b', fontWeight: '600', marginTop: 2 },
  closeBtn: { padding: 6, backgroundColor: '#f8fafc', borderRadius: 10 },

  loadingContainer: { padding: 50, alignItems: 'center' },
  loadingText: { marginTop: 12, fontSize: 14, color: '#64748b', fontWeight: '500' },

  // Results List
  resultsContainer: { padding: 24, paddingBottom: 10 },
  
  // Item Styles
  resultItem: { marginBottom: 24 },
  itemHeader: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 10 },
  itemIcon: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  itemTitle: { fontSize: 15, fontWeight: '700', color: '#1e293b' },
  itemSubtitle: { fontSize: 11, color: '#94a3b8', fontWeight: '500', marginTop: 2 },
  
  scoreBox: { backgroundColor: '#f8fafc', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' },
  scoreText: { fontSize: 14, fontWeight: '800' },

  // Progress Bar Styles
  progressBarBg: { height: 8, backgroundColor: '#f1f5f9', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 4 },

  // Main Button
  closeButtonMain: {
    margin: 24, marginTop: 10, backgroundColor: '#0f172a', paddingVertical: 16, borderRadius: 16, alignItems: 'center',
    shadowColor: '#0f172a', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.2, shadowRadius: 8
  },
  closeButtonText: { color: '#fff', fontSize: 15, fontWeight: '700' }
});