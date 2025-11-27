'use client';

import styles from './ΥπόβαθροΠρογραμματισμού.module.css';

import ΔυαδικήΒροχή from './ΔυαδικήΒροχή';
import { useAppContext } from '@/context/AppContext';

const ProgrammingBackground = ({
  children,
}) => {
  const { υπόβαθροΠρογραμματισμού } = useAppContext();

  return υπόβαθροΠρογραμματισμού === 'δυναμικό' ? (
    <>
      <ΔυαδικήΒροχή
        τύποςΟθόνης='κανονικός'
        μέγεθοςΣταγόνων={14}
        ταχύτηταΒροχής={95}
        καθυστέρησηΠαραγγελμάτων={8000}
        πιθανότηταΠαραγγελμάτων={0.1}
        χρώμαΠαραγγέλματος='gold'
        απόσβεσηΠαραγγέλματος={2750}
      />
      {children}
    </>
  ) : (
    <div className={styles['εικόνα-υποβάθρου']}>{children}</div>
  );
};
export default ProgrammingBackground;
