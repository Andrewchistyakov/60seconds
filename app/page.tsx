import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.grid}>
        <Link href="/train/od" className={styles.disciplineBox}>
          <h2>Main Discipline (OD)</h2>
          <p>Train your skills in the primary "What? Where? When?" format.</p>
        </Link>
        <Link href="/train/si" className={styles.disciplineBox}>
          <h2>Own Game (SI)</h2>
          <p>Practice your knowledge in various categories with increasing difficulty.</p>
        </Link>
        <Link href="/train/bingo" className={styles.disciplineBox}>
          <h2>Bingo Training</h2>
          <p>Enhance your fact recall abilities with this quick-fire training mode.</p>
        </Link>
      </div>
    </div>
  )
}

