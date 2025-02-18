'use client';

import styles from './ΔιακόπτηςΥαλομορφισμού.module.css';

import { useAppContext } from '@/context/AppContext';

const GlassmorphismToggleButton = () => {
  const { μορφήΣτοιχείων, αλλαγήΜορφήςΣτοιχείων } = useAppContext();

  let τύποςΜορφής =
    μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ||
    μορφήΣτοιχείων === 'αδιαφανή στοιχεία'
      ? 'υαλομορφισμός'
      : 'ημιδιαφανή στοιχεία';

  const κατάστασηΠεριγράμματος =
    μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ||
    μορφήΣτοιχείων === 'αδιαφανή στοιχεία'
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
            τύποςΜορφής === 'αδιαφανή στοιχεία'
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

export default GlassmorphismToggleButton;
