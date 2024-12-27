'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../form.module.css'

export default function KINSBFUploadForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [questions, setQuestions] = useState('')
  const [tourAmount, setTourAmount] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Submitting KINSBF package:', { title, description, questions })
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Upload Team Speed Game (KINSbF) Package</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Название пакета</label>
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
          <label htmlFor="description" className={styles.label}>Авторы пакета</label>
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
            onChange={(e) => setTourAmount(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
            className={styles.input}
            min="1"
            max="10"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Upload Package</button>
      </form>
      <Link href="/upload/menu" className={styles.backLink}>Back to Package Selection</Link>
    </div>
  )
}

