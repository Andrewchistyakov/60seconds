"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../layout.module.css";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className={`${styles.header} bg-[#481E14] text-white`}>
      <div className={styles.headerLeft}>
        <h1>CHGK-trainer</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for users..."
            className={styles.searchInput}
            aria-label="Search for users"
          />
          <button className={styles.searchButton} aria-label="Search"></button>
        </div>
      </div>
      <div className={styles.headerButtons}>
        <Link href="/" className={styles.headerButton}>
          <span className={styles.headerButtonText}>Main Menu</span>
        </Link>
        {isLoggedIn ? (
          <Link href="/account" className={styles.headerButton}>
            <span className={styles.headerButtonText}>My Account</span>
          </Link>
        ) : (
          <Link
            href="/auth"
            className={styles.headerButton}
            onClick={toggleLogin}
          >
            Login / Register
          </Link>
        )}
        <Link href="/upload/menu" className={styles.headerButton}>
          Upload Question Package
        </Link>
      </div>
    </header>
  );
}
