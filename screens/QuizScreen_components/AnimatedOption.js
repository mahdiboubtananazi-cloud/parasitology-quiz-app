// screens/QuizScreen_components/AnimatedOption.js
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, Animated, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../QuizScreen_styles/styles'; // ✅ استيراد الأنماط من styles.js

export default function AnimatedOption({ 
  option, 
  index, 
  isSelected, 
  isCorrect, 
  showResult, 
  onPress 
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // أنيميشن الظهور الأولي
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        delay: index * 50, // تأخير تدريجي لكل خيار
        useNativeDriver: true,
      }),
      Animated.spring(opacityAnim, {
        toValue: 1,
        tension: 100,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  useEffect(() => {
    if (isSelected && showResult) {
      // أنيميشن عند إظهار النتيجة
      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 1.05,
          tension: 100,
          friction: 5,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isSelected, showResult, scaleAnim]);

  // تحديد نمط الزر حسب الحالة
  const getButtonStyle = () => {
    if (showResult) {
      // عند إظهار النتائج
      if (isSelected && isCorrect) {
        return styles.optionCorrect; // إجابة صحيحة محددة
      }
      if (isSelected && !isCorrect) {
        return styles.optionWrong; // إجابة خاطئة محددة
      }
      if (!isSelected && isCorrect) {
        return styles.optionCorrect; // الإجابة الصحيحة (غير محددة)
      }
    }
    // قبل إظهار النتائج
    if (isSelected) {
      return styles.optionSelected; // الخيار المحدد
    }
    return styles.optionDefault; // الحالة الافتراضية
  };

  // تحديد الأيقونة حسب الحالة
  const getIcon = () => {
    if (showResult) {
      if (isCorrect) {
        return (
          <View style={styles.optionIconContainer}>
            <Ionicons name="checkmark-circle" size={22} color="#10B981" />
          </View>
        );
      }
      if (isSelected && !isCorrect) {
        return (
          <View style={styles.optionIconContainer}>
            <Ionicons name="close-circle" size={22} color="#EF4444" />
          </View>
        );
      }
    }
    return null;
  };

  // تحديد نمط التسمية (A, B, C, D)
  const getLabelStyle = () => {
    if (showResult && isCorrect) {
      return [styles.optionLabel, styles.optionLabelCorrect];
    }
    if (showResult && isSelected && !isCorrect) {
      return [styles.optionLabel, styles.optionLabelWrong];
    }
    if (isSelected) {
      return [styles.optionLabel, styles.optionLabelSelected];
    }
    return styles.optionLabel;
  };

  // تحديد نمط حاوية التسمية
  const getLabelContainerStyle = () => {
    if (showResult && isCorrect) {
      return [styles.optionLabelContainer, styles.optionLabelContainerCorrect];
    }
    if (showResult && isSelected && !isCorrect) {
      return [styles.optionLabelContainer, styles.optionLabelContainerWrong];
    }
    if (isSelected) {
      return [styles.optionLabelContainer, styles.optionLabelContainerSelected];
    }
    return styles.optionLabelContainer;
  };

  // تحديد نمط النص
  const getTextStyle = () => {
    if (showResult && isCorrect) {
      return [styles.optionText, styles.optionTextCorrect];
    }
    if (showResult && isSelected && !isCorrect) {
      return [styles.optionText, styles.optionTextWrong];
    }
    if (isSelected) {
      return [styles.optionText, styles.optionTextSelected];
    }
    return styles.optionText;
  };

  return (
    <Animated.View
      style={{
        transform: [
          { scale: scaleAnim },
          {
            translateX: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-50, 0],
            }),
          },
        ],
        opacity: slideAnim,
      }}
    >
      <TouchableOpacity
        style={[styles.optionButton, getButtonStyle()]}
        onPress={() => !showResult && onPress()}
        disabled={showResult}
        activeOpacity={0.85}
      >
        {/* التسمية (A, B, C, D) */}
        <View style={getLabelContainerStyle()}>
          <Text style={getLabelStyle()}>
            {String.fromCharCode(65 + index)}
          </Text>
        </View>

        {/* نص الخيار */}
        <Text style={getTextStyle()}>
          {option}
        </Text>

        {/* الأيقونة (صح أو خطأ) */}
        {getIcon()}
      </TouchableOpacity>
    </Animated.View>
  );
}