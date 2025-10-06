// screens/ProposScreen.js - الإصدار المصحح
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen, Target, Award, TrendingUp, Stethoscope, Microscope, Heart } from 'lucide-react-native';

export default function ProposScreen() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const features = [
    {
      icon: <Target size={24} color="#3b82f6" />,
      title: 'Questions ciblées',
      description: 'Plus de 50 questions couvrant tous les aspects essentiels de la parasitologie',
      color: '#eff6ff',
      iconBg: '#dbeafe',
    },
    {
      icon: <Award size={24} color="#10b981" />,
      title: '3 niveaux de difficulté',
      description: 'Débutant, Intermédiaire et Avancé pour progresser à votre rythme',
      color: '#ecfdf5',
      iconBg: '#d1fae5',
    },
    {
      icon: <BookOpen size={24} color="#f59e0b" />,
      title: '6 catégories',
      description: 'Protozoaires, Helminthes, Diagnostic, Traitement, Œufs, Cycles de vie',
      color: '#fffbeb',
      iconBg: '#fef3c7',
    },
    {
      icon: <TrendingUp size={24} color="#8b5cf6" />,
      title: 'Suivi des performances',
      description: 'Évaluez votre progression et identifiez les points à améliorer',
      color: '#faf5ff',
      iconBg: '#e9d5ff',
    },
  ];

  // 🔄 الفئات الجديدة - فقط هذا الجزء تم تعديله
  const categories = [
    { name: 'Les protozoaires', icon: '🦠', color: '#dbeafe', desc: 'Les protozoaires' },
    { name: 'Les helminthes', icon: '🪱', color: '#dcfce7', desc: 'Les helminthes' },
    { name: 'Cycle de vie', icon: '🔁', color: '#fef3c7', desc: 'Cycle de vie' },
    { name: 'Diagnostic', icon: '🔬', color: '#fce7f3', desc: 'Diagnostic' },
    { name: 'Traitement et prévention', icon: '💊', color: '#e0e7ff', desc: 'Traitement et prévention' },
    { name: 'Quiz général', icon: '📚', color: '#fae8ff', desc: 'Quiz général' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* الهيدر - النص العربي فقط */}
        <Animated.View 
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          {/* الإيموجي الكبير فقط */}
          <Text style={styles.microscope}>🔬</Text>
          
          {/* النص العربي فقط */}
          <View style={styles.arabicTextContainer}>
          <Text style={styles.arabicText}>
  أداة تعليمية تساعد طلبة علم الطفيليات والطب على ترسيخ المفاهيم الأساسية وتطوير مهاراتهم العلمية. 🇩🇿
</Text>
          </View>
        </Animated.View>

        {/* الميزات الرئيسية - بالفرنسية */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Fonctionnalités principales</Text>
            <View style={styles.titleLine} />
          </View>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <Animated.View 
                key={index}
                style={[
                  styles.featureCard,
                  { backgroundColor: feature.color },
                  {
                    opacity: fadeAnim,
                    transform: [{
                      translateY: slideAnim.interpolate({
                        inputRange: [0, 50],
                        outputRange: [0, 20 * (index + 1)]
                      })
                    }]
                  }
                ]}
              >
                <View style={[styles.featureIconContainer, { backgroundColor: feature.iconBg }]}>
                  {feature.icon}
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* الفئات المغطاة - بالفرنسية مع الأسماء الجديدة */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Catégories couvertes</Text>
            <View style={styles.titleLine} />
          </View>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <View key={index} style={[styles.categoryCard, { backgroundColor: category.color }]}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryDesc}>{category.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* قسم الاعتمادات - بالفرنسية */}
        <Animated.View 
          style={[
            styles.creditsSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <View style={styles.creditsHeader}>
            <View style={styles.creditsIconContainer}>
              <Text style={styles.developerEmoji}>👨‍💻</Text>
            </View>
            <Text style={styles.creditsTitle}>Informations de l'application</Text>
          </View>
          
          <View style={styles.creditsContent}>
            <View style={styles.developerInfo}>
              <Text style={styles.developerName}>Mehdi Boubetana</Text>
              <Text style={styles.developerRole}>Étudiant en biologie - spécialité parasitologie</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.targetAudienceContainer}>
              <View style={styles.audienceIcon}>
                <Microscope size={20} color="#3b82f6" />
              </View>
              <View style={styles.audienceText}>
                <Text style={styles.audienceTitle}>Public cible</Text>
                <Text style={styles.audienceDescription}>
                  Étudiants en parasitologie et médecine{'\n'}
                  Professionnels de santé intéressés
                </Text>
              </View>
            </View>

            {/* رسالة شكر */}
            <View style={styles.thanksContainer}>
              <Heart size={18} color="#ef4444" />
              <Text style={styles.thanksText}>Merci d'utiliser notre application</Text>
            </View>
          </View>
        </Animated.View>

        {/* الفوتر - بالفرنسية */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Version 1.0.0 • Développé avec React Native
          </Text>
          <Text style={styles.footerSubText}>
            © 2024 Application de Parasitologie - Tous droits réservés
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  microscope: {
    fontSize: 48,
    marginBottom: 20,
  },
  arabicTextContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    width: '100%',
  },
  arabicText: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
    color: '#475569',
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 35,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1e293b',
    letterSpacing: -0.8,
  },
  titleLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#e2e8f0',
    borderRadius: 1,
  },
  featuresGrid: {
    gap: 14,
  },
  featureCard: {
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  featureIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  featureDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
    letterSpacing: -0.1,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 36,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#334155',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryDesc: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    fontWeight: '500',
  },
  creditsSection: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 0,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
    marginBottom: 30,
    overflow: 'hidden',
  },
  creditsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 24,
    backgroundColor: '#3b82f6',
  },
  creditsIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  developerEmoji: {
    fontSize: 28,
  },
  creditsTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: -0.5,
    flex: 1,
    flexWrap: 'wrap',
  },
  creditsContent: {
    padding: 24,
  },
  developerInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  developerName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  developerRole: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
  divider: {
    width: 80,
    height: 3,
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
    marginBottom: 24,
    alignSelf: 'center',
  },
  targetAudienceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  audienceIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  audienceText: {
    flex: 1,
  },
  audienceTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 6,
  },
  audienceDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  thanksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    backgroundColor: '#fef2f2',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fee2e2',
  },
  thanksText: {
    fontSize: 14,
    color: '#dc2626',
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 4,
  },
  footerSubText: {
    fontSize: 11,
    color: '#cbd5e1',
    textAlign: 'center',
    fontWeight: '500',
  },
});