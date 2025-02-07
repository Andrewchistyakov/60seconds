import React, { useState } from 'react'
import styles from '../form.module.css'

interface Question {
  question: string;
  answer: string;
  comment: string;
}

interface QuestionInputProps {
  onQuestionSubmit: (question: Question) => void;
  questionNumber: number;
}

export default function QuestionInput({ onQuestionSubmit, questionNumber }: QuestionInputProps) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim() && answer.trim()) {
      onQuestionSubmit({ question, answer, comment })
      setQuestion('')
      setAnswer('')
      setComment('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.subTitle}>Question {questionNumber}</h3>
      <div className={styles.formGroup}>
        <label htmlFor="question" className={styles.label}>Question</label>
        <textarea
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className={styles.textarea}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="answer" className={styles.label}>Answer</label>
        <input
          type="text"
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="comment" className={styles.label}>Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.submitButton} disabled={!question.trim() || !answer.trim()}>
        Submit Question
      </button>
    </form>
  )
}

