import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'CHGK-trainer',
  description: 'Training platform for intellectual games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={`${styles.header} bg-[#481E14] text-white`}>
        <div className={styles.headerLeft}>
            <h1>CHGK-trainer</h1>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="найти игрока..."
                className={styles.searchInput}
                aria-label="Search for users"
              />
              <button className={styles.searchButton} aria-label="Search">
                Искать
              </button>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}

