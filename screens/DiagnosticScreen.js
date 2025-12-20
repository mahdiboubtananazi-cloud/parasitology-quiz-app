import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  StatusBar, 
  Dimensions 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// تأكد من تثبيت expo-linear-gradient أو استبدله بـ View عادية إذا لم يكن مثبتاً
import { LinearGradient } from 'expo-linear-gradient'; 
import { Ionicons } from '@expo/vector-icons'; // مكتبة أيقونات قياسية في Expo

const { width } = Dimensions.get('window');

const DiagnosticScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('image'); // 'image' or 'symptoms'

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerTitle}>Laboratoire</Text>
        <Text style={styles.headerSubtitle}>Diagnostic & Identification</Text>
      </View>
      <TouchableOpacity style={styles.profileButton}>
        {/* Placeholder for Profile Icon */}
        <View style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );

  const renderOptionCard = (title, subtitle, iconName, type) => (
    <TouchableOpacity 
      style={[styles.card, activeTab === type && styles.activeCard]}
      onPress={() => setActiveTab(type)}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={activeTab === type ? ['#4c669f', '#3b5998'] : ['#ffffff', '#ffffff']}
        style={styles.cardGradient}
      >
        <View style={styles.iconContainer}>
          <Ionicons 
            name={iconName} 
            size={32} 
            color={activeTab === type ? '#fff' : '#3b5998'} 
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, activeTab === type && styles.activeText]}>
            {title}
          </Text>
          <Text style={[styles.cardSubtitle, activeTab === type && styles.activeTextSub]}>
            {subtitle}
          </Text>
        </View>
        {activeTab === type && (
          <View style={styles.checkIcon}>
            <Ionicons name="checkmark-circle" size={24} color="#fff" />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderContentArea = () => {
    if (activeTab === 'image') {
      return (
        <View style={styles.contentArea}>
          <View style={styles.uploadBox}>
            <Ionicons name="cloud-upload-outline" size={60} color="#ccc" />
            <Text style={styles.uploadText}>Télécharger une image microscopique</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Ouvrir la Caméra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
              <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>Galerie</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>
            L'IA analysera la morphologie du parasite pour suggérer des correspondances.
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.contentArea}>
        <Text style={styles.sectionTitle}>Symptômes Observés</Text>
        {/* Placeholder for symptoms list */}
        {['Fièvre', 'Douleur Abdominale', 'Anémie', 'Eosinophilie'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.symptomRow}>
            <Text style={styles.symptomText}>{item}</Text>
            <View style={styles.checkbox} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Lancer l'Analyse</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {renderHeader()}
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionHeader}>Méthode de Diagnostic</Text>
        
        <View style={styles.cardsRow}>
          {renderOptionCard('Microscopie', 'Analyse d\'image IA', 'eye-outline', 'image')}
        </View>
        <View style={styles.cardsRow}>
          {renderOptionCard('Clinique', 'Basé sur les symptômes', 'medkit-outline', 'symptoms')}
        </View>

        {renderContentArea()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#e0e0e0',
  },
  scrollContent: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
  },
  cardsRow: {
    marginBottom: 12,
  },
  card: {
    height: 80,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: '#fff',
  },
  cardGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  activeCard: {
    elevation: 6,
  },
  iconContainer: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  activeText: {
    color: '#fff',
  },
  activeTextSub: {
    color: 'rgba(255,255,255,0.8)',
  },
  contentArea: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    minHeight: 300,
  },
  uploadBox: {
    borderWidth: 2,
    borderColor: '#eee',
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  uploadText: {
    color: '#999',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#f0f2f5',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  secondaryButtonText: {
    color: '#3b5998',
  },
  infoText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  symptomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  symptomText: {
    fontSize: 15,
    color: '#333',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  }
});

export default DiagnosticScreen;
