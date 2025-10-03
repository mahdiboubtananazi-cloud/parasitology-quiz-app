// screens/ProposScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ProposScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Parasitology Quiz</Text>
        
        <Text style={styles.description}>
          Application éducative destinée aux étudiants en parasitologie et médecine
        </Text>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>• Questions ciblées</Text>
          <Text style={styles.featureText}>
            Couvrant les sujets les plus importants en parasitologie
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>• Plus de 20 questions</Text>
          <Text style={styles.featureText}>
            Avec corrections détaillées et explications
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>• 3 niveaux de difficulté</Text>
          <Text style={styles.featureText}>
            Débutant, Intermédiaire, Avancé
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>• 6 catégories principales</Text>
          <Text style={styles.featureText}>
            Protozoaires, Helminthes, Diagnostic, Thérapeutiques, Œufs, Cycle de vie
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>• Suivi des scores</Text>
          <Text style={styles.featureText}>
            Pour évaluer votre progression et vos connaissances
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1f2937',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#4b5563',
    lineHeight: 24,
  },
  feature: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#1f2937',
  },
  featureText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});

export default ProposScreen;