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
          console.log('🚀 Quiz started at:', new Date(quizStartTimeRef.current).toLocaleTimeString());
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
        setShowExplanation(false);
        setShowResult(false);
        setShowNoQuestions(false);
        setSelectedFilters({ topics: [] });
        setTimeLeft(30);
        
        quizStartTimeRef.current = Date.now();
        questionStartTimeRef.current = Date.now();
        
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

    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setTimeLeft(30);
    setShowFilterModal(false);
    
    quizStartTimeRef.current = Date.now();
    questionStartTimeRef.current = Date.now();
    
    if (resetAnimations) {
      resetAnimations();
    }
  }, [allQuestions, resetAnimations]);

  // Timer effect - without showExplanation dependency
  useEffect(() => {
    if (filteredQuestions.length === 0) return;

    setTimeLeft(30);
    questionStartTimeRef.current = Date.now();

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setShowExplanation(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, filteredQuestions.length]);

  const handleAnswerSelect = useCallback((answerIndex) => {
    if (showExplanation || filteredQuestions.length === 0) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === filteredQuestions[currentQuestion].correctAnswer) {
      setScore(prevScore => prevScore + 1);
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
    setShowExplanation(false);
    setShowResult(false);
    setShowNoQuestions(false);
    setTimeLeft(30);
    
    quizStartTimeRef.current = Date.now();
    questionStartTimeRef.current = Date.now();
    
    if (resetAnimations) {
      resetAnimations();
    }
  }, [resetAnimations]);

  const resetAllFilters = useCallback(() => {
    setSelectedFilters({ topics: [] });
    setFilteredQuestions(allQuestions);
    setShowNoQuestions(false);
    
    quizStartTimeRef.current = Date.now();
    questionStartTimeRef.current = Date.now();
    
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
