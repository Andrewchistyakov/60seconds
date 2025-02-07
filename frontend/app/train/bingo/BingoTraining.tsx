'use client'

import { useState } from 'react'
import styles from './bingo.module.css'
import { BingoPackage } from './page'

interface BingoTrainingProps {
  package: BingoPackage;
  onFinish: () => void;
}

export default function BingoTraining({ package: pkg, onFinish }: BingoTrainingProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [knownCount, setKnownCount] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = pkg.questions[currentQuestionIndex]

  const handleAnswer = (known: boolean) => {
    if (known) {
      setKnownCount(knownCount + 1)
    }
    if (currentQuestionIndex < pkg.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowAnswer(false)
    } else {
      finishTraining()
    }
  }

  const finishTraining = () => {
    const percentage = (knownCount / pkg.questions.length) * 100
    setIsFinished(true)
    // Here you would typically send the data to your backend
    console.log('Training finished', { packageId: pkg.id, knownPercentage: percentage })
  }

  if (isFinished) {
    const percentage = (knownCount / pkg.questions.length) * 100
    return (
      <div className={styles.finishedContainer}>
        <h2 className={styles.finishedTitle}>Training Completed!</h2>
        <p className={styles.finishedText}>You knew {percentage.toFixed(2)}% of the questions.</p>
        <button className={styles.playButton} onClick={onFinish}>Back to Package Details</button>
      </div>
    )
  }

  return (
    <div className={styles.trainingContainer}>
      <h2 className={styles.trainingTitle}>Bingo Training: {pkg.name}</h2>
      <div className={styles.questionContainer}>
        <p className={styles.questionText}>{currentQuestion.description}</p>
        {showAnswer ? (
          <>
            <p className={styles.answerText}>{currentQuestion.fact}</p>
            <div className={styles.answerButtons}>
              <button className={styles.knownButton} onClick={() => handleAnswer(true)}>Know</button>
              <button className={styles.unknownButton} onClick={() => handleAnswer(false)}>Don't Know</button>
            </div>
          </>
        ) : (
          <button className={styles.showButton} onClick={() => setShowAnswer(true)}>Show Answer</button>
        )}
      </div>
      <div className={styles.progressInfo}>
        <p>Question {currentQuestionIndex + 1} of {pkg.questions.length}</p>
      </div>
      <button className={styles.finishButton} onClick={finishTraining}>Finish</button>
    </div>
  )
}