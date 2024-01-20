'use client'
import { useState, useEffect } from 'react';
import styles from './TopButton.module.css';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={isVisible ? styles.visible : styles.hidden}
      onClick={scrollToTop}
    >
      &#129045;
    </button>
  );
};

export default TopButton;
