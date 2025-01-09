import styles from './bingo.module.css'
import { BingoPackage } from './page'

interface BingoDetailsProps {
  package: BingoPackage;
}

export default function BingoDetails({ package: pkg }: BingoDetailsProps) {
  return (
    <div className={styles.packageDetails}>
      <h2 className={styles.packageTitle}>{pkg.name}</h2>
      <h3 className={styles.packageAuthor}> автор: {pkg.author}</h3>
      <p className={styles.packageDescription}>{pkg.description}</p>
      <button className={styles.playButton}>Play Bingo</button>
    </div>
  )
}