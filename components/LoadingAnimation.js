import styles from './LoadingAnimation.module.css';

const LoadingAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <span className={styles.loading}>Φόρτωση...</span>
    </div>
  );
};

export default LoadingAnimation;
