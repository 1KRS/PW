'use client';

import styles from './ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος.module.css';
import { useAppContext } from '@/context/AppContext';

const ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος = ({ σελίδα, children }) => {
  const { showEventColors, toggleEventColors } = useAppContext();

  return (
    <>
      {σελίδα === 'Χρονολόγιο' ? (
        <label className={styles['περιέκτης']}>
          <input
            type="checkbox"
            className={styles['πεδίο-επιλογής']}
            checked={showEventColors}
            onChange={() => toggleEventColors()}
          />
          <div
            className={styles['περίβλημα-πλήκτρο'] + ' ' + styles['ενεργό']}
          >
            {children}
          </div>
        </label>
      ) : (
        <div className={styles['περιέκτης']}>
          <div className={styles['πεδίο-επιλογής']} />
          <div className={styles['περίβλημα-πλήκτρο'] + ' ' + styles['ανενεργό']}>{children}</div>
        </div>
      )}
    </>
  );
};

export default ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος;
