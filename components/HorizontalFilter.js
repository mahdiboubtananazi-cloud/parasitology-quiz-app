import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Modal, 
  Animated, 
  Dimensions,
  Platform,
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Icon = ({ name, size, color }) => (
  <Ionicons name={name} size={size} color={color} />
);

export default function HorizontalFilter({ 
  visible, 
  onClose, 
  selectedFilters, 
  onApplyFilters, 
  topicLabels, // القديم (Flat)
  topicGroups  // 🔥 الجديد: { "Nématodes": ["ascaris", "oxyure"], ... }
}) {
  const [tempFilters, setTempFilters] = useState({ topics: [] });
  
  const slideAnim = useRef(new Animated.Value(-300)).current; 
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setTempFilters(selectedFilters || { topics: [] });
      Animated.parallel([
        Animated.timing(slideAnim, { toValue: 0, duration: 400, useNativeDriver: true, tension: 60, friction: 8 }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true })
      ]).start();
    } else {
      slideAnim.setValue(-300);
      fadeAnim.setValue(0);
    }
  }, [visible, selectedFilters]);

  // 🔥 منطق تحديد طريقة العرض (مجمعة vs مسطحة)
  const isGrouped = topicGroups && Object.keys(topicGroups).length > 0;
  const flatTopics = topicLabels ? Object.keys(topicLabels) : [];

  const toggleTopic = (topic) => {
    setTempFilters(prev => {
      const currentTopics = prev.topics || [];
      const topics = currentTopics.includes(topic)
        ? currentTopics.filter(t => t !== topic)
        : [...currentTopics, topic];
      return { ...prev, topics };
    });
  };

  const handleApply = () => { onApplyFilters(tempFilters); onClose(); };
  const handleReset = () => { setTempFilters({ topics: [] }); };
  
  const handleSelectAll = () => {
    // Select ALL topics (flattened)
    const all = isGrouped 
      ? Object.values(topicGroups).flat() 
      : flatTopics;
    setTempFilters({ topics: all });
  };

  // 🎨 مكون الرقاقة (Chip) القابل لإعادة الاستخدام
  const FilterChip = ({ topicId }) => {
    const isSelected = tempFilters.topics && tempFilters.topics.includes(topicId);
    const label = topicLabels[topicId] || topicId;
    
    return (
      <TouchableOpacity
        key={topicId}
        style={[styles.chip, isSelected && styles.chipSelected]}
        onPress={() => toggleTopic(topicId)}
        activeOpacity={0.7}
      >
        {isSelected && (
          <View style={styles.checkIcon}>
            <Icon name="checkmark" size={12} color="#FFFFFF" />
          </View>
        )}
        <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose} animationType="none">
      <View style={styles.modalOverlay}>
        <Animated.View style={[styles.backdrop, { opacity: fadeAnim }]}>
          <TouchableOpacity style={{ flex: 1 }} onPress={onClose} activeOpacity={1} />
        </Animated.View>

        <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}>
          
          {/* Header */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Filtres</Text>
              <Text style={styles.modalSubtitle}>Sélectionnez les sujets à réviser</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Icon name="close" size={24} color="#374151" />
            </TouchableOpacity>
          </View>

          {/* 🔥 Content: Grouped or Flat */}
          <ScrollView 
            style={{ maxHeight: 450 }} 
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={true}
          >
            {isGrouped ? (
              // 🅰️ العرض المجمع (Grouped View)
              Object.keys(topicGroups).map((groupName) => (
                <View key={groupName} style={styles.groupContainer}>
                  <Text style={styles.groupTitle}>{groupName}</Text>
                  <View style={styles.topicsContainer}>
                    {topicGroups[groupName].map(topicId => (
                      <FilterChip key={topicId} topicId={topicId} />
                    ))}
                  </View>
                </View>
              ))
            ) : (
              // 🅱️ العرض المسطح (Legacy/Simple View)
              <View style={styles.topicsContainer}>
                {flatTopics.map(topicId => (
                  <FilterChip key={topicId} topicId={topicId} />
                ))}
              </View>
            )}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.leftActions}>
               <TouchableOpacity onPress={handleReset} style={styles.textAction}>
                 <Text style={styles.resetText}>Réinitialiser</Text>
               </TouchableOpacity>
               <View style={styles.divider} />
               <TouchableOpacity onPress={handleSelectAll} style={styles.textAction}>
                 <Text style={styles.selectAllText}>Tout</Text>
               </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.applyButton} onPress={handleApply} activeOpacity={0.8}>
              <Text style={styles.applyButtonText}>
                Appliquer {tempFilters.topics?.length > 0 ? `(${tempFilters.topics.length})` : ''}
              </Text>
              <Icon name="arrow-forward" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.dragHandle} />
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // ... (نفس الستايلات القديمة، مع إضافات جديدة للمجموعات)
  modalOverlay: { flex: 1, justifyContent: 'flex-start' },
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.4)' },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 15 },
  modalTitle: { fontSize: 22, fontWeight: '800', color: '#004643', letterSpacing: -0.5 },
  modalSubtitle: { fontSize: 13, color: '#64748B', marginTop: 2, fontWeight: '500' },
  closeButton: { padding: 8, backgroundColor: '#F1F5F9', borderRadius: 20 },

  // 🔥 ستايلات المجموعات الجديدة
  groupContainer: { marginBottom: 20 },
  groupTitle: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#334155', 
    marginBottom: 10, 
    textTransform: 'uppercase', 
    letterSpacing: 0.8,
    borderLeftWidth: 3,
    borderLeftColor: '#004643',
    paddingLeft: 8
  },

  topicsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8, // أصغر قليلاً
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  chipSelected: { backgroundColor: '#E6FFFA', borderColor: '#004643' },
  checkIcon: { backgroundColor: '#004643', width: 16, height: 16, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginRight: 6 },
  chipText: { fontSize: 13, fontWeight: '600', color: '#64748B' },
  chipTextSelected: { color: '#004643', fontWeight: '700' },

  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  leftActions: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  textAction: { paddingVertical: 5 },
  resetText: { fontSize: 14, fontWeight: '600', color: '#EF4444' },
  selectAllText: { fontSize: 14, fontWeight: '600', color: '#004643' },
  divider: { width: 1, height: 16, backgroundColor: '#CBD5E1' },
  applyButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#004643', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 30, gap: 8, elevation: 4 },
  applyButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  dragHandle: { width: 40, height: 4, backgroundColor: '#E2E8F0', borderRadius: 2, alignSelf: 'center', marginTop: 15 },
});