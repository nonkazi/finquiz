import React, { useState } from 'react';
import './styles.css';

function Questions({ question, correctAnswer, onAnswer }) {
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (answer) => {
    const correct = answer.toLowerCase() === correctAnswer.toLowerCase();
    setIsCorrect(correct);
    onAnswer(correct);
  };

  return (
    <div className="question-container">
      <p className="question">{question}</p>
      <button className="option" onClick={() => handleAnswer('true')}>
        True
      </button>
      <button className="option" onClick={() => handleAnswer('false')}>
        False
      </button>
      {isCorrect !== null && <p className={isCorrect ? 'correct-message' : 'incorrect-message'}>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>}
    </div>
  );
}

export default Questions;
