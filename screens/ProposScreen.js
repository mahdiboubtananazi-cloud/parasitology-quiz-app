import React from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// 👇 استيراد البيانات لحساب العدد الحقيقي
import { getTotalQuestions, protozoaQuestions, helminthsQuestions, arthropodsQuestions, microscopyQuestions } from '../data/categories';
import { microscopyAtlas } from '../data/microscopyAtlas';

export default function ProposScreen() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  // 📊 حساب الأرقام الحقيقية
  const totalQ = 
    getTotalQuestions(protozoaQuestions) + 
    getTotalQuestions(helminthsQuestions) + 
    getTotalQuestions(arthropodsQuestions) + 
    getTotalQuestions(microscopyQuestions);
  
  const totalImages = microscopyAtlas.length;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleEmail = () => Linking.openURL('mailto:mehdi.boubetana@gmail.com');
  const handleCDC = () => Linking.openURL('https://www.cdc.gov/dpdx/index.html');

  const features = [
    {
      icon: 'library',
      title: 'Banque Massive',
      description: `Plus de ${totalQ} QCM experts pour préparer vos examens.`,
    },
    {
      icon: 'image',
      title: 'Labo-Vision',
      description: `${totalImages} images HD classées (Sources CDC).`,
    },
    {
      icon: 'school',
      title: 'Méthode 5-Axes',
      description: "Apprentissage complet : Morphologie, Cycle, Clinique, Diagnostic, Traitement.",
    },
    {
      icon: 'stats-chart',
      title: 'Coach Virtuel',
      description: 'Détection automatique de vos points faibles.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>À Propos</Text>
          <View style={styles.versionBadge}>
             <Text style={styles.versionText}>v4.0 Stable</Text>
          </View>
        </View>

        {/* Intro Card (Pasteur Edition) */}
        <Animated.View style={[styles.introCard, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.logoRow}>
            {/* الشعار المربع */}
            <View style={styles.brandBox}>
               <Text style={styles.brandText}>P</Text>
            </View>
            <View>
               <Text style={styles.introTitle}>ParaSys</Text>
               <Text style={styles.introTagline}>L'Excellence Médicale</Text>
            </View>
          </View>
          
          <Text style={styles.introText}>
            Conçu pour transformer la complexité biologique en réflexe diagnostique. 
            L'outil de référence pour les étudiants et internes en Biologie, Médecine et Pharmacie.
          </Text>

          <View style={styles.quoteBox}>
             <MaterialCommunityIcons name="format-quote-open" size={24} color="#004643" style={{marginBottom: 4}} />
             <Text style={styles.introQuote}>
               "Le hasard ne favorise que les esprits préparés."
             </Text>
             <Text style={styles.quoteAuthor}>— Louis Pasteur</Text>
          </View>
        </Animated.View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contenu & Outils</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <Animated.View key={index} style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <Ionicons name={feature.icon} size={22} color="#004643" />
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* Sources & Crédits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sources Scientifiques</Text>
          <TouchableOpacity style={styles.sourceCard} onPress={handleCDC}>
            <MaterialCommunityIcons name="microscope" size={24} color="#004643" />
            <View style={{flex:1, marginLeft: 12}}>
              <Text style={styles.sourceTitle}>Imagerie de Référence</Text>
              <Text style={styles.sourceDesc}>
                Basé sur la bibliothèque DPDx du CDC (Centers for Disease Control), la référence mondiale en parasitologie.
              </Text>
            </View>
            <Ionicons name="open-outline" size={20} color="#64748b" />
          </TouchableOpacity>
        </View>

        {/* Contact Developer */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contact & Support</Text>
          <TouchableOpacity style={styles.contactCard} onPress={handleEmail}>
            <View style={styles.contactIconBox}>
              <Ionicons name="mail" size={20} color="#fff" />
            </View>
            <View>
              <Text style={styles.contactLabel}>Contacter le développeur</Text>
              <Text style={styles.contactEmail}>mehdi.boubetana@gmail.com</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Algérie 🇩🇿 • 2025</Text>
          <Text style={styles.footerSubText}>Développé avec passion pour la science.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFF0F3' },
  scrollContent: { paddingBottom: 100 },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 20,
  },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#004643' },
  versionBadge: { backgroundColor: '#E6F0ED', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  versionText: { color: '#004643', fontWeight: '700', fontSize: 12 },

  // Intro Card (Pasteur Style)
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#D0E7E2',
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  logoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  brandBox: {
    width: 42,
    height: 42,
    backgroundColor: '#004643',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  brandText: { color: '#fff', fontSize: 26, fontWeight: '900' },
  introTitle: { fontSize: 24, fontWeight: '900', color: '#004643', lineHeight: 24 },
  introTagline: { fontSize: 12, color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1 },
  
  introText: { 
    fontSize: 15, 
    color: '#334155', 
    lineHeight: 22, 
    marginBottom: 20,
    fontWeight: '400',
  },
  quoteBox: {
    backgroundColor: '#F0FDFA',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#004643',
  },
  introQuote: { 
    fontSize: 14, 
    color: '#004643', 
    fontStyle: 'italic', 
    fontWeight: '600',
    lineHeight: 20,
  },
  quoteAuthor: {
    fontSize: 11,
    color: '#64748b',
    textAlign: 'right',
    marginTop: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  section: { paddingHorizontal: 16, marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#004643', marginBottom: 12, marginLeft: 4 },
  
  featuresGrid: { gap: 12 },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F5F4',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D0E7E2',
  },
  featureIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#ABD1C6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureTitle: { fontSize: 15, fontWeight: '700', color: '#004643', marginBottom: 2 },
  featureDescription: { fontSize: 13, color: '#475569', lineHeight: 18 },

  // Source Card
  sourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  sourceTitle: { fontSize: 14, fontWeight: '700', color: '#1e293b' },
  sourceDesc: { fontSize: 12, color: '#64748b', marginTop: 2, lineHeight: 16 },

  // Contact
  contactSection: { paddingHorizontal: 16, marginBottom: 30 },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  contactIconBox: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#004643', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  contactLabel: { fontSize: 12, color: '#64748b', fontWeight: '500' },
  contactEmail: { fontSize: 15, fontWeight: '700', color: '#004643' },

  footer: { alignItems: 'center', marginTop: 10 },
  footerText: { fontSize: 13, fontWeight: '700', color: '#475569' },
  footerSubText: { fontSize: 11, color: '#94a3b8', marginTop: 2 },
});