'use client';

import styles from './ΔιακόπτηςΕναλλαγήςΦέγγουςΣτοιχείων.module.css';

import { useAppContext } from '@/context/AppContext';

const ElementGlowToggleButton = () => {
  const { εναλλαγήΦέγγουςΣτοιχείων, φέγγοςΣτοιχείων } = useAppContext();

  const κατάστασηΠεριγράμματος =
    φέγγοςΣτοιχείων === true ? 'ενεργό' : 'ανενεργό';

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
          checked={φέγγοςΣτοιχείων === true ? true : false}
          onChange={() => εναλλαγήΦέγγουςΣτοιχείων(!φέγγοςΣτοιχείων)}
        />
        <div className={styles['διακόπτης']} />
      </label>
    </div>
  );
};

export default ElementGlowToggleButton;
