'use client';

import styles from './ΕικονίδιοΠλαϊνήςΣτήλης.module.css';

import { useAppContext } from '@/context/AppContext';

const ΕικονίδιοΠλαϊνήςΣτήλης = ({ είδοςΚατηγορίας, children }) => {
  const { φίλτροΚατάστασηςΓεγονότωνΧρονολογίου, changeEventFilter } =
    useAppContext();

  const handleClickEvent = () => {
    φίλτροΚατάστασηςΓεγονότωνΧρονολογίου === είδοςΚατηγορίας
      ? changeEventFilter('')
      : changeEventFilter(είδοςΚατηγορίας);
  };

  return (
    <li className={styles['εικονίδιο']} onClick={() => handleClickEvent()}>
      {children}
    </li>
  );
};

export default ΕικονίδιοΠλαϊνήςΣτήλης;
