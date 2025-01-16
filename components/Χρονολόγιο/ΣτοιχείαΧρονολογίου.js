'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΦίλτραΓεγονότων from '@/components/Χρονολόγιο/ΦίλτραΓεγονότων';

const ΣτοιχείαΧρονολογίου = () => {
  return (
    <>
      <div className={styles['στοιχεία-χρονολογίου']}>
        <ΦίλτραΓεγονότων />
      </div>
    </>
  );
};
export default ΣτοιχείαΧρονολογίου;
