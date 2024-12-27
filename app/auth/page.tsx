'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './auth.module.css'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login/register logic
    console.log(isLogin ? 'Logging in' : 'Registering', { email, password, name })
  }

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.authTitle}>{isLogin ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.authInput}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.authInput}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.authInput}
          required
        />
        <button type="submit" className={styles.authButton}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p className={styles.authToggle}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span onClick={() => setIsLogin(!isLogin)} className={styles.authToggleLink}>
          {isLogin ? 'Register' : 'Login'}
        </span>
      </p>
      <Link href="/" className={styles.authBackLink}>
        Back to Home
      </Link>
    </div>
  )
}

