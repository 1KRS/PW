'use client';

import styles from './ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος.module.css';
import { useAppContext } from '@/context/AppContext';


const ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος = ({ children }) => {
  const { showEventColors, toggleEventColors } = useAppContext();

  return (
    <label className={styles['περιέκτης']}>
      <input
        type="checkbox"
        className={styles['πεδίο-επιλογής']}
        checked={showEventColors}
        onClick={() => toggleEventColors(showEventColors)}
      />
      <div className={styles['περίβλημα-πλήκτρο']}>{children}</div>
    </label>
  );
};

export default ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος;
