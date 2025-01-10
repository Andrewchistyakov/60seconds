'use client'

import { useState } from 'react'
import PackageList from './PackageList'
import BingoDetails from './Bingodetails'
import styles from './bingo.module.css'

export interface BingoQuestion {
  fact: string;
  description: string;
  comment?: string;
}
export interface BingoPackage {
  id: string;
  name: string;
  author: string;
  description: string;
  questions: BingoQuestion[];
}

export default function BingoTrainingPage() {
  const [selectedPackage, setSelectedPackage] = useState<BingoPackage | null>(null)

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Bingo Training</h1>
        {selectedPackage ? (
          <BingoDetails package={selectedPackage} />
        ) : (
          <p className={styles.noSelection}>Select a package to start training</p>
        )}
      </div>
      <PackageList onSelectPackage={setSelectedPackage} />
    </div>
  )
}