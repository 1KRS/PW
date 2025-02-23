'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΦίλτραΓεγονότων from '@/components/Χρονολόγιο/ΦίλτραΓεγονότων';

import { useAppContext } from '@/context/AppContext';

const ΣτοιχείαΧρονολογίου = () => {
  const { μορφήΣτοιχείων } = useAppContext();

  return (
    <>
      <div
        className={
          styles['στοιχεία-χρονολογίου'] +
          ' ' +
          styles[
            `${μορφήΣτοιχείων === 'υαλομορφισμός' ? '' : 'με-θολό-κάλυμμα'}`
          ]
        }
      >
        <ΦίλτραΓεγονότων />
      </div>
    </>
  );
};
export default ΣτοιχείαΧρονολογίου;


