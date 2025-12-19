import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, Animated, View } from 'react-native';
// نستورد الأيقونات بالاسم من ملف الأيقونات العام
// تأكد أن المسار صحيح: نخرج من QuizScreen_components (..) ثم من screens (..) ثم ندخل components
import { Check, X } from '../../components/Icons'; 
import { styles } from '../QuizScreen_styles/styles';

export default function AnimatedOption({
  option,
  isSelected,
  showCorrect,
  showWrong,
  showExplanation,
  onPress,
}) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (showExplanation && (showCorrect || showWrong)) {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.02,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [showExplanation, showCorrect, showWrong]);

  // تحديد الستايل المناسب
  let containerStyle = styles.optionDefault;
  let textStyle = styles.optionText;
  let radioStyle = styles.optionRadio;
  let icon = null;

  if (showCorrect) {
    containerStyle = styles.optionCorrect;
    textStyle = styles.optionTextSelected;
    // أيقونة صح
    icon = <Check size={16} color="#FFFFFF" />;
    radioStyle = [styles.optionRadio, { backgroundColor: '#10B981', borderColor: '#10B981' }];
  } else if (showWrong) {
    containerStyle = styles.optionWrong;
    // أيقونة خطأ
    icon = <X size={16} color="#FFFFFF" />;
    radioStyle = [styles.optionRadio, { backgroundColor: '#EF4444', borderColor: '#EF4444' }];
  } else if (isSelected) {
    containerStyle = styles.optionSelected;
    textStyle = styles.optionTextSelected;
    radioStyle = styles.optionRadioSelected;
  }

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }], opacity: fadeAnim }}>
      <TouchableOpacity
        style={[styles.optionButton, containerStyle]}
        onPress={onPress}
        disabled={showExplanation}
        activeOpacity={0.9}
      >
        <Text style={textStyle}>{option}</Text>
        
        {/* الدائرة أو الأيقونة */}
        <View style={radioStyle}>
          {icon}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
