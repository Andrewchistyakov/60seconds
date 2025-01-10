'use client'

import { useState } from 'react'
import styles from './bingo.module.css'
import { BingoPackage } from './page'
import BingoTraining from './BingoTraining'

interface BingoDetailsProps {
  package: BingoPackage;
}

export default function BingoDetails({ package: pkg }: BingoDetailsProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return <BingoTraining package={pkg} onFinish={() => setIsPlaying(false)} />
  }

  return (
    <div className={styles.packageDetails}>
      <h2 className={styles.packageTitle}>{pkg.name}</h2>
      <p className={styles.packageDescription}>{pkg.description}</p>
      <button className={styles.playButton} onClick={() => setIsPlaying(true)}>Play Bingo</button>
    </div>
  )
}

