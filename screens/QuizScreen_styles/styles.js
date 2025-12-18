import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Layout
  container: { 
    flex: 1, 
    backgroundColor: '#EFF0F3' 
  },
  keyboardAvoid: {
    flex: 1
  },
  
  // Header
  header: { 
    backgroundColor: '#FFFFFF', 
    paddingVertical: 10, 
    paddingHorizontal: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#e5e7eb', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  headerContent: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8 
  },
  headerIcon: { 
    fontSize: 20 
  },
  headerTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#000000' 
  },
  filterButton: { 
    padding: 6, 
    borderRadius: 8, 
    backgroundColor: '#ABD1C6' 
  },
  
  // Content
  content: { 
    flex: 1 
  },
  scrollContent: { 
    padding: 12, 
    paddingBottom: 20 
  },
  
  // Question Header
  questionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    marginBottom: 6 
  },
  questionInfo: { 
    flex: 1 
  },
  questionNumber: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#004643', 
    marginBottom: 3 
  },
  categoryBadge: { 
    backgroundColor: '#ABD1C6', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 8, 
    alignSelf: 'flex-start' 
  },
  categoryText: { 
    fontSize: 10, 
    fontWeight: '600', 
    color: '#004643' 
  },
  
  // Timer
  timerCircle: { 
    width: 45, 
    height: 45, 
    borderRadius: 22, 
    backgroundColor: '#FFFFFF', 
    borderWidth: 2, 
    borderColor: '#ABD1C6', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 8 
  },
  timerCircleInner: { 
    alignItems: 'center' 
  },
  timerText: { 
    fontSize: 11, 
    fontWeight: '700', 
    color: '#004643', 
    marginTop: 1 
  },
  timerWarning: { 
    color: '#dc2626' 
  },
  
  // Question Card
  questionCard: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    padding: 14, 
    marginBottom: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.08, 
    shadowRadius: 6, 
    elevation: 3, 
    minHeight: 80 
  },
  questionText: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#000000', 
    lineHeight: 20, 
    textAlign: 'center' 
  },
  

// الزر الأساسي للخيار - أصغر حجماً
optionButton: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 8,  // ← تقليل من 14 إلى 8
  paddingHorizontal: 12,
  borderRadius: 10,    // ← تقليل من 12 إلى 10
  borderWidth: 1.5,    // ← تقليل من 2 إلى 1.5
  backgroundColor: '#FFFFFF',
  marginBottom: 4,     // ← تقليل من 8 إلى 4
  minHeight: 44,       // ← تقليل من 56 إلى 44
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.03,
      shadowRadius: 3,
    },
    android: {
      elevation: 1,
    }
  }),
},

// الحالة الافتراضية
optionDefault: {
  borderColor: '#E5E7EB',
  backgroundColor: '#FFFFFF',
},

