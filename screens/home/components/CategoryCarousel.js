import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated, 
  Dimensions,
  Platform
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
// تصغير عرض البطاقة لتظهر البطاقات الجانبية بشكل أفضل
const ITEM_WIDTH = screenWidth * 0.72; 
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
    <View style={{ marginBottom: 20 }}>
      <Animated.View 
        style={[
          styles.headerContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <Text style={styles.title}>Explorer</Text>
        <Text style={styles.subtitle}>Sélectionnez une catégorie</Text>
      </Animated.View>

      <Animated.FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2,
          paddingBottom: 24, // مساحة للظل المتوهج
          paddingTop: 10
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

          // أنيميشن التكبير والتصغير (أكثر وضوحاً الآن)
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
            extrapolate: 'clamp'
          });

          // أنيميشن الشفافية
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp'
          });

          // حركة عمودية طفيفة للبطاقات الجانبية
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [20, 0, 20],
            extrapolate: 'clamp'
          });

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                marginRight: index === categories.length - 1 ? 0 : SPACING,
                transform: [{ scale }, { translateY }],
                opacity
              }}
            >
              <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => onCategoryPress(item)}
                style={[
                  styles.card, 
                  { 
                    backgroundColor: item.bgColor,
                    shadowColor: item.color, // الظل يأخذ لون البطاقة (تأثير Glow)
                    borderColor: item.color + '40' // حدود شفافة بنفس اللون
                  }
                ]}
              >
                {/* شريط جانبي ملون بدلاً من العلوي */}
                <View style={[styles.accentStrip, { backgroundColor: item.color }]} />

                <View style={styles.cardInner}>
                  <View style={[styles.iconCircle, { backgroundColor: item.color + '15' }]}>
                    {item.icon ? (
                       <View style={{ transform: [{ scale: 1.2 }] }}>
                         {React.cloneElement(item.icon, { color: item.color, size: 36 })}
                       </View>
                    ) : (
                       <Text style={styles.emoji}>{item.emoji}</Text>
                    )}
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={[styles.cardTitle, { color: '#2D3748' }]} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text style={styles.cardDesc} numberOfLines={2}>
                      {item.description}
                    </Text>
                  </View>

                  <View style={[styles.btn, { backgroundColor: item.color }]}>
                    <Text style={styles.btnText}>
                      {item.buttonLabel || 'Quiz'}
                    </Text>
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
  headerContainer: {
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A202C',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginTop: 2,
  },
  card: {
    height: 260, // تقليل الارتفاع (كان 320)
    borderRadius: 24,
    backgroundColor: '#fff',
    borderWidth: 1,
    
    // إعدادات الظل المتوهج
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25, // زيادة الشفافية
    shadowRadius: 12,
    elevation: 8,
    
    flexDirection: 'row',
    overflow: 'hidden',
  },
  accentStrip: {
    width: 6,
    height: '100%',
  },
  cardInner: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  emoji: {
    fontSize: 38,
  },
  textContainer: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 18,
  },
  btn: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  }
});
