import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.grid}>
        <Link href="/train/od" className={styles.disciplineBox}>
          <h2>Основная дисциплина</h2>
          <p>Медленные вопросики</p>
        </Link>
        <Link href="/train/si" className={styles.disciplineBox}>
          <h2>Своя игра</h2>
          <p>Быстрые вопросики</p>
        </Link>
        <Link href="/train/bingo" className={styles.disciplineBox}>
          <h2>БИНГО</h2>
          <p>Знашка мастхэв</p>
        </Link>
      </div>
    </div>
  )
}

