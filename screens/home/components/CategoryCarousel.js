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
const ITEM_WIDTH = screenWidth * 0.75; // عرض أوسع قليلاً للراحة
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
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp'
          });

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                marginRight: index === categories.length - 1 ? 0 : SPACING,
                transform: [{ scale }],
                opacity
              }}
            >
              <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => onCategoryPress(item)}
                style={[styles.card, { borderColor: item.color + '40' }]}
              >
                {/* Background Tint */}
                <View style={[styles.cardBg, { backgroundColor: item.color + '08' }]} />

                <View style={styles.cardContent}>
                  {/* Icon Section */}
                  <View style={[styles.iconContainer, { backgroundColor: item.color + '15' }]}>
                    <MaterialCommunityIcons 
                      name={item.iconName} 
                      size={42} 
                      color={item.color} 
                    />
                  </View>

                  {/* Text Section */}
                  <View style={styles.textWrapper}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardDesc} numberOfLines={2}>
                      {item.description}
                    </Text>
                  </View>

                  {/* Action Row (Bottom) */}
                  <View style={[styles.actionRow, { borderTopColor: item.color + '15' }]}>
                    <Text style={[styles.actionText, { color: item.color }]}>
                      {item.buttonLabel || 'Commencer'}
                    </Text>
                    <View style={[styles.arrowCircle, { backgroundColor: item.color + '20' }]}>
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
    marginBottom: 25,
  },
  headerContainer: {
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    letterSpacing: -0.5,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  card: {
    height: 240, // Reduced height for cleaner look
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08, // Subtle shadow
    shadowRadius: 10,
    elevation: 4,
  },
  cardBg: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start', // Icon aligned left
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
  },
  actionText: {
    fontWeight: '700',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
