'use client';

import { useEffect, useState } from 'react';
import styles from './WelcomeOverlay.module.css';

export default function WelcomeScreenVariantB() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while overlay is visible
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Hold for 1000ms then allow CSS fade for 750ms, unmount after ~2.0s total
    const total = 1750; // 1000ms hold + 750ms fade
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = prev;
    }, total);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = prev;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.overlay} aria-hidden>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          <span className={styles.topLine}>Welcome To</span>
          <span className={styles.brandLine}>Pear Tree Dental</span>
        </h1>
        <img
          className={styles.awardImage}
          src="/images/pear-tree-dental-private-dentistry-awards-finalist.webp"
          alt="Private Dentistry Awards Finalist"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
