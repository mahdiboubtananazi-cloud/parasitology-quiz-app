import { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export default function useQuizAnimations(
  currentQuestion, 
  showExplanation, 
  showResult, 
  timeLeft,
  showFilterModal
) {
  // Animation refs
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const timerPulseAnim = useRef(new Animated.Value(1)).current;
  const explanationFadeAnim = useRef(new Animated.Value(0)).current;
  const explanationSlideAnim = useRef(new Animated.Value(30)).current;
  const resultScaleAnim = useRef(new Animated.Value(0.8)).current;
  const filterSlideAnim = useRef(new Animated.Value(screenHeight)).current;
  const filterFadeAnim = useRef(new Animated.Value(0)).current;

  // Filter animation
  useEffect(() => {
    if (showFilterModal) {
      Animated.parallel([
        Animated.timing(filterSlideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(filterFadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(filterSlideAnim, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(filterFadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [showFilterModal, filterSlideAnim, filterFadeAnim]);

  // Question animations
  useEffect(() => {
    slideAnim.setValue(50);
    scaleAnim.setValue(0.95);
    
    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 60,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 60,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentQuestion, slideAnim, scaleAnim]);

  // Timer animation
  useEffect(() => {
    let timerAnimation;
    
    if (timeLeft <= 10 && timeLeft > 0) {
      timerAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(timerPulseAnim, {
            toValue: 1.2,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(timerPulseAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      );
      timerAnimation.start();
    } else {
      timerPulseAnim.setValue(1);
    }
    
    return () => {
      if (timerAnimation) {
        timerAnimation.stop();
      }
    };
  }, [timeLeft, timerPulseAnim]);

  // Explanation animation
  useEffect(() => {
    if (showExplanation) {
      explanationFadeAnim.setValue(0);
      explanationSlideAnim.setValue(30);
      
      Animated.parallel([
        Animated.timing(explanationFadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(explanationSlideAnim, {
          toValue: 0,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [showExplanation, explanationFadeAnim, explanationSlideAnim]);

  // Results animation
  useEffect(() => {
    if (showResult) {
      Animated.spring(resultScaleAnim, {
        toValue: 1,
        tension: 40,
        friction: 6,
        useNativeDriver: true,
      }).start();
    }
  }, [showResult, resultScaleAnim]);

  const resetAnimations = () => {
    slideAnim.setValue(50);
    scaleAnim.setValue(0.95);
    explanationFadeAnim.setValue(0);
    explanationSlideAnim.setValue(30);
    resultScaleAnim.setValue(0.8);
  };

  return {
    slideAnim,
    scaleAnim,
    timerPulseAnim,
    explanationFadeAnim,
    explanationSlideAnim,
    resultScaleAnim,
    filterSlideAnim,
    filterFadeAnim,
    resetAnimations
  };
}
