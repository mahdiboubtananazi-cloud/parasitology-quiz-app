// components/HorizontalFilter.js - الإصدار المصحح نهائياً
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView, Modal, StyleSheet, Dimensions } from 'react-native';
import { X, Filter, RotateCcw, Check } from 'lucide-react-native';

const { height: screenHeight } = Dimensions.get('window');

const HorizontalFilter = ({
  visible,
  onClose,
  selectedFilters,
  onFilterSelect,
  onApplyFilters,
  topicLabels = {
    protozoaires: 'Les protozoaires',
    helminthes: 'Les helminthes', 
    cycle: 'Cycle de vie',
    diagnostic: 'Diagnostic',
    traitement: 'Traitement et prévention',
    general: 'Quiz général'
  }
}) => {
  const [tempFilters, setTempFilters] = useState(selectedFilters);
  // زيادة قيمة الانزلاق لجعل النافذة تنفتح أكثر للأسفل
  const slideAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    if (visible) {
      setTempFilters(selectedFilters);
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 85,
        friction: 8,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleTempFilterSelect = (type, value) => {
    setTempFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value) 
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  // ✅ ✅ ✅ الإصلاح النهائي - تمرير الفلاتر إلى onApplyFilters
  const handleApply = () => {
    console.log('Applying temp filters:', tempFilters);
    
    // ✅ تمرير الفلاتر كمعامل للدالة
    onApplyFilters(tempFilters);
    onClose();
  };

  const resetTempFilters = () => {
    setTempFilters({ difficulty: [], topics: [] });
  };

  const getSelectedCount = () => {
    return tempFilters.difficulty.length + tempFilters.topics.length;
  };

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableOpacity 
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View 
          style={[
            styles.filterPanel,
            { transform: [{ translateY: slideAnim }] }
          ]}
        >
          {/* الهيدر */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Filter size={22} color="#4f46e5" />
              <Text style={styles.title}>Filtres Avancés</Text>
              {getSelectedCount() > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{getSelectedCount()}</Text>
                </View>
              )}
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <X size={24} color="#64748b" />
            </TouchableOpacity>
          </View>

          {/* المحتوى - زيادة الارتفاع ليعرض أكثر */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* مستوى الصعوبة */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Niveau de Difficulté</Text>
              <View style={styles.filtersRow}>
                {[
                  { key: 'easy', label: '🟢 Débutant', emoji: '🟢' },
                  { key: 'medium', label: '🟡 Intermédiaire', emoji: '🟡' },
                  { key: 'hard', label: '🔴 Avancé', emoji: '🔴' }
                ].map(({ key, label, emoji }) => (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.filterCard,
                      tempFilters.difficulty.includes(key) && styles.filterCardSelected
                    ]}
                    onPress={() => handleTempFilterSelect('difficulty', key)}
                  >
                    <Text style={styles.emoji}>{emoji}</Text>
                    <Text style={[
                      styles.filterLabel,
                      tempFilters.difficulty.includes(key) && styles.filterLabelSelected
                    ]}>
                      {label.replace(emoji, '').trim()}
                    </Text>
                    {tempFilters.difficulty.includes(key) && (
                      <Check size={16} color="#4f46e5" style={styles.checkIcon} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* التصنيفات - الفئات الجديدة */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Catégories de Parasitologie</Text>
              <View style={styles.filtersGrid}>
                {Object.entries(topicLabels).map(([key, label]) => (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.topicCard,
                      tempFilters.topics.includes(key) && styles.topicCardSelected
                    ]}
                    onPress={() => handleTempFilterSelect('topics', key)}
                  >
                    <Text style={[
                      styles.topicLabel,
                      tempFilters.topics.includes(key) && styles.topicLabelSelected
                    ]}>
                      {label}
                    </Text>
                    {tempFilters.topics.includes(key) && (
                      <Check size={14} color="#ffffff" style={styles.topicCheck} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* الأزرار */}
          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.resetButton}
              onPress={resetTempFilters}
            >
              <RotateCcw size={18} color="#64748b" />
              <Text style={styles.resetText}>Tout effacer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.applyButton,
                getSelectedCount() === 0 && styles.applyButtonDisabled
              ]}
              onPress={handleApply}
              disabled={getSelectedCount() === 0}
            >
              <Text style={styles.applyText}>
                Appliquer les filtres
              </Text>
              <Text style={styles.applyCount}>({getSelectedCount()})</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  filterPanel: {
    backgroundColor: '#ffffff',
    // تقليل الهامش العلوي لجعل النافذة تظهر أكثر للأسفل
    marginTop: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    // زيادة الارتفاع الأقصى لاستغلال مساحة أكبر من الشاشة
    maxHeight: screenHeight * 0.85, // 85% من ارتفاع الشاشة
    minHeight: screenHeight * 0.6,  // حد أدنى 60% لضمان ظهور المحتوى
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  badge: {
    backgroundColor: '#4f46e5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  closeBtn: {
    padding: 4,
  },
  content: {
    flex: 1,
    padding: 20,
    // زيادة الحشو الداخلي لإعطاء مساحة أكثر
    paddingBottom: 10,
  },
  section: {
    marginBottom: 25, // تقليل الهامش بين الأقسام
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 12, // تقليل الهامش تحت العنوان
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 8, // تقليل المسافة بين الأزرار
  },
  filterCard: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 12, // تقليل الحشو الداخلي
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    minHeight: 80, // ارتفاع ثابت للبطاقات
  },
  filterCardSelected: {
    backgroundColor: '#eff6ff',
    borderColor: '#4f46e5',
  },
  emoji: {
    fontSize: 18, // تصغير حجم الإيموجي
    marginBottom: 6,
  },
  filterLabel: {
    fontSize: 12, // تصغير حجم الخط
    fontWeight: '600',
    color: '#64748b',
    textAlign: 'center',
  },
  filterLabelSelected: {
    color: '#4f46e5',
    fontWeight: '700',
  },
  checkIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  filtersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8, // تقليل المسافة بين بطاقات التصنيفات
  },
  topicCard: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    // جعل البطاقات أصغر لتظهر أكثر في الصف
    minWidth: '30%', // عرض ثابت للبطاقات
    alignItems: 'center',
  },
  topicCardSelected: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  topicLabel: {
    fontSize: 13, // تصغير حجم الخط
    fontWeight: '600',
    color: '#64748b',
    textAlign: 'center',
  },
  topicLabelSelected: {
    color: '#ffffff',
  },
  topicCheck: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  footer: {
    flexDirection: 'row',
    padding: 16, // تقليل حشو الفوتر
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  resetButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  resetText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
  },
  applyButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 12,
    backgroundColor: '#4f46e5',
    borderRadius: 12,
  },
  applyButtonDisabled: {
    backgroundColor: '#cbd5e1',
  },
  applyText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  applyCount: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    opacity: 0.9,
  },
});

export default HorizontalFilter;