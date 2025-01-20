'use client';

import styles from '@/components/Navigations/ProgrammingTimelineSideNav.module.css';

import TranslatedText from '@/components/TranslatedText';

import { FaMinus } from 'react-icons/fa6';
import { TiMinusOutline } from 'react-icons/ti';
import { RiAlibabaCloudLine } from 'react-icons/ri';

import { useAppContext } from '@/context/AppContext';

const ΣτοιχείοΠλαϊνήςΣτήλης = ({ σελίδα, ύπαρξηΦίλτρων, είδοςΚατηγορίας }) => {
  const { φίλτροΚατάστασηςΓεγονότωνΧρονολογίου, changeEventFilter } =
    useAppContext();

  const handleClickEvent = () => {
    φίλτροΚατάστασηςΓεγονότωνΧρονολογίου === είδοςΚατηγορίας
      ? changeEventFilter('')
      : changeEventFilter(είδοςΚατηγορίας);
  };

  const ενεργάΦίλτραΉΜη =
    ύπαρξηΦίλτρων === 'υπαρκτά' ? 'με-φίλτρα' : 'χωρίς-φίλτρα';

  const επιλεγμένοΉΜη =
    φίλτροΚατάστασηςΓεγονότωνΧρονολογίου === είδοςΚατηγορίας
      ? 'επιλεγμένο'
      : '';

  const χρώμαΕικονιδίου = `χρώμα-εικονιδίου-${είδοςΚατηγορίας
    .toLowerCase()
    .replace(' ', '-')}`;

  const κείμενοΣτοιχείου =
    είδοςΚατηγορίας === 'Ολοκληρωμένο'
      ? 'Ολοκληρωμένα'
      : είδοςΚατηγορίας === 'Παρατημένο'
      ? 'Παρατημένα'
      : είδοςΚατηγορίας;

  const περιεχόμενοΣτοιχείου =
    σελίδα === 'Χρονολόγιο' ? (
      <li
        className={
          styles['στοιχείο'] +
          ' ' +
          styles[`${ενεργάΦίλτραΉΜη}`] +
          ' ' +
          styles[`${επιλεγμένοΉΜη}`]
        }
        onClick={() => handleClickEvent()}
      >
        {φίλτροΚατάστασηςΓεγονότωνΧρονολογίου === είδοςΚατηγορίας ? (
          <RiAlibabaCloudLine className={styles[`${χρώμαΕικονιδίου}`]} />
        ) : είδοςΚατηγορίας === 'Εν αναμονή' ||
          είδοςΚατηγορίας === 'Εν εξελίξει' ||
          είδοςΚατηγορίας === 'Ολοκληρωμένο' ||
          είδοςΚατηγορίας === 'Παρατημένο' ? (
          <TiMinusOutline className={styles[`${χρώμαΕικονιδίου}`]} />
        ) : (
          <FaMinus className={styles[`${χρώμαΕικονιδίου}`]} />
        )}
        <div className={styles['κείμενο']}>
          <TranslatedText>{κείμενοΣτοιχείου}</TranslatedText>
        </div>
      </li>
    ) : (
      <li className={styles['στοιχείο']}>
        {είδοςΚατηγορίας === 'Εν αναμονή' ||
        είδοςΚατηγορίας === 'Εν εξελίξει' ||
        είδοςΚατηγορίας === 'Ολοκληρωμένο' ||
        είδοςΚατηγορίας === 'Παρατημένο' ? (
          <TiMinusOutline className={styles[`${χρώμαΕικονιδίου}`]} />
        ) : (
          <FaMinus className={styles[`${χρώμαΕικονιδίου}`]} />
        )}
        <div className={styles['κείμενο']}>
          <TranslatedText>{κείμενοΣτοιχείου}</TranslatedText>
        </div>
      </li>
    );

  return περιεχόμενοΣτοιχείου;
};

export default ΣτοιχείοΠλαϊνήςΣτήλης;
