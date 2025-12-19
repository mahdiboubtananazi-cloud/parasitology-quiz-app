import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // --- Layout الرئيسي ---
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // خلفية رمادية فاتحة
  },
  keyboardAvoid: {
    flex: 1,
  },
  
  // الحاوية التي تحتل كامل المساحة المتبقية بعد الهيدر
  content: {
    flex: 1,
    width: '100%',
  },
  
  // الحاوية الداخلية التي توزع العناصر عمودياً
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    // هذا يضمن توزيع العناصر: السؤال فوق، والخيارات في الوسط، والزر تحت
    justifyContent: 'flex-start', 
  },

  // --- Header ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    zIndex: 20,
  },
  questionCounterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 8,
  },

  // --- Question Card Container ---
  // نستخدم flexShrink لمنع السؤال من دفع الخيارات خارج الشاشة إذا كان طويلاً
  questionContainer: {
    marginTop: 20,
    marginBottom: 15,
    position: 'relative',
    alignItems: 'center',
    zIndex: 10,
  },

  // --- Timer (The Floating Badge) ---
  timerContainer: {
    position: 'absolute',
    top: -20, // يطفو فوق الكارت
    alignSelf: 'center',
    zIndex: 20, // فوق الكارت دائماً
    width: 44, // حجم صغير
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#004643',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  timerText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#004643',
  },
  timerWarning: {
    borderColor: '#DC2626',
    color: '#DC2626',
  },

  // --- Question Card ---
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 30, // مساحة للعداد
    paddingBottom: 16,
    width: '100%',
    minHeight: 100, // ارتفاع معقول
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  questionText: {
    fontSize: 15, // خط متوسط للقراءة
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 22,
  },
  
  categoryBadge: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: '#E6FFFA',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 9,
    color: '#004643',
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  // --- Options List ---
  // هذه الحاوية تأخذ المساحة المتبقية وتوزع الخيارات
  optionsContainer: {
    flex: 1, 
    justifyContent: 'center', // توسيط الخيارات عمودياً
    gap: 10, // مسافة بين الخيارات
    marginBottom: 10,
    paddingHorizontal: 4, // حماية من الظلال المقطوعة
  },
  
  // --- Individual Option (Compact) ---
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12, // ارتفاع مدمج
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  optionDefault: { backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' },
  optionSelected: { backgroundColor: '#E6FFFA', borderColor: '#004643', borderWidth: 1.5 },
  optionCorrect: { backgroundColor: '#D1FAE5', borderColor: '#10B981', borderWidth: 1.5 },
  optionWrong: { backgroundColor: '#FEE2E2', borderColor: '#EF4444', borderWidth: 1.5 },
  
  optionText: {
    flex: 1,
    fontSize: 13, // خط أصغر قليلاً للخيارات
    fontWeight: '600',
    color: '#374151',
    marginLeft: 10,
    lineHeight: 18,
  },
  optionTextSelected: { color: '#004643', fontWeight: '700' },
  
  // Radio Circle
  optionRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionRadioSelected: { borderColor: '#004643', backgroundColor: '#004643' },

  // --- Bottom Section (Explanation + Button) ---
  // يظهر هذا القسم في الأسفل دائماً
  bottomSection: {
    justifyContent: 'flex-end',
    marginBottom: 5,
  },

  // Explanation Box
  explanationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  explanationCorrect: { borderLeftColor: '#10B981', backgroundColor: '#ECFDF5' },
  explanationWrong: { borderLeftColor: '#EF4444', backgroundColor: '#FEF2F2' },
  
  explanationTitle: {
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 2,
  },
  explanationText: {
    flex: 1,
    fontSize: 12,
    color: '#374151',
    lineHeight: 16,
  },
  explanationHeader: {
    // حاوية للأيقونة والعنوان إذا لزم الأمر
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  // Next Button
  nextButton: {
    backgroundColor: '#004643',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // --- No Questions / Loading ---
  noQuestionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noQuestionsEmoji: { fontSize: 60, marginBottom: 20 },
  noQuestionsTitle: { fontSize: 20, fontWeight: '700', color: '#1F2937', marginBottom: 10 },
  noQuestionsText: { fontSize: 14, color: '#6B7280', textAlign: 'center', lineHeight: 20 },

  // --- Filter Modal ---
  filterModalOverlay: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 100,
  },
  filterModalContainer: { flex: 1, justifyContent: 'flex-end' },
  filterModalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '60%',
  },
});
