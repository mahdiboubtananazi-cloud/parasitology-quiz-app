import React from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as globalStyles } from '../QuizScreen_styles/styles';

const getAxisIcon = (label) => {
  const l = label?.toLowerCase() || '';
  if (l.includes('traitement')) return 'medkit-outline';
  if (l.includes('diagnostic')) return 'flask-outline';
  if (l.includes('morphologie')) return 'eye-outline';
  if (l.includes('cycle')) return 'sync-outline';
  if (l.includes('clinique')) return 'pulse-outline';
  return 'bookmark-outline';
};

export default function QuestionCard({ 
  currentQuestion, 
  totalQuestions, 
  questionText, 
  topic,       
  axisConfig,  
  image,       
  timeLeft,
  slideAnim,
  scaleAnim,
  timerPulseAnim
}) {
  
  const axisIconName = getAxisIcon(axisConfig?.label);

  return (
    <View style={globalStyles.questionContainer}>
      
      {/* 1. العداد العائم (كما هو) */}
      <Animated.View
        style={[
          globalStyles.timerContainer,
          timeLeft <= 10 && { borderColor: '#DC2626' },
          { transform: [{ scale: timerPulseAnim }] }
        ]}
      >
        <Text style={[
          globalStyles.timerText,
          timeLeft <= 10 && { color: '#DC2626' }
        ]}>
          {timeLeft}
        </Text>
      </Animated.View>

      {/* 2. كارت السؤال */}
      <Animated.View
        style={[
          globalStyles.questionCard,
          {
            transform: [
              { translateX: slideAnim },
              { scale: scaleAnim }
            ],
            padding: 16, 
            marginBottom: 0, // 🔥 إزالة أي هامش سفلي لرفع الخيارات
          }
        ]}
      >
        {/* ✨ الرأس المدمج (يشمل الآن رقم السؤال) ✨ */}
        <View style={localStyles.compactHeader}>
            
            {/* اليسار: اسم المرض + رقم السؤال */}
            <View style={localStyles.titleContainer}>
                {/* اسم المرض */}
                <Text style={localStyles.compactTitle} numberOfLines={1}>
                    {topic || "Question"}
                </Text>
                
                {/* 🔥 العداد المدمج (New Counter Location) 🔥 */}
                <View style={localStyles.counterBadge}>
                    <Text style={localStyles.counterText}>
                        {currentQuestion + 1}/{totalQuestions}
                    </Text>
                </View>
            </View>

            {/* اليمين: الكبسولة */}
            {axisConfig && (
                <View style={[
                    localStyles.compactCapsule, 
                    { backgroundColor: axisConfig.color + '15' }
                ]}>
                    <Ionicons 
                        name={axisIconName} 
                        size={12} 
                        color={axisConfig.color} 
                        style={{ marginRight: 3 }}
                    />
                    <Text style={[localStyles.compactAxisText, { color: axisConfig.color }]}>
                        {axisConfig.label}
                    </Text>
                </View>
            )}
        </View>

        {/* 🔬 الصورة */}
        {image && (
          <View style={localStyles.compactImageContainer}>
            <Image 
              source={typeof image === 'string' ? { uri: image } : image} 
              style={localStyles.image}
              resizeMode="contain"
            />
          </View>
        )}
        
        {/* نص السؤال */}
        <Text style={localStyles.compactQuestionText}>
            {questionText}
        </Text>

      </Animated.View>
      
      {/* ❌ تم حذف العداد السفلي من هنا لتوفير المساحة */}
      
    </View>
  );
}

const localStyles = StyleSheet.create({
  compactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 8,
  },
  
  titleContainer: {
    flex: 1,
    flexDirection: 'row', // وضعنا الاسم والعداد بجانب بعض
    alignItems: 'center',
    paddingRight: 8,
    gap: 8, // مسافة بين الاسم والعداد
  },
  compactTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    maxWidth: '65%', // لضمان عدم تغطية العداد في الشاشات الصغيرة
  },

  // تصميم العداد الجديد (صغير ورمادي)
  counterBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  counterText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
  },

  compactCapsule: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  compactAxisText: {
    fontSize: 11, 
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  compactQuestionText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1E293B',
    lineHeight: 24,
    textAlign: 'left',
  },

  compactImageContainer: {
    width: '100%',
    height: 160,
    backgroundColor: '#000',
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});