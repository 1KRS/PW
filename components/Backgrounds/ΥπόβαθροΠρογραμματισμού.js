'use client';

import styles from './ΥπόβαθροΠρογραμματισμού.module.css';

import ΔυαδικήΒροχή from './ΔυαδικήΒροχή';
import { useAppContext } from '@/context/AppContext';

const ProgrammingBackground = ({ screenType, fontSize, speed, children }) => {
  const { υπόβαθροΠρογραμματισμού } = useAppContext();

  return υπόβαθροΠρογραμματισμού === 'δυναμικό' ? (
    <>
      <ΔυαδικήΒροχή
        screenType={screenType || 'normal'}
        fontSize={fontSize || '14'}
        speed={speed || '80'}
      />
      {children}
    </>
  ) : (
    <div className={styles['εικόνα-υποβάθρου']}>{children}</div>
  );
};
export default ProgrammingBackground;
