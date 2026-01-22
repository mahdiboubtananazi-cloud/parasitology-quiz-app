import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeHeader({ fadeAnim, translateYAnim }) {
  
  // أنيميشن دوران بطيء للرمز
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View 
      style={[
        styles.headerContainer,
        { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }
      ]}
    >
      <LinearGradient
        colors={['#0F766E', '#134E4A']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.welcome}>Bienvenue sur</Text>
            
            <View style={styles.titleBox}>
              <Text style={styles.para}>Para</Text>
              <Text style={styles.sys}>Sys</Text>
              {/* نقطة خضراء صغيرة كزخرفة */}
              <View style={styles.dot} />
            </View>

            <Text style={styles.sub}>Parasitologie Systématique</Text>
          </View>

          {/* رمز بسيط (Biohazard ناعم أو Virus Shape) يمثل علم الأحياء الدقيقة */}
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
             <MaterialCommunityIcons name="bacteria-outline" size={60} color="rgba(255,255,255,0.15)" />
          </Animated.View>
        </View>
      </LinearGradient>

      {/* الموجة السفلية (أقصر) */}
      <View style={styles.waveContainer}>
        <View style={styles.wave} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10, // مسافة أقل
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  gradient: {
    paddingTop: 60, // تقليل المساحة العلوية
    paddingBottom: 40, // تقليل المساحة السفلية
    paddingHorizontal: 24,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
  },

  welcome: {
    color: '#5EEAD4',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },

  // زخرفة الاسم (Para باللون الأبيض، Sys بلون مميز)
  titleBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  para: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -1,
  },
  sys: {
    fontSize: 36,
    fontWeight: '300', // خط أنحف للتميز
    color: '#99F6E4', // لون فاتح
    fontStyle: 'italic',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34D399',
    marginLeft: 4,
    marginBottom: 8,
  },

  sub: {
    fontSize: 14,
    color: '#CCFBF1',
    marginTop: 4,
    opacity: 0.8,
  },

  // الموجة
  waveContainer: {
    marginTop: -25, // سحب أكثر للأعلى
    height: 25,
    backgroundColor: 'transparent',
    zIndex: 5,
  },
  wave: {
    backgroundColor: '#f8fafc',
    height: 100,
    width: width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: 0,
  },
});