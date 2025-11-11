// components/HorizontalFilter.js - النسخة المحسنة
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Modal, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HorizontalFilter({ 
  visible, 
  onClose, 
  selectedFilters, 
  onApplyFilters, 
  topicLabels 
}) {
  const [tempFilters, setTempFilters] = useState([]);
  const slideAnim = React.useRef(new Animated.Value(300)).current;

  // ✅ تحديث tempFilters عند تغيير topicLabels أو selectedFilters
  React.useEffect(() => {
    if (topicLabels) {
      const availableTopics = Object.keys(topicLabels);
      // تصفية selectedFilters لإزالة المواضيع غير الموجودة في الفئة الحالية
      const filtered = (selectedFilters?.topics || []).filter(topic => 
        availableTopics.includes(topic)
      );
      setTempFilters(filtered);
    } else {
      setTempFilters([]);
    }
  }, [topicLabels, selectedFilters]);

  // ✅ Animation عند فتح/إغلاق الفلتر
  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 65,
        friction: 11,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const toggleTopic = (topic) => {
    if (tempFilters.includes(topic)) {
      setTempFilters(tempFilters.filter(t => t !== topic));
    } else {
      setTempFilters([...tempFilters, topic]);
    }
  };

  const handleApply = () => {
    onApplyFilters({ topics: tempFilters });
  };

  const handleReset = () => {
    setTempFilters([]);
    onApplyFilters({ topics: [] });
  };

  const handleSelectAll = () => {
    if (topicLabels) {
      const allTopics = Object.keys(topicLabels);
      setTempFilters(allTopics);
    }
  };

  if (!visible) return null;

  const allTopics = topicLabels ? Object.keys(topicLabels) : [];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View 
          style={[
            styles.modalContent,
            { transform: [{ translateY: slideAnim }] }
          ]}
        >
          <TouchableOpacity 
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Ionicons name="filter" size={24} color="#004643" />
                <Text style={styles.title}>Filtrer par sujet</Text>
              </View>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Counter */}
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>
                {tempFilters.length} sujet{tempFilters.length !== 1 ? 's' : ''} sélectionné{tempFilters.length !== 1 ? 's' : ''}
              </Text>
              <TouchableOpacity onPress={handleSelectAll} style={styles.selectAllButton}>
                <Text style={styles.selectAllText}>Tout sélectionner</Text>
              </TouchableOpacity>
            </View>

            {/* Topics List */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
              {allTopics.map((topic) => {
                const isSelected = tempFilters.includes(topic);
                
                return (
                  <TouchableOpacity
                    key={topic}
                    style={[
                      styles.topicItem,
                      isSelected && styles.topicItemSelected
                    ]}
                    onPress={() => toggleTopic(topic)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.topicContent}>
                      <View style={[
                        styles.checkbox,
                        isSelected && styles.checkboxSelected
                      ]}>
                        {isSelected && (
                          <Ionicons name="checkmark" size={18} color="#fff" />
                        )}
                      </View>
                      <Text style={[
                        styles.topicText,
                        isSelected && styles.topicTextSelected
                      ]}>
                        {topicLabels[topic]}
                      </Text>
                    </View>
                    {isSelected && (
                      <Ionicons name="checkmark-circle" size={20} color="#004643" />
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Footer Buttons */}
            <View style={styles.footer}>
              <TouchableOpacity 
                style={styles.resetButton} 
                onPress={handleReset}
              >
                <Ionicons name="refresh" size={18} color="#666" />
                <Text style={styles.resetButtonText}>Réinitialiser</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={handleApply}
              >
                <Ionicons name="checkmark" size={18} color="#fff" />
                <Text style={styles.applyButtonText}>
                  Appliquer {tempFilters.length > 0 && `(${tempFilters.length})`}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#004643',
  },
  closeButton: {
    padding: 4,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F8F9FA',
  },
  counterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  selectAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
  },
  selectAllText: {
    fontSize: 12,
    color: '#004643',
    fontWeight: '600',
  },
  content: {
    padding: 20,
    maxHeight: 400,
  },
  topicItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  topicItemSelected: {
    backgroundColor: '#E8F5E9',
    borderColor: '#ABD1C6',
  },
  topicContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxSelected: {
    backgroundColor: '#004643',
    borderColor: '#004643',
  },
  topicText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  topicTextSelected: {
    fontWeight: '700',
    color: '#004643',
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#fff',
  },
  resetButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
  },
  resetButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#666',
  },
  applyButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 16,
    backgroundColor: '#004643',
    borderRadius: 12,
  },
  applyButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
});