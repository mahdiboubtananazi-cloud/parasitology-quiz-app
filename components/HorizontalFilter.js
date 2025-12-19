import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Modal, 
  Animated, 
  Dimensions,
  Platform 
} from 'react-native';
// تأكد من أن مسار الأيقونات صحيح (حسب ملفك)
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// مكون أيقونة بسيط للاستخدام الداخلي
const Icon = ({ name, size, color }) => (
  <Ionicons name={name} size={size} color={color} />
);

export default function HorizontalFilter({ 
  visible, 
  onClose, 
  selectedFilters, 
  onApplyFilters, 
  topicLabels 
}) {
  const [tempFilters, setTempFilters] = useState({ topics: [] });
  
  // قيم الحركة (Animation Values)
  const slideAnim = useRef(new Animated.Value(-300)).current; // يبدأ مخفياً في الأعلى
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // منطق الحركة عند الفتح والإغلاق
  useEffect(() => {
    if (visible) {
      // 1. إعادة تعيين الفلاتر
      setTempFilters(selectedFilters || { topics: [] });
      
      // 2. تشغيل الأنيميشن (دخول)
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0, // يعود لمكانه الطبيعي
          duration: 400,
          useNativeDriver: true,
          // حركة فيزيائية (بونج) خفيفة
          tension: 60, 
          friction: 8
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        })
      ]).start();
    } else {
      // عند الإغلاق (يتم التحكم به عادة من الـ Parent، لكن للمودال نحتاج خدعة)
      // المودال سيختفي فوراً، لذا الحركة هنا بصرية فقط عند الفتح
      slideAnim.setValue(-300);
      fadeAnim.setValue(0);
    }
  }, [visible, selectedFilters]);

  const allTopics = topicLabels ? Object.keys(topicLabels) : [];
  
  const toggleTopic = (topic) => {
    setTempFilters(prev => {
      const currentTopics = prev.topics || [];
      const topics = currentTopics.includes(topic)
        ? currentTopics.filter(t => t !== topic)
        : [...currentTopics, topic];
      return { ...prev, topics };
    });
  };

  const handleApply = () => {
    // حركة خروج سريعة (اختياري)
    onApplyFilters(tempFilters);
    onClose(); // سيغلق المودال
  };

  const handleReset = () => {
    setTempFilters({ topics: [] });
  };

  const handleSelectAll = () => {
    setTempFilters({ topics: [...allTopics] });
  };

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
      animationType="none" // نلغي الأنيميشن الافتراضي لنستخدم الخاص بنا
    >
      <View style={styles.modalOverlay}>
        {/* الخلفية المعتمة (تظهر بتدرج) */}
        <Animated.View style={[styles.backdrop, { opacity: fadeAnim }]}>
          <TouchableOpacity style={{ flex: 1 }} onPress={onClose} activeOpacity={1} />
        </Animated.View>

        {/* محتوى الفلتر (ينزلق من الأعلى) */}
        <Animated.View 
          style={[
            styles.modalContent,
            { transform: [{ translateY: slideAnim }] }
          ]}
        >
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

          {/* Grid of Topics (Chips) */}
          <View style={styles.topicsContainer}>
            {allTopics.map(topic => {
              const isSelected = tempFilters.topics && tempFilters.topics.includes(topic);
              return (
                <TouchableOpacity
                  key={topic}
                  style={[
                    styles.chip,
                    isSelected && styles.chipSelected
                  ]}
                  onPress={() => toggleTopic(topic)}
                  activeOpacity={0.7}
                >
                  {isSelected && (
                    <View style={styles.checkIcon}>
                      <Icon name="checkmark" size={12} color="#FFFFFF" />
                    </View>
                  )}
                  <Text style={[
                    styles.chipText,
                    isSelected && styles.chipTextSelected
                  ]}>
                    {topicLabels[topic]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Actions Footer */}
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

            <TouchableOpacity 
              style={styles.applyButton} 
              onPress={handleApply}
              activeOpacity={0.8}
            >
              <Text style={styles.applyButtonText}>
                Appliquer {tempFilters.topics?.length > 0 ? `(${tempFilters.topics.length})` : ''}
              </Text>
              <Icon name="arrow-forward" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* ديكور صغير في الأسفل */}
          <View style={styles.dragHandle} />
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start', // يبدأ من الأعلى
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // تعتيم الخلفية
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // حساب Notch في الآيفون
    paddingHorizontal: 20,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  
  // Header Styles
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#004643',
    letterSpacing: -0.5,
  },
  modalSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '500',
  },
  closeButton: {
    padding: 8,
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
  },

  // Topics Grid Styles
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // يسمح بالالتفاف
    gap: 10,
    marginBottom: 25,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  chipSelected: {
    backgroundColor: '#E6FFFA', // خلفية خضراء فاتحة جداً
    borderColor: '#004643',
  },
  checkIcon: {
    backgroundColor: '#004643',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  chipTextSelected: {
    color: '#004643',
    fontWeight: '700',
  },

  // Footer Styles
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textAction: {
    paddingVertical: 5,
  },
  resetText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EF4444', // أحمر للريست
  },
  selectAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#004643',
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: '#CBD5E1',
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004643',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30, // زر دائري الحواف بالكامل
    gap: 8,
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  
  // مقبض تجميلي
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 15,
  },
});
