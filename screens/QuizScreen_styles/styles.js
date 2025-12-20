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
    paddingTop: 0, // ✅ تم التعديل: إزالة البادينغ العلوي لتقليل المسافة
    paddingBottom: 20,
    justifyContent: 'flex-start', 
    gap: 12, // ✅ تم التعديل: استخدام gap للتحكم الدقيق بالمسافات
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
    marginTop: 35, // ✅ تم التعديل: مسافة كافية لظهور العداد دون قص
    marginBottom: 10, // ✅ تم التعديل: تقليل المسافة السفلية لتقريب الخيارات
    position: 'relative',
    alignItems: 'center',
    zIndex: 10,
  },

  // --- Timer (The Floating Badge) ---
  timerContainer: {
    position: 'absolute',
    top: -22, // يطفو فوق الكارت بمسافة محسوبة
    alignSelf: 'center',
    zIndex: 20, // فوق الكارت دائماً
    width: 44, 
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
    paddingTop: 30, // ✅ تم التعديل: مساحة داخلية كافية لعدم تغطية العداد للنص
    paddingBottom: 15,
    width: '100%',
    minHeight: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  questionText: {
    fontSize: 16, // ✅ تم التعديل: تكبير الخط قليلاً
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 24,
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
    justifyContent: 'flex-start', // ✅ تم التعديل: محاذاة للأعلى لتقليل الفراغ
    gap: 8, 
    marginBottom: 5,
    paddingHorizontal: 4, 
  },
  
  // --- Individual Option (Compact) ---
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // ✅ تم التعديل: فصل الأيقونة عن النص
    paddingVertical: 12, 
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
    fontSize: 13, 
    fontWeight: '600',
    color: '#374151',
    lineHeight: 18,
    marginRight: 10, // ✅ تم التعديل: مسافة أمان
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
  bottomSection: {
    justifyContent: 'flex-end',
    marginBottom: 5,
  },

  // ✅ Explanation Box (New Design)
  explanationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    marginTop: 5,
    borderWidth: 1, // ✅ تم التعديل: إطار كامل
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  // ستايلات ديناميكية
  explanationCorrect: { 
    backgroundColor: '#F0FDF4', 
    borderColor: '#BBF7D0' 
  },
  explanationWrong: { 
    backgroundColor: '#FEF2F2', 
    borderColor: '#FECACA' 
  },
  
  explanationTitle: {
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 4,
    color: '#1F2937',
  },
  explanationText: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 20,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8, // مسافة بين الأيقونة والعنوان
  },

  // Next Button
  nextButton: {
    backgroundColor: '#004643',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#004643',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },
  filterModalContainer: { flex: 1, justifyContent: 'flex-end' },
  filterModalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
  },
});
