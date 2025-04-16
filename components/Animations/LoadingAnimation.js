import styles from './LoadingAnimation.module.css';

import Μετάφραση from '../Μετάφραση';

const LoadingAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <span className={styles.loading}>
        <Μετάφραση>Φόρτωση...</Μετάφραση>
      </span>
    </div>
  );
};

export default LoadingAnimation;
