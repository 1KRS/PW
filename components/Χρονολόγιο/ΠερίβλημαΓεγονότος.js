'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';
import { useAppContext } from '@/context/AppContext';

const ΠερίβλημαΓεγονότος = ({
  μεΉΧωρίςΔευτερεύουσαΓραμμή,
  μεΉΧωρίςΚείμενο,
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
        styles[`${μεΉΧωρίςΚείμενο}`] +
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
