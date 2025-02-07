'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../form.module.css'
import QuestionInput from './QuestionInput'

interface Question {
  question: string;
  answer: string;
  comment: string;
}

interface Tour {
  questions: Question[];
}

export default function ODUploadForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tourAmount, setTourAmount] = useState(1)
  const [currentTour, setCurrentTour] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [tours, setTours] = useState<Tour[]>([{ questions: [] }])
  const [isInputComplete, setIsInputComplete] = useState(false)

  const totalQuestions = tourAmount * 12

  useEffect(() => {
    setTours(prevTours => {
      const newTours = [...prevTours];
      while (newTours.length < tourAmount) {
        newTours.push({ questions: [] });
      }
      return newTours.slice(0, tourAmount);
    });
  }, [tourAmount]);

  const handleQuestionSubmit = (question: Question) => {
    setTours(prevTours => {
      const newTours = [...prevTours];
      const currentTourQuestions = newTours[currentTour - 1].questions;
      
      // Check if the question already exists in the current tour
      const questionExists = currentTourQuestions.some(
        q => q.question === question.question && q.answer === question.answer
      );

      // Only add the question if it doesn't exist and the tour has less than 12 questions
      if (!questionExists && currentTourQuestions.length < 12) {
        currentTourQuestions.push(question);
      }

      return newTours;
    });

    // Move to the next question or tour
    if (currentQuestion < 12) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else if (currentTour < tourAmount) {
      setCurrentTour(prevTour => prevTour + 1);
      setCurrentQuestion(1);
    } else {
      setIsInputComplete(true);
    }
  };

  const handleFinalSubmit = () => {
    // Ensure all tours have exactly 12 questions before submission
    const finalTours = tours.map(tour => ({
      ...tour,
      questions: tour.questions.slice(0, 12)
    }));

    const finalPackage = { 
                        title: title,
                        description: description,
                        tourAmount: tourAmount,
                        tours: finalTours }

    // Here you would typically handle the form submission to your backend
    console.log('Submitting OD package:', finalPackage)
    
    // Reset the form after submission
    setTitle('')
    setDescription('')
    setTourAmount(1)
    setCurrentTour(1)
    setCurrentQuestion(1)
    setTours([{ questions: [] }])
    setIsInputComplete(false)
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Upload Main Discipline (OD) Package</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tourAmount" className={styles.label}>Tour Amount</label>
          <input
            type="number"
            id="tourAmount"
            value={tourAmount}
            onChange={(e) => {
              const value = Math.max(1, Math.min(10, parseInt(e.target.value) || 1))
              setTourAmount(value)
            }}
            className={styles.input}
            min="1"
            max="10"
            required
          />
        </div>
      </form>
      {!isInputComplete ? (
        <>
          <div className={styles.tourInfo}>
            <h2 className={styles.subTitle}>Tour {currentTour}</h2>
            <p>Question {currentQuestion} of 12</p>
          </div>
          <QuestionInput onQuestionSubmit={handleQuestionSubmit} questionNumber={currentQuestion} />
        </>
      ) : (
        <div className={styles.completionMessage}>
          <h2 className={styles.subTitle}>All questions completed!</h2>
          <p>You've entered all {totalQuestions} questions for {tourAmount} tour(s).</p>
          <button onClick={handleFinalSubmit} className={styles.submitButton}>Submit Package</button>
        </div>
      )}
      <Link href="/upload/menu" className={styles.backLink}>Back to Package Selection</Link>
    </div>
  )
}