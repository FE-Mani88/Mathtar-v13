'use client'
import React, { useState, useEffect } from 'react';
// import { QuizProgress } from '../QuizProgress/QuizProgress';
import { QuizProgress } from '@/components/templates/Quiz/QuizProgress/QuizProgress';
// import { QuizQuestion } from '../QuizQuestions/QuizQuestions';
import { QuizQuestion } from '../QuizQuestion/QuizQuestion';
// import { QuizResults } from '../QuizResult/QuizResult';
import { QuizResults } from '@/components/templates/Quiz/QuizResults/QuizResults';

export function ActiveQuiz({id, questions, duration, title }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isFinished, setIsFinished] = useState(false);
  // const [quizQuestionst, setQuizQuestionst] = useState([])

  // const quizQuestions = questions[router.query.shortname] || [];
  // const [quizQuestionsState, setQuizQuestionsState] = useState([])

  console.log('js file => ', questions);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     const res = await fetch('/api/questions')
  //     const data = await res.json()
  //     data.forEach(quiz => {
  //       if (quiz.id == router.query.shortname) {
  //         // setQuizQuestionst(quiz)
  //         if (quizQuestionsState.length) {
  //           // setQuizQuestionsState(quiz)
  //           return false
  //         } else {
  //           setQuizQuestionsState((prev) => [...prev, quiz])
  //         }
  //       }
  //     })
  //   }
    
  //   fetchQuestions()
  //   // console.log('quizQuestions => ', quizQuestions);
  // }, [])
  
  // console.log('quiz => ', quizQuestionsState);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isFinished) {
      finishQuiz();
    }
  }, [timeLeft, isFinished]);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(duration * 60);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <QuizResults
        score={calculateScore()}
        totalQuestions={questions.length}
        answers={answers}
        questions={questions}
        quizTitle={title}
        onRetry={handleRetry}
        quizId={id}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 dark:bg-[#121a29] transition-all">
      <div className="max-w-3xl mx-auto">
        <QuizProgress
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
          timeLeft={timeLeft}
        />

        <QuizQuestion
          question={questions[currentQuestion]}
          selectedAnswer={answers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>
    </div>
  );
}