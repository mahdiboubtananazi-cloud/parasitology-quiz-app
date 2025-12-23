import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
          <View style={styles.modalHeader}>
            <View style={styles.headerLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#10b981' }]}>
                <Ionicons name="ribbon" size={20} color="#fff" />
              </View>
              <View>
                 <Text style={styles.headerTitle}>Bulletin de Notes</Text>
                 <Text style={styles.headerSubtitle}>Détails par catégorie</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="#64748b" />
            </TouchableOpacity>
          </View>
          
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#10b981" />
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
                />
                
                {/* Helminthes */}
                <ResultItem 
                  icon="snake" // MaterialCommunityIcons has 'snake' which looks like a worm
                  iconLib="material"
                  title="Helminthes" 
                  subtitle="Vers & Larves"
                  score={data?.helminths || 0} 
                  color="#15803d" 
                />
                
                {/* Arthropodes */}
                <ResultItem 
                  icon="spider" 
                  iconLib="material"
                  title="Arthropodes" 
                  subtitle="Vecteurs Cliniques"
                  score={data?.arthropods || 0} 
                  color="#b91c1c" 
                />

                {/* Diagnostic (New) */}
                <ResultItem 
                  icon="microscope" 
                  iconLib="material"
                  title="Diagnostic Lab" 
                  subtitle="Identification Visuelle"
                  score={data?.diagnostic || 0} // You can add this data later
                  color="#3b82f6" 
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

const ResultItem = ({ icon, iconLib, title, subtitle, score, color }) => {
  const IconComponent = iconLib === 'material' ? MaterialCommunityIcons : Ionicons;
  
  return (
    <View style={styles.resultItem}>
      {/* Icon & Title */}
      <View style={styles.itemHeader}>
         <View style={[styles.itemIcon, { backgroundColor: color + '15' }]}>
            <IconComponent name={icon} size={20} color={color} />
         </View>
         <View style={{flex: 1}}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemSubtitle}>{subtitle}</Text>
         </View>
         <Text style={[styles.scoreText, { color: color }]}>{score}%</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarBg}>
         <View 
           style={[
             styles.progressBarFill, 
             { width: `${score}%`, backgroundColor: color }
           ]} 
         />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute', inset: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.6)', // Dark Blue Overlay
    justifyContent: 'center', alignItems: 'center', padding: 20, zIndex: 999,
  },
  modalContent: { width: '100%', maxWidth: 360 },
  modalInnerContent: {
    backgroundColor: '#fff', borderRadius: 20, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2, shadowRadius: 20, elevation: 5,
  },
  
  // Header
  modalHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 20, borderBottomWidth: 1, borderBottomColor: '#f1f5f9', backgroundColor: '#f8fafc'
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBox: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: '#0f172a' },
  headerSubtitle: { fontSize: 11, color: '#64748b', fontWeight: '500' },
  closeBtn: { padding: 4 },

  loadingContainer: { padding: 40, alignItems: 'center' },
  loadingText: { marginTop: 10, fontSize: 12, color: '#94a3b8' },

  // Results List
  resultsContainer: { padding: 20 },
  
  // Item Styles
  resultItem: { marginBottom: 20 },
  itemHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 8 },
  itemIcon: { width: 32, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  itemTitle: { fontSize: 14, fontWeight: '700', color: '#1e293b' },
  itemSubtitle: { fontSize: 11, color: '#94a3b8' },
  scoreText: { fontSize: 14, fontWeight: '800' },

  // Progress Bar Styles
  progressBarBg: { height: 6, backgroundColor: '#f1f5f9', borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 3 },

  // Main Button
  closeButtonMain: {
    margin: 20, marginTop: 0, backgroundColor: '#0f172a', paddingVertical: 14, borderRadius: 12, alignItems: 'center'
  },
  closeButtonText: { color: '#fff', fontSize: 14, fontWeight: '700' }
});
