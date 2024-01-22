import React, { useState } from 'react';
import QuizCard from './QuizCard';

const allQuizzes = [
  
   { id: 1, title: 'Quiz 1: Building and maintaining good credit', topic: 'Credit and Debt', language: 'English', unlocked: true },
   { id: 2, title: 'Quiz 2: Understanding credit scores', topic: 'Credit and Debt', language: 'English', unlocked: false },
   { id: 3, title: 'Quiz 3: Managing and reducing debt', topic: 'Credit and Debt', language: 'English', unlocked: false },
   { id: 4, title: 'Quiz 1: Overview of investment options available in South Africa.', topic: 'Investment', language: 'English', unlocked: true },
   { id: 5, title: 'Quiz 2: Risks and benefits of different investment vehicles', topic: 'Investment', language: 'English', unlocked: false },
   { id: 6, title: 'Quiz 3: Guidance on long-term investment strategies', topic: 'Investment', language: 'English', unlocked: false },
   { id: 7, title: 'Quiz 1: Ukuqondisisa Umshwalense.', topic: 'Insurance', language: 'isiZulu', unlocked: true },
   { id: 8, title: 'Quiz 2: Izinhlobo Zomshwalense', topic: 'Insurance', language: 'isiZulu', unlocked: false },
   { id: 9, title: 'Quiz 3: Ukubaluleka Komshwalense', topic: 'Insurance', language: 'isiZulu', unlocked: false },
  
];

function FeaturedQuizzes() {
  const [selectedTopic, setSelectedTopic] = useState('All'); 
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const filteredQuizzes = allQuizzes.filter((quiz) => {

    const isTopicMatch = selectedTopic === 'All' || quiz.topic === selectedTopic;
    const isLanguageMatch = selectedLanguage === 'All' || quiz.language === selectedLanguage;
    return isTopicMatch && isLanguageMatch;
  });

  const topics = ['All', 'Credit and Debt', 'Investment', 'Retirement Planning', 'Insurance']; 
  const languages = ['All', 'Afrikaans' ,
  'English' ,
  'isiNdebele' ,
  'isiXhosa' ,
  'isiZulu' ,
  'Sesotho' ,
  'Setswana' ,
  'siSwati' ,
  'Tshivenda' ,
  'Xitsonga' ,
  'Sepedi'];

  return (
    <div className='profile-section'>
      <h2>Featured Quizzes</h2>
      
      <form>
        <label>
          Topic:
          <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
        <label>
          Language:
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </label>
      </form>

     
      <div className="quiz-cards">
        {filteredQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} title={quiz.title} unlocked={quiz.unlocked} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedQuizzes;
