import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Home, PlayCircle, BookOpen, Trophy, Award } from 'lucide-react-native';

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
            <Text style={styles.title}>كويز علم الطفيليات</Text>
            <Text style={styles.subtitle}>اختبر معلوماتك في الطفيليات الطبية</Text>
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
              <Text style={styles.startButtonText}>ابدأ الكويز الآن</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* الإحصائيات */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <BookOpen size={24} color="#3b82f6" />
              </View>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>أسئلة</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Award size={24} color="#10b981" />
              </View>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>مواضيع</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Trophy size={24} color="#f59e0b" />
              </View>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>جودة</Text>
            </View>
          </View>

          {/* معلومات إضافية */}
          <View style={styles.infoCard}>
            <View style={styles.infoIconContainer}>
              <Home size={20} color="#3b82f6" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>نصيحة مهمة</Text>
              <Text style={styles.infoText}>
                اقرأ كل سؤال بعناية قبل اختيار الإجابة للحصول على أفضل نتيجة
              </Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: 24,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 10,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statIconContainer: {
    marginBottom: 12,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  infoCard: {
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
  infoIconContainer: {
    backgroundColor: '#dbeafe',
    padding: 10,
    borderRadius: 12,
    marginRight: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});