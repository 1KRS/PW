'use client';

import styles from './ΔιακόπτηςΕναλλαγήςΥποβάθρου.module.css';

import { useAppContext } from '@/context/AppContext';

const BackgroundToggleButton = () => {
  const { υπόβαθροΠρογραμματισμού, αλλαγήΥποβάθρου } = useAppContext();

  // let checked = υπόβαθροΠρογραμματισμού === 'static' ? 'Δυναμικό' : 'Στατικό';
  // let unchecked = υπόβαθροΠρογραμματισμού === 'static' ? 'Στατικό' : 'Δυναμικό';

  let τύποςΥποβάθρου =
    υπόβαθροΠρογραμματισμού === 'στατικό' ? 'δυναμικό' : 'στατικό';

  const κατάστασηΠεριγράμματος = υπόβαθροΠρογραμματισμού === 'στατικό' ? 'ανενεργό' : 'ενεργό'  

  return (
    <div className={styles['περιέκτης-διακόπτη'] + ' ' + styles[`${κατάστασηΠεριγράμματος}`]}>
      <label className={styles['τετράγωνο-επιλογής']}>
        <input
          type="checkbox"
          className={styles['input']}
          checked={τύποςΥποβάθρου === 'στατικό' ? true : false}
          onChange={() => αλλαγήΥποβάθρου(τύποςΥποβάθρου)}
        />
        <div className={styles['διακόπτης']} />
      </label>
    </div>
  );
};

export default BackgroundToggleButton;
