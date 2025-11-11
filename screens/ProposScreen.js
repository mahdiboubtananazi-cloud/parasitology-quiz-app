// screens/ProposScreen.js - النسخة المبسطة العاملة
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

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
      icon: 'help-circle',
      title: 'Banque de questions (150+)',
      description: 'Plus de 150 questions révisées et classées par thème avec explications détaillées.',
    },
    {
      icon: 'trophy',
      title: 'Niveaux adaptatifs',
      description: "Mode d'entraînement par niveaux et répartition équilibrée pour progresser.",
    },
    {
      icon: 'book',
      title: 'Révisions guidées',
      description: "Explications concises après chaque question pour mémorisation.",
    },
    {
      icon: 'trending-up',
      title: 'Suivi & statistiques',
      description: 'Historique des scores et progression par catégorie.',
    },
    {
      icon: 'download',
      title: 'Mode hors-ligne',
      description: "Révisez sans connexion (pratique en déplacement).",
    },
    {
      icon: 'star',
      title: 'Favoris & révisions',
      description: "Marquez les questions importantes.",
    },
  ];

  const categories = [
    {
      name: 'PROTOZOAIRES',
      icon: '🦠',
      desc: "Étudiez les protozoaires pathogènes : classification, morphologie, pathogénie."
    },
    {
      name: 'HELMINTHES',
      icon: '🪱',
      desc: "Explorez les nématodes, cestodes et trématodes — cycles de vie, clinique."
    },
    {
      name: 'ARTHROPODES',
      icon: '🦟',
      desc: "Apprenez sur les ectoparasites et vecteurs : identification, rôle médical."
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔬</Text>
            <Text style={styles.headerTitle}>À propos</Text>
          </View>
        </View>

        {/* Intro */}
        <Animated.View 
          style={[
            styles.introCard,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <Text style={styles.introTitle}>Application de Parasitologie</Text>
          <Text style={styles.introText}>
            "اللهم علّمنا ما ينفعنا وانفعنا بما علمتنا 🇩🇿"
          </Text>
        </Animated.View>

        {/* Features */}
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
                  {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }]
                  }
                ]}
              >
                <View style={styles.featureIconContainer}>
                  <Ionicons name={feature.icon} size={24} color="#004643" />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>📚 Catégories couvertes</Text>
            <View style={styles.titleLine} />
          </View>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <Animated.View 
                key={index}
                style={[
                  styles.categoryCard,
                  {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }]
                  }
                ]}
              >
                <View style={styles.categoryIconContainer}>
                  <Text style={styles.categoryIcon}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryDesc}>{category.desc}</Text>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* Credits */}
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
            <Text style={styles.creditsTitle}>Développeur</Text>
          </View>
          <View style={styles.creditsContent}>
            <View style={styles.developerInfo}>
              <Text style={styles.developerName}>Application de Parasitologie</Text>
              <Text style={styles.developerRole}>
                Destinée aux étudiants en médecine, pharmacie et sciences biologiques
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.targetAudienceContainer}>
              <View style={styles.audienceIcon}>
                <Ionicons name="school" size={20} color="#004643" />
              </View>
              <View style={styles.audienceText}>
                <Text style={styles.audienceTitle}>Public cible</Text>
                <Text style={styles.audienceDescription}>
                  Étudiants en médecine, pharmacie, et sciences de la vie
                </Text>
              </View>
            </View>
            <View style={styles.thanksContainer}>
              <Ionicons name="heart" size={16} color="#dc2626" />
              <Text style={styles.thanksText}>Merci d'utiliser ParaQuiz</Text>
            </View>
          </View>
        </Animated.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Version 1.0.0 • Développé avec React Native</Text>
          <Text style={styles.footerSubText}>© 2024 Application de Parasitologie</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0F3',
  },
  scrollContent: {
    paddingVertical: 20,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIcon: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 16,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#004643',
    textAlign: 'center',
    marginBottom: 12,
  },
  introText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#004643',
  },
  titleLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#ABD1C6',
    borderRadius: 1,
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    borderRadius: 16,
    padding: 20,
    backgroundColor: '#F0F5F4',
    borderWidth: 1,
    borderColor: '#D0E7E2',
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor: '#ABD1C6',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#004643',
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
  categoriesGrid: {
    gap: 16,
  },
  categoryCard: {
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    backgroundColor: '#CFE7DF',
    borderWidth: 1,
    borderColor: '#C0E0D8',
  },
  categoryIconContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#F0F5F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryIcon: {
    fontSize: 26,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#004643',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryDesc: {
    fontSize: 13,
    color: '#2f3e46',
    textAlign: 'center',
    fontWeight: '500',
  },
  creditsSection: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D0E7E2',
    marginBottom: 25,
    overflow: 'hidden',
  },
  creditsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 20,
    backgroundColor: '#ABD1C6',
  },
  creditsIconContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: 'rgba(0,70,67,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  developerEmoji: {
    fontSize: 26,
  },
  creditsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#004643',
    flex: 1,
  },
  creditsContent: {
    padding: 20,
  },
  developerInfo: {
    alignItems: 'center',
    marginBottom: 18,
  },
  developerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#004643',
    marginBottom: 4,
  },
  developerRole: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500',
  },
  divider: {
    width: 70,
    height: 2,
    backgroundColor: '#D0E7E2',
    borderRadius: 1,
    marginBottom: 20,
    alignSelf: 'center',
  },
  targetAudienceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    backgroundColor: '#F0F5F4',
    padding: 18,
    borderRadius: 14,
    marginBottom: 18,
  },
  audienceIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ABD1C6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audienceText: {
    flex: 1,
  },
  audienceTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#004643',
    marginBottom: 5,
  },
  audienceDescription: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 19,
  },
  thanksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    backgroundColor: '#F0F5F4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D0E7E2',
  },
  thanksText: {
    fontSize: 13,
    color: '#004643',
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 15,
  },
  footerText: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 3,
  },
  footerSubText: {
    fontSize: 11,
    color: '#64748b',
    textAlign: 'center',
    fontWeight: '500',
  },
});