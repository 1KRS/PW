'use client';

/* eslint-disable react-hooks/rules-of-hooks */

import styles from './ΥπόβαθροΠρογραμματισμού.module.css';

import ΔυαδικήΒροχή from './ΔυαδικήΒροχή';
import { useAppContext } from '@/context/AppContext';

const ΥπόβαθροΠρογραμματισμού = ({ children }) => {
  const { υπόβαθροΠρογραμματισμού } = useAppContext();

  return υπόβαθροΠρογραμματισμού === 'δυναμικό' ? (
    <>
      <ΔυαδικήΒροχή
        τύποςΟθόνης="κανονικός"
        μέγεθοςΣταγόνων={12}
        ταχύτηταΒροχής={90}
        καθυστέρησηΠαραγγελμάτων={6500}
        πιθανότηταΠαραγγελμάτων={0.075}
        χρώμαΠαραγγέλματος="gold"
        απόσβεσηΠαραγγέλματος={2000}
      />
      {children}
    </>
  ) : (
    <div className={styles['εικόνα-υποβάθρου']}>{children}</div>
  );
};
export default ΥπόβαθροΠρογραμματισμού;
