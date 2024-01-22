import React, { useState } from 'react';
import Questions from './Questions';
import './styles.css';
import Navbar from './Navbar';

const questionsToPass = 4;

function QuizPage({ level, onLevelComplete }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleQuestionAnswer = (isCorrect) => {
    setQuestionsAnswered(questionsAnswered + 1);

    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (questionsAnswered + 1 === quizQuestions.length) {
      // All questions answered
      setQuizComplete(true);
      if (onLevelComplete) {
        onLevelComplete(correctAnswers >= questionsToPass);
      }
    }
  };

  const quizInstructions = [
    '1. Timely Payments: Pay bills promptly, as on-time payments positively impact your credit score.',

'2. Credit Responsibility: Use credit wisely, keeping credit card balances below 30% of the limit.',

'3. Credit Mix: Maintain a diverse credit portfolio, including credit cards, loans, and a mortgage.',

'4. Regular Monitoring: Check your credit report for errors annually to ensure accuracy.',

'5. Debt Management: Manage existing debts wisely and work towards reducing debt over time.',

'6. Prompt Issue Resolution: Address financial issues promptly, communicating with creditors and seeking assistance if needed.',
  ];

  const quizQuestions = [
    { question: 'Paying bills on time has no impact on your credit score.', correctAnswer: 'false' },
    { question: 'Maintaining a credit card balance close to the credit limit is advisable.', correctAnswer: 'false' },
    { question: 'Regularly checking your credit report for errors is recommended.', correctAnswer: 'true' },
    { question: 'Closing old credit accounts has no effect on your credit score.', correctAnswer: 'false' },
    { question: 'Managing existing debts wisely is important for maintaining good credit.', correctAnswer: 'true' },
  ];
  

  return (
    <div>
      <Navbar />
      <div className="quiz-section">
        <h2 className="quiz-heading">Quiz 1: Building and maintaining good credit</h2>
        
        <div className="quiz-instructions">
          {quizInstructions.map((instruction, index) => (
            <p key={index} className="instruction-text">
              {instruction}
            </p>
          ))}
        </div>
        

        {quizQuestions.map((q, index) => (
          <Questions key={index} question={q.question} correctAnswer={q.correctAnswer} onAnswer={handleQuestionAnswer} />
        ))}

        {quizComplete && (
          <div className="result-container">
            <p className="result-text">Quiz Completed!</p>
            <p className="result-text">Correct Answers: {correctAnswers}</p>
            <p className="result-text">
              {correctAnswers >= questionsToPass
                ? 'Congratulations! You have gained 5 Points and a New Quiz Unlocked.'
                : 'Sorry, You Did Not Pass The Quiz. Please Try Again.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default QuizPage;
