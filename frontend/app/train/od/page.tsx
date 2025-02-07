'use client'

import { useState } from 'react'
import PackageList from './PackageList'
import PackageDetails from './PackageDetails'
import styles from './od.module.css'

export interface Question {
  question: string;
  answer: string;
  comment: string;
}

export interface Tour {
  questions: Question[];
}

export interface Package {
  id: string;
  title: string;
  description: string;
  authors: string;
  tourAmount: number,
  tours: Tour[];
}

export default function ODTrainingPage() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>OD Training</h1>
        {selectedPackage ? (
          <PackageDetails package={selectedPackage} />
        ) : (
          <p className={styles.noSelection}>Select a package to start training</p>
        )}
      </div>
      <PackageList onSelectPackage={setSelectedPackage} />
    </div>
  )
}