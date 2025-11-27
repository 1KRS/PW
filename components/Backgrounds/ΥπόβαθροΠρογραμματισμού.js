'use client';

import styles from './ΥπόβαθροΠρογραμματισμού.module.css';

import ΔυαδικήΒροχή from './ΔυαδικήΒροχή';
import { useAppContext } from '@/context/AppContext';

const ProgrammingBackground = ({
  screenType: τύποςΟθόνης,
  fontSize: μέγεθοςΓραμματοσειράς,
  speed: ταχύτητα,
  children,
}) => {
  const { υπόβαθροΠρογραμματισμού } = useAppContext();

  return υπόβαθροΠρογραμματισμού === 'δυναμικό' ? (
    <>
      <ΔυαδικήΒροχή
        τύποςΟθόνης={τύποςΟθόνης}
        μέγεθοςΣταγόνων={μέγεθοςΓραμματοσειράς}
        ταχύτηταΒροχής={ταχύτητα}
        καθυστέρησηΠαραγγελμάτων={8000}
        πιθανότηταΠαραγγελμάτων={0.2}
        χρώμαΠαραγγέλματος={'#ffbb00'}
        απόσβεσηΠαραγγέλματος={2000}
      />
      {children}
    </>
  ) : (
    <div className={styles['εικόνα-υποβάθρου']}>{children}</div>
  );
};
export default ProgrammingBackground;