// عند التحديد (قبل إظهار النتيجة)
optionSelected: {
  borderColor: '#10B981',  // ← أخضر بدلاً من الأزرق
  backgroundColor: '#F0FDF4',  // ← خلفية خضراء فاتحة جداً
  borderWidth: 2,
  ...Platform.select({
    ios: {
      shadowColor: '#10B981',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: {
      elevation: 3,
    }
  }),
},

// الإجابة الصحيحة
optionCorrect: {
  borderColor: '#10B981',  // أخضر
  backgroundColor: '#D1FAE5',  // خلفية خضراء فاتحة
  borderWidth: 2,
  ...Platform.select({
    ios: {
      shadowColor: '#10B981',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 5,
    },
    android: {
      elevation: 3,
    }
  }),
},

// الإجابة الخاطئة
optionWrong: {
  borderColor: '#DC2626',  // أحمر
  backgroundColor: '#FEE2E2',  // خلفية حمراء فاتحة
  borderWidth: 2,
  ...Platform.select({
    ios: {
      shadowColor: '#DC2626',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 5,
    },
    android: {
      elevation: 3,
    }
  }),
},

// حاوية التسمية (A, B, C, D) - أصغر حجماً
optionLabelContainer: {
  width: 28,  // ← تقليل من 32 إلى 28
  height: 28,  // ← تقليل من 32 إلى 28
  borderRadius: 7,
  backgroundColor: '#F3F4F6',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
},

optionLabelContainerSelected: {
  backgroundColor: '#10B981',  // ← أخضر بدلاً من الأزرق
},

optionLabelContainerCorrect: {
  backgroundColor: '#10B981',  // أخضر
},

optionLabelContainerWrong: {
  backgroundColor: '#DC2626',  // أحمر
},

// نص التسمية - أصغر حجماً
optionLabel: {
  fontSize: 14,  // ← تقليل من 16 إلى 14
  fontWeight: '700',
  color: '#6B7280',
},

optionLabelSelected: {
  color: '#FFFFFF',
},

optionLabelCorrect: {
  color: '#FFFFFF',
},

optionLabelWrong: {
  color: '#FFFFFF',
},

// نص الخيار - أصغر حجماً
optionText: {
  flex: 1,
  fontSize: 14,  // ← تقليل من 15 إلى 14
  color: '#374151',
  lineHeight: 20,  // ← تقليل من 22 إلى 20
  fontWeight: '500',
},

optionTextSelected: {
  color: '#065F46',  // أخضر غامق
  fontWeight: '600',
},

optionTextCorrect: {
  color: '#065F46',  // أخضر غامق
  fontWeight: '600',
},

optionTextWrong: {
  color: '#991B1B',  // أحمر غامق
  fontWeight: '600',
},

// حاوية الأيقونة
optionIconContainer: {
  marginLeft: 'auto',
  paddingLeft: 8,
},
  
  // Explanation
  explanationCard: { 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 8, 
    borderWidth: 1.5 
  },
  explanationCorrect: { 
    backgroundColor: '#ecfdf5', 
    borderColor: '#10b981' 
  },
  explanationWrong: { 
    backgroundColor: '#fef2f2', 
    borderColor: '#dc2626' 
  },
  explanationHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6, 
    marginBottom: 6 
  },
  explanationTitle: { 
    fontSize: 12, 
    fontWeight: '700' 
  },
  explanationText: { 
    fontSize: 11, 
    color: '#374151', 
    lineHeight: 14 
  },
  
  // Next Button
  nextButton: { 
    backgroundColor: '#004643', 
    borderRadius: 8, 
    padding: 10, 
    alignItems: 'center', 
    marginTop: 8 
  },
  nextButtonText: { 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: '700' 
  },
  
  // Filter Modal
  filterModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  filterModalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  filterModalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20
  },
  
  // Results
  resultScrollContent: { 
    flexGrow: 1, 
    padding: 24, 
    justifyContent: 'center' 
  },
  resultCard: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 24, 
    padding: 32, 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 8 }, 
    shadowOpacity: 0.12, 
    shadowRadius: 16, 
    elevation: 8, 
    marginBottom: 20 
  },
  resultHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 16, 
    gap: 16 
  },
  resultIconContainer: { 
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  resultEmoji: { 
    fontSize: 48 
  },
  resultLevel: { 
    fontSize: 28, 
    fontWeight: '900', 
    marginBottom: 28, 
    letterSpacing: -0.8, 
    textAlign: 'center' 
  },
  scoreCircle: { 
    width: 160, 
    height: 160, 
    borderRadius: 80, 
    backgroundColor: '#FFFFFF', 
    borderWidth: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 32, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8, 
    elevation: 4 
  },
  scorePercentage: { 
    fontSize: 42, 
    fontWeight: '900', 
    letterSpacing: -1 
  },
  scoreText: { 
    fontSize: 16, 
    color: '#000000', 
    marginTop: 6, 
    fontWeight: '600' 
  },
  resultStats: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 8, 
    gap: 16 
  },
  resultDivider: { 
    width: 1, 
    height: 60, 
    backgroundColor: '#e5e7eb' 
  },
  resultStatItem: { 
    alignItems: 'center', 
    gap: 12, 
    paddingHorizontal: 24 
  },
  statIconContainer: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  resultStatNumber: { 
    fontSize: 32, 
    fontWeight: '900', 
    color: '#000000' 
  },
  resultStatLabel: { 
    fontSize: 14, 
    color: '#000000', 
    fontWeight: '700', 
    textTransform: 'uppercase', 
    letterSpacing: 0.5 
  },
  adviceContainer: { 
    backgroundColor: '#ABD1C6', 
    borderRadius: 16, 
    padding: 20, 
    marginTop: 20, 
    width: '100%' 
  },
  adviceTitle: { 
    fontSize: 16, 
    fontWeight: '800', 
    color: '#004643', 
    marginBottom: 8, 
    textAlign: 'center' 
  },
  adviceText: { 
    fontSize: 14, 
    color: '#004643', 
    lineHeight: 20, 
    textAlign: 'center', 
    fontWeight: '500' 
  },
  
  // Result Actions
  resultActionsContainer: { 
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 24, 
    paddingVertical: 20, 
    borderTopWidth: 1, 
    borderTopColor: '#e5e7eb' 
  },
  resultActions: { 
    flexDirection: 'row', 
    gap: 12, 
    width: '100%' 
  },
  resultActionsRow: { 
    flexDirection: 'row', 
    gap: 12, 
    width: '100%', 
    marginTop: 12 
  },
  resultButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 8, 
    paddingVertical: 16, 
    borderRadius: 16 
  },
  primaryButton: { 
    flex: 1, 
    backgroundColor: '#004643', 
    borderRadius: 12 
  },
  primaryButtonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '800' 
  },
  homeButton: { 
    flex: 1, 
    backgroundColor: '#004643', 
    borderRadius: 12 
  },
  homeButtonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '800' 
  },
  tertiaryButton: { 
    flex: 1, 
    backgroundColor: '#ABD1C6', 
    borderRadius: 12 
  },
  tertiaryButtonText: { 
    color: '#004643', 
    fontSize: 16, 
    fontWeight: '700' 
  },
  secondaryButton: { 
    flex: 1, 
    backgroundColor: '#ABD1C6', 
    borderRadius: 12, 
    marginTop: 12 
  },
  secondaryButtonText: { 
    color: '#004643', 
    fontSize: 16, 
    fontWeight: '800' 
  },
  
  // No Questions
  noQuestionsContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 40 
  },
  noQuestionsEmoji: { 
    fontSize: 72, 
    marginBottom: 20 
  },
  noQuestionsTitle: { 
    fontSize: 24, 
    fontWeight: '800', 
    color: '#000000', 
    marginBottom: 12, 
    textAlign: 'center', 
    letterSpacing: -0.5 
  },
  noQuestionsText: { 
    fontSize: 16, 
    color: '#000000', 
    textAlign: 'center', 
    lineHeight: 24, 
    marginBottom: 32 
  }
});