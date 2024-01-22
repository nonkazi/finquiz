import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeaturedQuizzes from './FeaturedQuizzes';
import Navbar from './Navbar';

const quizzesData = [
  { id: 1, title: 'Quiz 1: Basics of Finance', unlocked: true },
  { id: 2, title: 'Quiz 2: Intermediate Finance', unlocked: true },
  { id: 3, title: 'Quiz 3: Advanced Finance', unlocked: false },
];

function HomePage() {
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  const handleLevelCompletion = (quizId) => {
    setCompletedQuizzes((prevCompletedQuizzes) => {
      if (!prevCompletedQuizzes.includes(quizId)) {
        const updatedQuizzes = [...prevCompletedQuizzes, quizId];
        console.log('Completed Quizzes:', updatedQuizzes);
        return updatedQuizzes;
      }
      return prevCompletedQuizzes;
    });
  };

  
  const updatedQuizzesData = quizzesData.map((quiz, index) => ({
    ...quiz,
    unlocked: index === 0 || completedQuizzes.includes(quiz.id - 1),
  }));

  return (
    <div>
      <Navbar />
      <FeaturedQuizzes quizzes={updatedQuizzesData} completedQuizzes={completedQuizzes} onLevelComplete={handleLevelCompletion} />
    </div>
  );
}

export default HomePage;
