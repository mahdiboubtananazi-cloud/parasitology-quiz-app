import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// تأكد من المسار الصحيح للأيقونات
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

export default function QuizHeader({ categoryName, onFilterPress }) {
  const navigation = useNavigation();

  // تحديد الإيموجي بناءً على الاسم (يمكنك تحسين هذا المنطق)
  const getCategoryEmoji = (name) => {
    if (!name) return '🧬';
    if (name.includes('Protoz')) return '🦠';
    if (name.includes('Helm')) return '🪱';
    if (name.includes('Arthro')) return '🦟';
    return '🔬';
  };

  return (
    <View style={styles.headerContainer}>
      {/* القسم الأيسر: زر الرجوع + العنوان */}
      <View style={styles.leftSection}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="chevron-back" size={24} color="#004643" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.emoji}>{getCategoryEmoji(categoryName)}</Text>
          <Text style={styles.headerTitle}>{categoryName || 'Quiz'}</Text>
        </View>
      </View>

      {/* القسم الأيمن: زر الفلتر */}
      <TouchableOpacity 
        style={styles.filterButton} 
        onPress={onFilterPress}
        activeOpacity={0.7}
      >
        <MaterialIcons name="filter-list" size={20} color="#FFFFFF" />
        <Text style={styles.filterText}>Filtres</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F3F4F6', // نفس لون خلفية الشاشة للاندماج
    // لا نحتاج لظل هنا ليكون التصميم نظيفاً (Flat)
    zIndex: 50,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: '#E6FFFA', // خلفية خفيفة للزر
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  emoji: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#004643',
    letterSpacing: 0.5,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004643', // لون مميز يسهل رؤيته
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20, // شكل كبسولة
    gap: 6,
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
