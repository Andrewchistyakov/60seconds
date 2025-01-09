'use client'

import { useState } from 'react'
import styles from './bingo.module.css'
import { BingoPackage } from './page'

const mockPackages: BingoPackage[] = [
  { id: '1', name: 'Basic Bingo Package', description: 'A starter package for Bingo training' },
  { id: '2', name: 'Advanced Bingo Words', description: 'Challenging words for experienced players' },
  { id: '3', name: 'Expert Level Bingo', description: 'The most difficult Bingo words available' },
  { id: '4', name: 'Bingo for Beginners', description: 'Easy words to get started with Bingo' },
  { id: '5', name: 'Championship Bingo Training', description: 'Prepare for Bingo championships with these words' },
]

interface PackageListProps {
  onSelectPackage: (pkg: BingoPackage) => void;
}

export default function PackageList({ onSelectPackage }: PackageListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [packages, setPackages] = useState(mockPackages)

  const filteredPackages = packages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.packageList}>
      <h2 className={styles.packageListTitle}>Available Packages</h2>
      <input
        type="text"
        placeholder="Search packages..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <ul className={styles.packageItems}>
        {filteredPackages.map(pkg => (
          <li 
            key={pkg.id} 
            className={styles.packageItem}
            onClick={() => onSelectPackage(pkg)}
          >
            {pkg.name}
          </li>
        ))}
      </ul>
    </div>
  )
}