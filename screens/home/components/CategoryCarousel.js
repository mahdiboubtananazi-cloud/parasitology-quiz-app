import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated, 
  Dimensions
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth * 0.75; 
const SPACING = 12;
const SNAP_INTERVAL = ITEM_WIDTH + SPACING; 

export default function CategoryCarousel({ 
  categories, 
  onCategoryPress, 
  fadeAnim, 
  slideAnim 
}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.carouselContainer}>
      <Animated.View 
        style={[
          styles.headerContainer,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
        ]}
      >
        <Text style={styles.sectionTitle}>Modules d'apprentissage</Text>
        <Text style={styles.sectionSubtitle}>Sélectionnez votre mode d'étude</Text>
      </Animated.View>

      <Animated.FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2,
          paddingBottom: 20, 
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * SNAP_INTERVAL,
            index * SNAP_INTERVAL,
            (index + 1) * SNAP_INTERVAL
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.92, 1, 0.92],
            extrapolate: 'clamp'
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6], // جعل البطاقات الجانبية أكثر شفافية للتركيز
            extrapolate: 'clamp'
          });

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                marginRight: index === categories.length - 1 ? 0 : SPACING,
                transform: [{ scale }],
                opacity // تطبيق الشفافية
              }}
            >
              <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => onCategoryPress(item)}
                style={[styles.card, { borderColor: item.color + '30' }]}
              >
                {/* Background Tint */}
                <View style={[styles.cardBg, { backgroundColor: item.color + '05' }]} />

                {/* ✨ NEW: Decoration Icon */}
                <View style={styles.decorIcon}>
                  <MaterialCommunityIcons 
                    name={item.iconName} 
                    size={150} 
                    color={item.color} 
                  />
                </View>

                <View style={styles.cardContent}>
                  {/* Icon Section */}
                  <View style={[styles.iconContainer, { backgroundColor: item.color + '15' }]}>
                    <MaterialCommunityIcons 
                      name={item.iconName} 
                      size={36} 
                      color={item.color} 
                    />
                  </View>

                  {/* Text Section */}
                  <View style={styles.textWrapper}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>
                      {item.description}
                    </Text>
                  </View>

                  {/* Action Row (Bottom) */}
                  <View style={[styles.actionRow, { borderTopColor: item.color + '15' }]}>
                    <Text style={[styles.actionText, { color: item.color }]}>
                      {item.buttonLabel || 'Commencer'}
                    </Text>
                    <View style={[styles.arrowCircle, { backgroundColor: item.color + '15' }]}>
                      <Ionicons name="arrow-forward" size={18} color={item.color} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 20, // تقليل الهامش السفلي قليلاً
  },
  headerContainer: {
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800', // خط أعرض
    color: '#0f172a',
    letterSpacing: -0.5,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
    fontWeight: '500',
  },
  card: {
    height: 230,
    borderRadius: 24, // زوايا أنعم
    backgroundColor: '#fff',
    borderWidth: 1, // حدود أنحف وأرقى
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1, 
    shadowRadius: 12,
    elevation: 6,
  },
  cardBg: {
    ...StyleSheet.absoluteFillObject,
  },
  // ✨ NEW: Decoration Style
  decorIcon: {
    position: 'absolute',
    right: -30,
    bottom: -30,
    opacity: 0.05, // شفاف جداً
    transform: [{ rotate: '-15deg' }],
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 56, // أصغر قليلاً
    height: 56,
    borderRadius: 18, // شكل Squircle
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1e293b',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
  },
  actionText: {
    fontWeight: '800',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
});