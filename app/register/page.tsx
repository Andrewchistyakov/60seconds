import RegistrationForm from '../components/RegistrationForm'
import styles from './register.module.css'

export default function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <h1>Register for CHGK-trainer</h1>
      <RegistrationForm />
    </div>
  )
}

