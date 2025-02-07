'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../form.module.css'
import { BingoQuestion } from '../../train/bingo/page'

export default function BINGOUploadForm() {
  const [packageName, setPackageName] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [currentFact, setCurrentFact] = useState<BingoQuestion>({ fact: '', description: '' })
  const [facts, setFacts] = useState<BingoQuestion[]>([])

  const handleFactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentFact.fact && currentFact.description) {
      setFacts([...facts, currentFact])
      setCurrentFact({ fact: '', description: '' })
    }
  }

  const handleFinish = () => {
    // Here you would typically handle the form submission to your backend
    const packageData = {
      name: packageName,
      author,
      description,
      facts
    }
    console.log('Submitting BINGO package:', packageData)
    // Reset form after submission
    setPackageName('')
    setAuthor('')
    setDescription('')
    setFacts([])
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Upload Bingo Package</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="packageName" className={styles.label}>Package Name</label>
          <input
            type="text"
            id="packageName"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="author" className={styles.label}>Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            required
          />
        </div>
      </form>

      <h2 className={styles.subTitle}>Add Facts</h2>
      <form onSubmit={handleFactSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="fact" className={styles.label}>Fact</label>
          <input
            type="text"
            id="fact"
            value={currentFact.fact}
            onChange={(e) => setCurrentFact({ ...currentFact, fact: e.target.value })}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="factDescription" className={styles.label}>Fact Description</label>
          <textarea
            id="factDescription"
            value={currentFact.description}
            onChange={(e) => setCurrentFact({ ...currentFact, description: e.target.value })}
            className={styles.textarea}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Add Fact</button>
      </form>

      <div className={styles.factList}>
        <h3>Added Facts: {facts.length}</h3>
        <ul>
          {facts.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleFinish} className={styles.finishButton}>Finish and Upload Package</button>
      <Link href="/upload/menu" className={styles.backLink}>Back to Package Selection</Link>
    </div>
  )
}