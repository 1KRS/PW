'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import { useAppContext } from '@/context/AppContext';

const EventContainer = ({
  μεΉΧωρίςΔευτερεύουσαΓραμμή,
  μεΉΧωρίςΚείμενο,
  μορφήΠεριβλήματος,
  children,
}) => {
  const { showEventColors, μορφήΣτοιχείων, φέγγοςΣτοιχείων } = useAppContext();

  const μόνιμαΧρώματαΉΠροσωρινά = showEventColors ? 'μεΜόνιμαΧρώματα' : '';

  return (
    <div
      className={
        styles['περιεχόμενο-γεγονότος'] +
        ' ' +
        styles[
          `${μορφήΣτοιχείων === 'υαλομορφισμός' ? 'με-υαλομορφισμό' : μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ? 'με-ημιδιαφανή-στοιχεία' : μορφήΣτοιχείων === 'αδιαφανή στοιχεία' ? 'με-αδιαφανή-στοιχεία' : ''}`
        ] +
        ' ' +
        styles[`${φέγγοςΣτοιχείων === true ? 'με-φέγγος-στοιχείων' : ''}`] +
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

export default EventContainer;
