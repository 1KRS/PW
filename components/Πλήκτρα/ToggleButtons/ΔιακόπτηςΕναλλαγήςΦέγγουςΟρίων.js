'use client';

import styles from './ΔιακόπτηςΕναλλαγήςΦέγγουςΟρίων.module.css';

import { useAppContext } from '@/context/AppContext';

const BorderGlowToggleButton = () => {
  const { εναλλαγήΦέγγουςΟρίων, φέγγοςΟρίων } = useAppContext();

  const κατάστασηΠεριγράμματος =
    φέγγοςΟρίων === true ? 'ενεργό' : 'ανενεργό';

  return (
    <div
      className={
        styles['περιέκτης-διακόπτη'] + ' ' + styles[`${κατάστασηΠεριγράμματος}`]
      }
    >
      <label className={styles['τετράγωνο-επιλογής']}>
        <input
          type="checkbox"
          className={styles['input']}
          checked={φέγγοςΟρίων === true ? true : false}
          onChange={() => εναλλαγήΦέγγουςΟρίων(!φέγγοςΟρίων)}
        />
        <div className={styles['διακόπτης']} />
      </label>
    </div>
  );
};

export default BorderGlowToggleButton;
