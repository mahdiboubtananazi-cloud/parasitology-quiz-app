import { useState, useEffect, useCallback, useRef } from 'react';

export default function useQuizLogic(
  allQuestionsData,
  convertToQuestions,
  resetAnimations,
  categoryId
) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState([]); // ✅ NEW: لتخزين الأخطاء
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ topics: [] });
  const [showNoQuestions, setShowNoQuestions] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const quizStartTimeRef = useRef(null);
  const questionStartTimeRef = useRef(null);

  // Initialize questions on mount
  useEffect(() => {
    if (!isInitialized && allQuestionsData && convertToQuestions) {
      try {
        const questions = convertToQuestions(allQuestionsData);
        setAllQuestions(questions);
        setFilteredQuestions(questions);
        setIsInitialized(true);
        
        if (questions.length > 0 && !quizStartTimeRef.current) {
          quizStartTimeRef.current = Date.now();
        }
      } catch (error) {
        console.error('Error initializing questions:', error);
      }
    }
  }, []);

  // Handle category change
  useEffect(() => {
    if (categoryId && isInitialized) {
      try {
        const newQuestions = convertToQuestions(allQuestionsData);
        setAllQuestions(newQuestions);
        setFilteredQuestions(newQuestions);

        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setMistakes([]); // ✅ Reset mistakes
        setShowExplanation(false);
        setShowResult(false);
        setShowNoQuestions(false);
        setSelectedFilters({ topics: [] });
        setTimeLeft(30);
        
        quizStartTimeRef.current = Date.now();
        
        if (resetAnimations) {
          resetAnimations();
        }
      } catch (error) {
        console.error('Error changing category:', error);
      }
    }
  }, [categoryId]);

  const handleApplyFilters = useCallback((filters) => {
    if (!allQuestions || allQuestions.length === 0) {
      setShowNoQuestions(true);
      setFilteredQuestions([]);
      return;
    }

    if (!filters.topics || filters.topics.length === 0) {
      setFilteredQuestions(allQuestions);
      setShowNoQuestions(false);
      setSelectedFilters({ topics: [] });
    } else {
      const selectedTopics = filters.topics.map(t => t.toLowerCase().trim());
      const filtered = allQuestions.filter(question => {
        const questionTopic = question.topic?.toLowerCase().trim();
        return selectedTopics.includes(questionTopic);
      });

      if (filtered.length === 0) {
        setShowNoQuestions(true);
        setFilteredQuestions([]);
      } else {
        setShowNoQuestions(false);
        setFilteredQuestions(filtered);
      }

      setSelectedFilters(filters);
    }

    // Reset game state
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setMistakes([]); // ✅ Reset mistakes
    setShowExplanation(false);
    setShowResult(false);
    setTimeLeft(30);
    setShowFilterModal(false);
    
    quizStartTimeRef.current = Date.now();
    
    if (resetAnimations) {
      resetAnimations();
    }
  }, [allQuestions, resetAnimations]);

  // Timer effect
  useEffect(() => {
    if (filteredQuestions.length === 0 || showExplanation || showResult) return; // Stop timer if explanation shown

    setTimeLeft(30);
    questionStartTimeRef.current = Date.now();

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          
          // ✅ Time's up! Treat as wrong answer
          setMistakes(prev => [...prev, {
            ...filteredQuestions[currentQuestion],
            userAnswer: null, // No answer selected
            timeOut: true
          }]);
          
          setShowExplanation(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, filteredQuestions.length, showExplanation, showResult]);

  const handleAnswerSelect = useCallback((answerIndex) => {
    if (showExplanation || filteredQuestions.length === 0) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const currentQ = filteredQuestions[currentQuestion];
    
    if (answerIndex === currentQ.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    } else {
      // ✅ Wrong answer! Add to mistakes list
      setMistakes(prev => [...prev, {
        ...currentQ,
        userAnswer: answerIndex,
        userAnswerText: currentQ.options[answerIndex], // Store text for better review
        correctAnswerText: currentQ.options[currentQ.correctAnswer]
      }]);
    }
  }, [showExplanation, filteredQuestions, currentQuestion]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion + 1 < filteredQuestions.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(30);
      if (resetAnimations) {
        resetAnimations();
      }
    } else {
      setShowResult(true);
    }
  }, [currentQuestion, filteredQuestions.length, resetAnimations]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setMistakes([]); // ✅ Reset mistakes
    setShowExplanation(false);
    setShowResult(false);
    setShowNoQuestions(false);
    setTimeLeft(30);
    
    quizStartTimeRef.current = Date.now();
    
    if (resetAnimations) {
      resetAnimations();
    }
  }, [resetAnimations]);

  const resetAllFilters = useCallback(() => {
    setSelectedFilters({ topics: [] });
    setFilteredQuestions(allQuestions);
    setShowNoQuestions(false);
    resetQuiz();
  }, [allQuestions, resetQuiz]);

  const getElapsedTime = useCallback(() => {
    if (!quizStartTimeRef.current) return 0;
    const elapsed = Date.now() - quizStartTimeRef.current;
    return Math.floor(elapsed / 1000);
  }, []);

  return {
    currentQuestion,
    selectedAnswer,
    score,
    mistakes, // ✅ Export this to use in UI
    showExplanation,
    showResult,
    filteredQuestions,
    timeLeft,
    showFilterModal,
    setShowFilterModal,
    selectedFilters,
    showNoQuestions,
    handleApplyFilters,
    handleAnswerSelect,
    handleNextQuestion,
    resetQuiz,
    resetAllFilters,
    getElapsedTime,
    quizStartTimeRef
  };
}
