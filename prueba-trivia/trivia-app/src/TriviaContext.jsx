import { createContext, useState } from 'react';

export const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const incrementScore = (points) => {
    setScore(prev => prev + points);
    setAnsweredCount(prev => prev + 1);
  };

  const resetGame = () => {
    setScore(0);
    setAnsweredCount(0);
  };

  return (
    <TriviaContext.Provider value={{ score, answeredCount, incrementScore, resetGame }}>
      {children}
    </TriviaContext.Provider>
  );
};