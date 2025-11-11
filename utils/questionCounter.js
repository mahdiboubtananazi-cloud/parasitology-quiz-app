// utils/questionCounter.js
export const questionCounter = {
  getTotalQuestions: (questions) => {
    let total = 0;
    Object.keys(questions).forEach(key => {
      if (Array.isArray(questions[key])) {
        total += questions[key].length;
      }
    });
    return total;
  },
  
  getRandomQuestions: (questions, count) => {
    const allQuestions = [];
    Object.keys(questions).forEach(key => {
      if (Array.isArray(questions[key])) {
        allQuestions.push(...questions[key]);
      }
    });
    return allQuestions.sort(() => Math.random() - 0.5).slice(0, count);
  }
};
