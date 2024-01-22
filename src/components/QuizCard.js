import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({ id, title, topic, language, unlocked }) => {
  return (
    <div className={`quiz-card ${unlocked ? 'unlocked' : 'locked'}`}>
      <h3>{title}</h3>
      <p>Topic: {topic}</p>
      <p>Language: {language}</p>
      {unlocked ? (
        <Link to={`/quiz/${id}`}>
          <button>Start Quiz</button>
        </Link>
      ) : (
        <p>Locked - Complete previous quizzes to unlock</p>
      )}
    </div>
  );
};

export default QuizCard;
