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
          <h1>CHGK-trainer</h1>
          <div className={styles.headerButtons}>
            <Link href="/" className={styles.headerButton}>
              <span className={styles.headerButtonText}>Main Menu</span>
            </Link>
            <Link href="/auth" className={styles.headerButton}>
              Login / Register
            </Link>
            <Link href="/upload/menu" className={styles.headerButton}>
              Upload Question Package
            </Link>
          </div>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}

