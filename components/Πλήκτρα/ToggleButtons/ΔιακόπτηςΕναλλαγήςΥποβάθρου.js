'use client';

import styles from './ΔιακόπτηςΕναλλαγήςΥποβάθρου.module.css';

import { useAppContext } from '@/context/AppContext';

const BackgroundToggleButton = () => {
  const { programmingBackground, changeBackground } = useAppContext();

  // let checked = programmingBackground === 'static' ? 'Δυναμικό' : 'Στατικό';
  // let unchecked = programmingBackground === 'static' ? 'Στατικό' : 'Δυναμικό';

  let τύποςΥποβάθρου =
    programmingBackground === 'static' ? 'dynamic' : 'static';

  const κατάστασηΠεριγράμματος = programmingBackground === 'static' ? 'ανενεργό' : 'ενεργό'  

  return (
    <div className={styles['περιέκτης-διακόπτη'] + ' ' + styles[`${κατάστασηΠεριγράμματος}`]}>
      <label className={styles['τετράγωνο-επιλογής']}>
        <input
          type="checkbox"
          className={styles['input']}
          checked={τύποςΥποβάθρου === 'static' ? true : false}
          onChange={() => changeBackground(τύποςΥποβάθρου)}
        />
        <div className={styles['διακόπτης']} />
      </label>
    </div>
  );
};

export default BackgroundToggleButton;
