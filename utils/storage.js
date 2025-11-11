// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  QUIZ_HISTORY: 'quiz_history',
  USER_STATS: 'user_stats',
  CATEGORY_RESULTS: 'category_results',
  SETTINGS: 'app_settings'
};

export const storage = {
  // Sauvegarder les statistiques utilisateur
  async saveUserStats(stats) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
      return true;
    } catch (error) {
      console.error('Error saving user stats:', error);
      return false;
    }
  },

  // Récupérer les statistiques utilisateur
  async getUserStats() {
    try {
      const stats = await AsyncStorage.getItem(STORAGE_KEYS.USER_STATS);
      return stats ? JSON.parse(stats) : {
        answeredQuestions: 0,
        correctAnswers: 0,
        percentage: 0,
        totalTime: 0
      };
    } catch (error) {
      console.error('Error getting user stats:', error);
      return {
        answeredQuestions: 0,
        correctAnswers: 0,
        percentage: 0,
        totalTime: 0
      };
    }
  },

  // Sauvegarder les résultats par catégorie
  async saveCategoryResult(categoryName, result) {
    try {
      const allResults = await this.getCategoryResults();
      allResults[categoryName] = {
        ...allResults[categoryName],
        ...result,
        lastUpdated: new Date().toISOString()
      };
      await AsyncStorage.setItem(STORAGE_KEYS.CATEGORY_RESULTS, JSON.stringify(allResults));
      return true;
    } catch (error) {
      console.error('Error saving category result:', error);
      return false;
    }
  },

  // Récupérer les résultats par catégorie
  async getCategoryResults() {
    try {
      const results = await AsyncStorage.getItem(STORAGE_KEYS.CATEGORY_RESULTS);
      return results ? JSON.parse(results) : {
        Protozoaires: { percentage: 0, correct: 0, total: 0 },
        Helminthes: { percentage: 0, correct: 0, total: 0 },
        Arthropodes: { percentage: 0, correct: 0, total: 0 }
      };
    } catch (error) {
      console.error('Error getting category results:', error);
      return {
        Protozoaires: { percentage: 0, correct: 0, total: 0 },
        Helminthes: { percentage: 0, correct: 0, total: 0 },
        Arthropodes: { percentage: 0, correct: 0, total: 0 }
      };
    }
  },

  // Sauvegarder l'historique des quiz
  async saveQuizResult(quizData) {
    try {
      const history = await this.getQuizHistory();
      history.push({
        ...quizData,
        date: new Date().toISOString()
      });
      
      // Garder seulement les 50 derniers résultats
      if (history.length > 50) {
        history.shift();
      }
      
      await AsyncStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(history));
      
      // Mettre à jour les stats globales
      await this.updateGlobalStats(quizData);
      
      return true;
    } catch (error) {
      console.error('Error saving quiz result:', error);
      return false;
    }
  },

  // Mettre à jour les statistiques globales
  async updateGlobalStats(quizData) {
    try {
      const stats = await this.getUserStats();
      const newStats = {
        answeredQuestions: stats.answeredQuestions + quizData.totalQuestions,
        correctAnswers: stats.correctAnswers + quizData.correctAnswers,
        percentage: Math.round(
          ((stats.correctAnswers + quizData.correctAnswers) / 
           (stats.answeredQuestions + quizData.totalQuestions)) * 100
        ),
        totalTime: stats.totalTime + (quizData.timeSpent || 0)
      };
      await this.saveUserStats(newStats);
    } catch (error) {
      console.error('Error updating global stats:', error);
    }
  },

  // Récupérer l'historique des quiz
  async getQuizHistory() {
    try {
      const history = await AsyncStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error getting quiz history:', error);
      return [];
    }
  },

  // Réinitialiser toutes les données
  async resetAllData() {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.QUIZ_HISTORY,
        STORAGE_KEYS.USER_STATS,
        STORAGE_KEYS.CATEGORY_RESULTS,
        STORAGE_KEYS.SETTINGS
      ]);
      return true;
    } catch (error) {
      console.error('Error resetting data:', error);
      return false;
    }
  }
};