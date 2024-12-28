'use client'

import { useState } from 'react'
import styles from './od.module.css'
import { Package, Question, Tour } from './page'

const mockPackages: Package[] = [
    {
        "id": "001",
        "title": "DiliCup 1",
        "description": "Explore the rich history and culture of ancient civilizations.",
        "tourAmount": 3,
        "tours": [
          {
            "questions": [
              {
                "question": "What is the significance of the pyramids?",
                "answer": "The pyramids were built as tombs for pharaohs and are a testament to ancient Egyptian engineering.",
                "comment": "A must-see for history enthusiasts!"
              },
              {
                "question": "How did the Romans influence modern architecture?",
                "answer": "Roman architecture introduced the use of arches, domes, and concrete, which are foundational in modern buildings.",
                "comment": "Their innovations are still visible today."
              }
            ]
          }
        ]
      }, 

      {
        "id": "002",
        "title": "Dilicup 2",
        "description": "A thrilling journey through the Amazon rainforest, filled with wildlife and natural wonders.",
        "tourAmount": 2,
        "tours": [
          {
            "questions": [
              {
                "question": "What wildlife can we expect to see?",
                "answer": "You may encounter jaguars, sloths, and a variety of exotic birds.",
                "comment": "Bring your binoculars!"
              },
              {
                "question": "Is it safe to swim in the Amazon River?",
                "answer": "Swimming is not recommended due to strong currents and wildlife.",
                "comment": "Safety first!"
              }
            ]
          },
          {
            "questions": [
        {
          "question": "What dishes will we try in Italy?",
          "answer": "Expect to enjoy pasta, pizza, and gelato, among other traditional dishes.",
          "comment": "Food lovers will be in heaven!"
        },
        {
          "question": "Are there vegetarian options available?",
          "answer": "Yes, most tours offer vegetarian alternatives for all meals.",
          "comment": "Inclusivity is key!"
        }
        ]
          }
        ]
      }
]

interface PackageListProps {
    onSelectPackage: (pkg: Package) => void;
  }
  
  export default function PackageList({ onSelectPackage }: PackageListProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [packages, setPackages] = useState(mockPackages)
    
    // TODO: package search on backend side
    const filteredPackages = packages.filter(pkg =>
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
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
              {pkg.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }