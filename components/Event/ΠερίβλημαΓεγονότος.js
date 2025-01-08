'use client';

import styles from '@/components/TimelineItems.module.css';
import { useAppContext } from '@/context/AppContext';

const ΠερίβλημαΓεγονότος = ({
  μεΉΧωρίςΔευτερεύουσαΓραμμή,
  μορφήΠεριβλήματος,
  children,
}) => {
  const { showEventColors } = useAppContext();
  
  const μόνιμαΧρώματαΉΠροσωρινά = showEventColors ? 'μεΜόνιμαΧρώματα' : '';

  return (
    <div
      className={
        styles['περιεχόμενο-γεγονότος'] +
        ' ' +
        styles[`${μεΉΧωρίςΔευτερεύουσαΓραμμή}`] +
        ' ' +
        styles[`${μορφήΠεριβλήματος}`] +
        ' ' +
        styles[`${μόνιμαΧρώματαΉΠροσωρινά}`]
      }
    >
      {children}
    </div>
  );
};

export default ΠερίβλημαΓεγονότος;
