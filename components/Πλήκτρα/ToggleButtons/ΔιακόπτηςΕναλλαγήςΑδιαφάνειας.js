'use client';

import styles from './ΔιακόπτηςΕναλλαγήςΑδιαφάνειας.module.css';

import { useAppContext } from '@/context/AppContext';

const OpacityToggleSwitch = () => {
  const { μορφήΣτοιχείων, αλλαγήΜορφήςΣτοιχείων } = useAppContext();

  let τύποςΜορφής =
    μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ||
    μορφήΣτοιχείων === 'υαλομορφισμός'
      ? 'αδιαφανή στοιχεία'
      : 'ημιδιαφανή στοιχεία';

  const κατάστασηΠεριγράμματος =
    μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ||
    μορφήΣτοιχείων === 'υαλομορφισμός'
      ? 'ανενεργό'
      : 'ενεργό';

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
          checked={
            τύποςΜορφής === 'ημιδιαφανή στοιχεία' ||
            τύποςΜορφής === 'υαλομορφισμός'
              ? true
              : false
          }
          onChange={() => αλλαγήΜορφήςΣτοιχείων(τύποςΜορφής)}
        />
        <div className={styles['διακόπτης']} />
      </label>
    </div>
  );
};

export default OpacityToggleSwitch;
