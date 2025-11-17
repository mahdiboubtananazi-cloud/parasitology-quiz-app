// components/HorizontalFilter.js - الإصلاح النهائي الكامل
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Close = ({ size, color }) => <Ionicons name="close" size={size} color={color} />;
const Check = ({ size, color }) => <Ionicons name="checkmark" size={size} color={color} />;

export default function HorizontalFilter({ 
  visible, 
  onClose, 
  selectedFilters, 
  onApplyFilters, 
  topicLabels 
}) {
  const [tempFilters, setTempFilters] = useState({ topics: [] });

  // ✅ الإصلاح: تحديث tempFilters كلما فتحنا الـ modal أو تغيرت البيانات
  useEffect(() => {
    if (visible) {
      console.log('🔄 HorizontalFilter opened');
      console.log('📋 Received topicLabels:', topicLabels);
      console.log('📋 Available topics:', topicLabels ? Object.keys(topicLabels) : 'NONE');
      
      // إعادة تعيين الفلاتر المؤقتة
      setTempFilters(selectedFilters || { topics: [] });
    }
  }, [visible, topicLabels, selectedFilters]);

  const allTopics = topicLabels ? Object.keys(topicLabels) : [];
  
  const toggleTopic = (topic) => {
    console.log('🔘 Toggling topic:', topic);
    setTempFilters(prev => {
      const topics = prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic];
      console.log('✅ New selection:', topics);
      return { ...prev, topics };
    });
  };

  const handleApply = () => {
    console.log('✅ Applying filters:', tempFilters);
    onApplyFilters(tempFilters);
  };

  const handleReset = () => {
    console.log('🔄 Resetting filters');
    setTempFilters({ topics: [] });
  };

  const handleSelectAll = () => {
    console.log('✅ Selecting all topics:', allTopics);
    setTempFilters({ topics: [...allTopics] });
  };

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filtrer par sujet</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Close size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Sujets disponibles</Text>
            
            {allTopics.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>❌ Aucun sujet disponible</Text>
                <Text style={styles.emptySubtext}>Vérifiez la configuration de la catégorie</Text>
              </View>
            ) : (
              <ScrollView style={styles.topicsScroll} showsVerticalScrollIndicator={false}>
                <View style={styles.topicsGrid}>
                  {allTopics.map(topic => {
                    const isSelected = tempFilters.topics.includes(topic);
                    return (
                      <TouchableOpacity
                        key={topic}
                        style={[
                          styles.topicItem,
                          isSelected && styles.topicItemSelected
                        ]}
                        onPress={() => toggleTopic(topic)}
                      >
                        <Text style={[
                          styles.topicText,
                          isSelected && styles.topicTextSelected
                        ]}>
                          {topicLabels[topic]}
                        </Text>
                        {isSelected && (
                          <Check size={16} color="#004643" />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            )}
          </View>

          <View style={styles.modalActions}>
            <TouchableOpacity 
              style={styles.resetButton} 
              onPress={handleReset}
            >
              <Text style={styles.resetButtonText}>Réinitialiser</Text>
            </TouchableOpacity>
            
            {allTopics.length > 0 && (
              <TouchableOpacity 
                style={styles.selectAllButton} 
                onPress={handleSelectAll}
              >
                <Text style={styles.selectAllButtonText}>Tout sélectionner</Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity 
              style={styles.applyButton} 
              onPress={handleApply}
            >
              <Text style={styles.applyButtonText}>Appliquer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingBottom: 30,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },
  closeButton: {
    padding: 4,
  },
  filterSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  topicsScroll: {
    maxHeight: 400,
  },
  topicsGrid: {
    gap: 10,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  topicItemSelected: {
    backgroundColor: '#E0F2FE',
    borderColor: '#004643',
  },
  topicText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#475569',
    flex: 1,
  },
  topicTextSelected: {
    color: '#004643',
    fontWeight: '600',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
  },
  resetButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#64748B',
  },
  selectAllButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#E0F2FE',
    borderRadius: 12,
    alignItems: 'center',
  },
  selectAllButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0369A1',
  },
  applyButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#004643',
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});