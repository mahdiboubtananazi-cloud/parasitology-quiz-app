// screens/ProposScreen.js - Version Améliorée (Phase 3)
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen, Target, Award, TrendingUp, Stethoscope, Microscope } from 'lucide-react-native';

export default function ProposScreen() {
  const features = [
    {
      icon: <Target size={22} color="#3b82f6" />,
      title: 'Questions ciblées',
      description: 'Plus de 50 questions couvrant tous les aspects essentiels de la parasitologie',
      color: '#eff6ff',
    },
    {
      icon: <Award size={22} color="#10b981" />,
      title: '3 niveaux',
      description: 'Débutant, Intermédiaire et Avancé pour progresser à votre rythme',
      color: '#ecfdf5',
    },
    {
      icon: <BookOpen size={22} color="#f59e0b" />,
      title: '6 catégories',
      description: 'Protozoaires, Helminthes, Diagnostic, Thérapeutique, Œufs, Cycle de vie',
      color: '#fef3c7',
    },
    {
      icon: <TrendingUp size={22} color="#8b5cf6" />,
      title: 'Suivi des scores',
      description: 'Évaluez votre progression et identifiez vos points à améliorer',
      color: '#f5f3ff',
    },
  ];

  const categories = [
    { name: 'Protozoaires', icon: '🦠', color: '#dbeafe' },
    { name: 'Helminthes', icon: '🪱', color: '#dcfce7' },
    { name: 'Diagnostic', icon: '🔬', color: '#fef3c7' },
    { name: 'Thérapeutique', icon: '💊', color: '#fce7f3' },
    { name: 'Œufs', icon: '🥚', color: '#e0e7ff' },
    { name: 'Cycle de vie', icon: '🔄', color: '#fae8ff' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header avec titre */}
        <View style={styles.header}>
          <Text style={styles.microscope}>🔬</Text>
          <Text style={styles.title}>Parasitology Quiz</Text>
          
          {/* Description en arabe avec style unique */}
          <View style={styles.arabicTextContainer}>
            <Text style={styles.arabicText}>
              تطبيق موجه لطلبة علم الطفيليات والطب{'\n'}
              لتسهيل مراجعة المفاهيم الأساسية
            </Text>
          </View>
        </View>

        {/* Fonctionnalités principales */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fonctionnalités</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <View key={index} style={[styles.featureCard, { backgroundColor: feature.color }]}>
                <View style={styles.featureIconContainer}>
                  {feature.icon}
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Catégories couvertes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Catégories couvertes</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <View key={index} style={[styles.categoryCard, { backgroundColor: category.color }]}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Section Crédits */}
        <View style={styles.creditsSection}>
          <View style={styles.creditsHeader}>
            <Stethoscope size={24} color="#3b82f6" />
            <Text style={styles.creditsTitle}>Crédits</Text>
          </View>
          
          <View style={styles.creditsContent}>
            <Text style={styles.developerName}>Développé par Mehdi Boubetana</Text>
            <Text style={styles.developerRole}>Étudiant en biologie – spécialité parasitologie</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.targetAudienceContainer}>
              <Microscope size={20} color="#6b7280" />
              <Text style={styles.targetAudienceText}>
                Application destinée aux étudiants{'\n'}
                en parasitologie et en médecine
              </Text>
            </View>
          </View>
        </View>

        {/* Footer note */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Version 1.0.0 • Développé avec React Native
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  microscope: {
    fontSize: 56,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
    letterSpacing: -0.8,
  },
  arabicTextContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  arabicText: {
    fontSize: 17,
    lineHeight: 28,
    textAlign: 'center',
    color: '#374151',
    fontWeight: '600',
    fontFamily: 'System',
    letterSpacing: 0.3,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  featuresGrid: {
    gap: 12,
  },
  featureCard: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  featureIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  featureDescription: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 21,
    letterSpacing: -0.1,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryCard: {
    width: '48%',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  creditsSection: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 24,
  },
  creditsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  creditsTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },
  creditsContent: {
    alignItems: 'center',
  },
  developerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3b82f6',
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  developerRole: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    marginBottom: 20,
  },
  targetAudienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#f9fafb',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  targetAudienceText: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    fontWeight: '500',
  },
});