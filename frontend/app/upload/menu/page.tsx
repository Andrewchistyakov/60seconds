import Link from 'next/link'
import styles from './upload.module.css'

const packageTypes = [
  { id: 'od', name: 'Main Discipline (OD)', description: 'Upload OD package' },
  { id: 'si', name: 'Own Game (SI)', description: 'Upload SI package' },
  { id: 'bingo', name: 'Bingo', description: 'Upload Bingo package' },
]

export default function UploadPage() {
  return (
    <div className={styles.uploadContainer}>
      <h1 className={styles.uploadTitle}>Upload Question Package</h1>
      <p className={styles.uploadDescription}>Select the type of question package you want to upload:</p>
      <div className={styles.packageTypeGrid}>
        {packageTypes.map((type) => (
          <Link href={`/upload/${type.id}`} key={type.id} className={styles.packageTypeCard}>
            <h2>{type.name}</h2>
            <p>{type.description}</p>
          </Link>
        ))}
      </div>
      <Link href="/" className={styles.backLink}>
        Back to Home
      </Link>
    </div>
  )
}