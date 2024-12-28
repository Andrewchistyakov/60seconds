import PackageList from './PackageList'
import styles from './od.module.css'

export default function ODTrainingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>OD Training</h1>
        {/* Main training area will be implemented here */}
      </div>
      <PackageList />
    </div>
  )
}

