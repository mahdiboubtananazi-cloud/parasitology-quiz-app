import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated, 
  Dimensions 
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth - 100; // عرض البطاقة
const SPACING = 16;
const SNAP_INTERVAL = ITEM_WIDTH + SPACING; // المسافة بين كل بطاقة وأخرى

export default function CategoryCarousel({ 
  categories, 
  onCategoryPress, 
  fadeAnim, 
  slideAnim 
}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Animated.View 
        style={[
          styles.sectionTitleContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <Text style={styles.sectionTitle}>Catégories</Text>
        <Text style={styles.sectionSubtitle}>Choisissez votre domaine d'étude</Text>
      </Animated.View>

      <Animated.View 
        style={[
          styles.categoriesContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToInterval={SNAP_INTERVAL}
          snapToAlignment="center"
          contentContainerStyle={{
            paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2, // توسيط العنصر الأول
            paddingBottom: 20 // مساحة للظلال
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        >
          {categories.map((category, index) => {
            // حساب التأثير (Input Range)
            const inputRange = [
              (index - 1) * SNAP_INTERVAL,
              index * SNAP_INTERVAL,
              (index + 1) * SNAP_INTERVAL
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.9, 1, 0.9], // تكبر في الوسط، تصغر في الجوانب
              extrapolate: 'clamp'
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.6, 1, 0.6], // شفافية للجوانب
              extrapolate: 'clamp'
            });

            return (
              <Animated.View
                key={category.id}
                style={[
                  styles.categoryCardWrapper,
                  {
                    width: ITEM_WIDTH,
                    marginRight: index === categories.length - 1 ? 0 : SPACING,
                    transform: [{ scale }],
                    opacity
                  }
                ]}
              >
                <TouchableOpacity 
                  style={[styles.categoryCard, { backgroundColor: category.bgColor }]}
                  activeOpacity={0.9}
                  onPress={() => onCategoryPress(category)}
                >
                  <View style={[styles.categoryTopLine, { backgroundColor: category.color }]} />
                  
                  <View style={[styles.categoryIconContainer, { borderColor: category.color }]}>
                    <Text style={styles.categoryEmoji}>{category.emoji}</Text>
                  </View>

                  <View style={styles.categoryContent}>
                    <Text style={[styles.categoryName, { color: category.color }]}>
                      {category.name}
                    </Text>
                    <Text style={styles.categoryDescription}>
                      {category.description}
                    </Text>
                  </View>

                  <View style={[styles.categoryButton, { backgroundColor: category.color }]}>
                    <Text style={styles.categoryButtonText}>Commencer le Quiz</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitleContainer: {
    paddingHorizontal: 16,
    marginVertical: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  categoriesContainer: {
    // إزالة الهوامش السفلية الزائدة
  },
  categoryCardWrapper: {
    // الأبعاد يتم التحكم بها ديناميكياً
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    height: 320, // زيادة الارتفاع لتبدو أفخم
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  categoryTopLine: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: 20,
  },
  categoryIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryEmoji: { fontSize: 48 },
  categoryContent: { alignItems: 'center', flex: 1 },
  categoryName: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  categoryButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  categoryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
