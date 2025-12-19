import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { Award, X } from '../../../components/Icons';

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
                  outputRange: [0.8, 1]
                })
              }],
              opacity: animation
            }
          ]}
        >
          <View style={styles.modalHeader}>
            <View style={styles.modalHeaderLeft}>
              <View style={[styles.modalIconContainer, { backgroundColor: '#1B5E20' }]}>
                <Award size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.modalTitle}>Résultats par catégorie</Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <X size={24} color="#666" />
            </TouchableOpacity>
          </View>
          
          {loading ? (
            <View style={styles.modalLoadingContainer}>
              <ActivityIndicator size="large" color="#0F766E" />
              <Text style={styles.modalLoadingText}>Chargement des données...</Text>
            </View>
          ) : (
            <>
              <View style={styles.resultsSection}>
                <Text style={styles.resultsSubtitle}>Vos performances actuelles</Text>
                
                <ResultItem 
                  emoji="🦠" 
                  name="Protozoaires" 
                  desc="Organismes unicellulaires" 
                  score={data?.protozoa || 0} 
                  color="#0F766E" 
                />
                
                <ResultItem 
                  emoji="🪱" 
                  name="Helminthes" 
                  desc="Vers parasitaires" 
                  score={data?.helminths || 0} 
                  color="#1B5E20" 
                />
                
                <ResultItem 
                  emoji="🦟" 
                  name="Arthropodes" 
                  desc="Vecteurs et ectoparasites" 
                  score={data?.arthropods || 0} 
                  color="#B71C1C" 
                />
              </View>

              <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                <Text style={styles.modalButtonText}>Fermer</Text>
              </TouchableOpacity>
            </>
          )}
        </Animated.View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const ResultItem = ({ emoji, name, desc, score, color }) => (
  <View style={[styles.resultItem, { borderLeftColor: color }]}>
    <View style={styles.resultLeft}>
      <Text style={styles.resultEmoji}>{emoji}</Text>
      <View>
        <Text style={styles.resultCategory}>{name}</Text>
        <Text style={styles.resultDesc}>{desc}</Text>
      </View>
    </View>
    <View style={styles.resultScoreContainer}>
      <Text style={[styles.resultScore, { color: color }]}>{score}%</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center', alignItems: 'center', padding: 20, zIndex: 1000,
  },
  modalContent: { width: '100%', maxWidth: 420 },
  modalInnerContent: {
    backgroundColor: 'white', borderRadius: 24, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25, shadowRadius: 30, elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 20, borderBottomWidth: 1, borderBottomColor: '#F5F5F5',
  },
  modalHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  modalIconContainer: {
    width: 40, height: 40, borderRadius: 10,
    justifyContent: 'center', alignItems: 'center',
  },
  modalTitle: { fontSize: 18, fontWeight: '700', color: '#1F2937' },
  modalLoadingContainer: { padding: 40, alignItems: 'center', justifyContent: 'center' },
  modalLoadingText: { marginTop: 12, fontSize: 16, color: '#666666', textAlign: 'center' },
  resultsSection: { padding: 20 },
  resultsSubtitle: { fontSize: 16, fontWeight: '600', color: '#1F2937', marginBottom: 20 },
  resultItem: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 14, paddingLeft: 14, paddingRight: 0, marginBottom: 12,
    backgroundColor: '#FAFAFA', borderRadius: 12, borderLeftWidth: 4,
  },
  resultLeft: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 },
  resultEmoji: { fontSize: 28 },
  resultCategory: { fontSize: 15, color: '#1F2937', fontWeight: '700', lineHeight: 20 },
  resultDesc: { fontSize: 12, color: '#9CA3AF', fontWeight: '500' },
  resultScoreContainer: { paddingRight: 16 },
  resultScore: { fontSize: 20, fontWeight: '800' },
  modalButton: {
    backgroundColor: '#0F766E', margin: 20, paddingVertical: 14, borderRadius: 12,
    alignItems: 'center', shadowColor: '#0F766E', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 3,
  },
  modalButtonText: { color: 'white', fontSize: 16, fontWeight: '700' },
});
