'use client'

import { useState } from 'react'
import styles from './bingo.module.css'
import { BingoPackage } from './page'

const mockPackages: BingoPackage[] = [
  { id: '1', name: 'история XX века',author: "andrush4",  description: 'чтобы знашка по совку от зубов отлетала' },
  { id: '2', name: 'исскуство США', author: "andrush4", description: 'чтобы знать что нибудь кроме банок супа уорхола' },
  { id: '3', name: 'страны африки', author: "andrush4", description: 'чтобы быть как даня гаврилов' },
  { id: '4', name: 'литература XXI века в россии', author: "andrush4", description: 'мне бы пригодилось а то хз че тут писать' },
  { id: '5', name: 'команды НХЛ', author: "andrush4", description: 'чтобы тимпопа выносить' },
]

interface PackageListProps {
  onSelectPackage: (pkg: BingoPackage) => void;
}

export default function PackageList({ onSelectPackage }: PackageListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [packages, setPackages] = useState(mockPackages)

  // TODO: package search on backend side
  const handleSearch = () => {
    // This function will be implemented to trigger the backend search
    console.log('Searching for:', searchTerm)
  }

  return (
    <div className={styles.packageList}>
      <h2 className={styles.packageListTitle}>Available Packages</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <ul className={styles.packageItems}>
        {mockPackages.map(pkg => (
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