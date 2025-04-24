'use client';

import styles from '@/components/Navigations/ΠλαϊνήΣτήληΧρονολογίουΠρογραμματισμού.module.css';

import Μετάφραση from '@/components/Μετάφραση';

import { FaMinus } from 'react-icons/fa6';
import { TiMinusOutline } from 'react-icons/ti';
import { RiAlibabaCloudLine } from 'react-icons/ri';

import { useAppContext } from '@/context/AppContext';

const SideNavItem = ({ σελίδα, ύπαρξηΦίλτρων, είδοςΚατηγορίας }) => {
  const { φίλτροΚατάστασηςΓεγονότωνΧρονολογίου, changeEventFilter } =
    useAppContext();

  const handleClickEvent = () => {
    φίλτροΚατάστασηςΓεγονότωνΧρονολογίου === είδοςΚατηγορίας
      ? changeEventFilter('')
      : changeEventFilter(είδοςΚατηγορίας);
  };

  const ενεργάΦίλτραΉΜη =
    ύπαρξηΦίλτρων === 'υπαρκτά' ? 'με-φίλτρα' : 'χωρίς-φίλτρα';

  const επιλεγμένοΣτοιχείοΉΜη =
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
          styles[`${επιλεγμένοΣτοιχείοΉΜη}`]
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
          <Μετάφραση>{κείμενοΣτοιχείου}</Μετάφραση>
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
          <Μετάφραση>{κείμενοΣτοιχείου}</Μετάφραση>
        </div>
      </li>
    );

  return περιεχόμενοΣτοιχείου;
};

export default SideNavItem;
