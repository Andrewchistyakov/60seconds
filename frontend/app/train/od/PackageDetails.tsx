import styles from './od.module.css'
import { Package, Question, Tour } from './page'

interface PackageDetailsProps {
  package: Package;
}

export default function PackageDetails({ package: pkg }: PackageDetailsProps) {
  return (
    <div className={styles.packageDetails}>
      <h2 className={styles.packageTitle}>{pkg.title}</h2>
      <p className={styles.packageDescription}>{pkg.description}</p>
      <button className={styles.playButton}>Play</button>
    </div>
  )
}

