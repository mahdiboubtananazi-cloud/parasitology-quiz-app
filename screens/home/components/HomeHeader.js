import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeHeader({ fadeAnim, translateYAnim }) {
  // أنيميشن بسيط لحركة "التنفس" للخلايا في الخلفية
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.1, duration: 3000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 3000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View 
      style={[
        styles.headerContainer,
        { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }
      ]}
    >
      {/* الخلفية العضوية المتدرجة (أخضر/أزرق علمي) */}
      <LinearGradient
        colors={['#0f766e', '#0e7490', '#1e293b']} // Teal -> Cyan -> Dark
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {/* خلايا عائمة في الخلفية (Cells) */}
        <Animated.View style={[styles.cell, styles.cell1, { transform: [{ scale: pulseAnim }] }]} />
        <Animated.View style={[styles.cell, styles.cell2, { transform: [{ scale: pulseAnim }] }]} />
        
        {/* أيقونات علمية شفافة جداً للملمس */}
        <MaterialCommunityIcons name="bacteria-outline" size={100} color="rgba(255,255,255,0.05)" style={styles.bgIcon1} />
        <FontAwesome5 name="dna" size={80} color="rgba(255,255,255,0.05)" style={styles.bgIcon2} />

        {/* المحتوى الرئيسي */}
        <View style={styles.contentRow}>
          <View style={styles.textColumn}>
             <View style={styles.badge}>
               <Text style={styles.badgeText}>PARASITOLOGIE CLINIQUE</Text>
             </View>
             
             <Text style={styles.mainTitle}>
               Explorez le <Text style={styles.highlight}>Micro-Monde</Text>
             </Text>
             
             <Text style={styles.subTitle}>
               Quiz, Atlas & Diagnostic en un seul endroit.
             </Text>
          </View>

          {/* أيقونة المجهر الكبيرة والبارزة */}
          <View style={styles.heroIconContainer}>
             <View style={styles.microscopeCircle}>
                <MaterialCommunityIcons name="microscope" size={42} color="#0e7490" />
             </View>
          </View>
        </View>

      </LinearGradient>

      {/* المنحنى السفلي (Wave) - يقطع الشكل المربع الممل */}
      <View style={styles.curveContainer}>
         <View style={styles.curve} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10,
    backgroundColor: '#f8fafc', // لون خلفية الشاشة لتندمج الموجة
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  gradient: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 50, // مساحة للموجة السفلية
    position: 'relative',
    overflow: 'hidden',
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0,
  },
  
  // Floating Cells (Organic Feel)
  cell: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  cell1: {
    width: 200,
    height: 200,
    top: -50,
    right: -50,
  },
  cell2: {
    width: 120,
    height: 120,
    bottom: 20,
    left: -20,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  bgIcon1: { position: 'absolute', top: 40, right: 20, transform: [{rotate: '45deg'}] },
  bgIcon2: { position: 'absolute', bottom: 30, left: 40, transform: [{rotate: '-15deg'}] },

  // Content Layout
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textColumn: {
    flex: 1,
    paddingRight: 10,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeText: {
    color: '#ccfbf1',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 34,
    marginBottom: 8,
  },
  highlight: {
    color: '#67e8f9', // Cyan Bright
  },
  subTitle: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 20,
  },

  // Hero Icon (The Focal Point)
  heroIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  microscopeCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  // The Bottom Wave Curve
  curveContainer: {
    height: 20,
    backgroundColor: '#1e293b', // نفس لون نهاية التدرج
    overflow: 'hidden',
  },
  curve: {
    backgroundColor: '#f8fafc', // لون الصفحة الرئيسية
    height: 40,
    width: width * 1.2, // أوسع من الشاشة
    position: 'absolute',
    top: 0,
    left: -width * 0.1,
    borderTopLeftRadius: width, // القوس السحري
    borderTopRightRadius: width,
  },
});
