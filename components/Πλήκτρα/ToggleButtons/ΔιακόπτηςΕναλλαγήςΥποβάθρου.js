'use client';

import styles from './ΔιακόπτηςΕναλλαγήςΥποβάθρου.module.css';
import { useAppContext } from '@/context/AppContext';

const BackgroundToggleButton = () => {
  const { programmingBackground, changeBackground } = useAppContext();

  // let checked = programmingBackground === 'static' ? 'Δυναμικό' : 'Στατικό';
  // let unchecked = programmingBackground === 'static' ? 'Στατικό' : 'Δυναμικό';

  let backgroundType =
    programmingBackground === 'static' ? 'dynamic' : 'static';

  return (
    <div className={styles['container']}>
      <label className={styles['toggle-box']}>
        <input
          type="checkbox"
          className={styles['input']}
          checked={backgroundType === 'static' ? true : false}
          onChange={() => changeBackground(backgroundType)}
        />
        <div className={styles['button']}></div>
      </label>
    </div>
  );
};

export default BackgroundToggleButton;
