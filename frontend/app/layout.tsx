import type { Metadata } from 'next'
import Header from './components/Header'
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
        <Header />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}



