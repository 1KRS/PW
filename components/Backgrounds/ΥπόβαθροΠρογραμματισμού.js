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
        μέγεθος={μέγεθοςΓραμματοσειράς && Number(μέγεθοςΓραμματοσειράς)}
        ταχύτηταΒροχής={ταχύτητα && Number(ταχύτητα)}
        καθυστέρησηΠρότασης={8000}
        πιθανότηταΠρότασης={0.2}
        χρώμαΠρότασης={'#ffbb00'}
        απόσβεσηMs={2000}
        μέγιστεςΕνεργέςΠροτάσεις={6}
      />
      {children}
    </>
  ) : (
    <div className={styles['εικόνα-υποβάθρου']}>{children}</div>
  );
};
export default ProgrammingBackground;
