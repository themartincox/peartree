'use client';

import { useEffect, useState } from 'react';
import styles from './WelcomeOverlay.module.css';

export default function WelcomeScreenVariantB() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while overlay is visible
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Hold for ~0.5s then allow CSS fade (0.5s), unmount after ~1s total
    const total = 1000; // 500ms hold + 500ms fade
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
        <h1 className={styles.text}>Welcome to Pear Tree Dental</h1>
      </div>
    </div>
  );
}
