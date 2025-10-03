import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { PlayCircle, Target, Layers, Tags, BarChart3, Users } from 'lucide-react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <LinearGradient
        colors={['#3b82f6', '#1e40af']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>🔬 Quiz de Parasitologie</Text>
            <Text style={styles.subtitle}>
              Application éducative pour les étudiants en parasitologie et médecine
            </Text>
          </View>

          {/* زر البدء الكبير */}
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Quiz')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#10b981', '#059669']}
              style={styles.startGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <PlayCircle size={32} color="white" />
              <Text style={styles.startButtonText}>Commencer le Quiz</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* قسم الميزات */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎯 FONCTIONNALITÉS</Text>
            <View style={styles.featuresGrid}>
              {/* الميزة 1 */}
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <Target size={28} color="#3b82f6" />
                </View>
                <Text style={styles.featureTitle}>Questions ciblées</Text>
                <Text style={styles.featureDescription}>
                  Plus de 20 questions couvrant tous les aspects de la parasitologie
                </Text>
              </View>

              {/* الميزة 2 */}
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <Layers size={28} color="#10b981" />
                </View>
                <Text style={styles.featureTitle}>3 niveaux</Text>
                <Text style={styles.featureDescription}>
                  Débutant, intermédiaire et avancé pour progresser à votre rythme
                </Text>
              </View>

              {/* الميزة 3 */}
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <Tags size={28} color="#f59e0b" />
                </View>
                <Text style={styles.featureTitle}>6 catégories</Text>
                <Text style={styles.featureDescription}>
                  Protozoaires, helminthes, diagnostic, thérapeutique et plus
                </Text>
              </View>

              {/* الميزة 4 */}
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <BarChart3 size={28} color="#ef4444" />
                </View>
                <Text style={styles.featureTitle}>Suivi des scores</Text>
                <Text style={styles.featureDescription}>
                  Évaluez vos connaissances et suivez vos progrès
                </Text>
              </View>
            </View>
          </View>

          {/* قسم الفئات */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🦠 CATÉGORIES COUVERTES</Text>
            <View style={styles.categoriesContainer}>
              {/* الفئة 1 */}
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🦠</Text>
                <Text style={styles.categoryTitle}>Protozoaires</Text>
                <Text style={styles.categoryItems}>
                  Paludisme, leishmaniose, toxoplasmose, amibiase
                </Text>
              </View>

              {/* الفئة 2 */}
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🪱</Text>
                <Text style={styles.categoryTitle}>Plathelminthes</Text>
                <Text style={styles.categoryItems}>
                  Schistosomiase, téniasis, cysticercose, échinococcose
                </Text>
              </View>

              {/* الفئة 3 */}
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🐛</Text>
                <Text style={styles.categoryTitle}>Némathelminthes</Text>
                <Text style={styles.categoryItems}>
                  Ascaridiose, filarioses, ankylostomiase, oxyurose
                </Text>
              </View>

              {/* الفئة 4 */}
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>🔬</Text>
                <Text style={styles.categoryTitle}>Diagnostic</Text>
                <Text style={styles.categoryItems}>
                  Techniques de laboratoire, tests rapides, sérologie
                </Text>
              </View>

              {/* الفئة 5 */}
              <View style={styles.categoryCard}>
                <Text style={styles.categoryEmoji}>💊</Text>
                <Text style={styles.categoryTitle}>Thérapeutique</Text>
                <Text style={styles.categoryItems}>
                  Antiparasitaires, mécanismes d'action, résistances
                </Text>
              </View>
            </View>
          </View>

          {/* قسم الجمهور المستهدف */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎓 PUBLIC CIBLE</Text>
            <View style={styles.audienceCard}>
              <View style={styles.audienceIcon}>
                <Users size={24} color="#3b82f6" />
              </View>
              <View style={styles.audienceContent}>
                <Text style={styles.audienceTitle}>Étudiants en Médecine</Text>
                <Text style={styles.audienceDescription}>
                  Application spécialement conçue pour les étudiants en médecine, 
                  parasitologie et sciences biologiques pour renforcer leurs connaissances 
                  en parasitologie médicale de manière interactive et efficace.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b82f6',
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
  startButton: {
    marginVertical: 30,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  startGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 12,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  featureCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    minHeight: 160,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureIcon: {
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 12,
    color: '#4b5563',
    lineHeight: 16,
  },
  categoriesContainer: {
    gap: 12,
  },
  categoryCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryEmoji: {
    fontSize: 24,
    marginRight: 12,
    marginTop: 2,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  categoryItems: {
    fontSize: 12,
    color: '#4b5563',
    lineHeight: 16,
    flex: 1,
  },
  audienceCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  audienceIcon: {
    backgroundColor: '#dbeafe',
    padding: 10,
    borderRadius: 12,
    marginRight: 15,
  },
  audienceContent: {
    flex: 1,
  },
  audienceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 6,
  },
  audienceDescription: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});