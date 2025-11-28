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
        μέγεθοςΣταγόνων={12}
        ταχύτηταΒροχής={80}
        καθυστέρησηΠαραγγελμάτων={6000}
        πιθανότηταΠαραγγελμάτων={0.075}
        χρώμαΠαραγγέλματος='gold'
        απόσβεσηΠαραγγέλματος={3000}
      />
      {children}
    </>
  ) : (
    <div className={styles['εικόνα-υποβάθρου']}>{children}</div>
  );
};
export default ProgrammingBackground;
