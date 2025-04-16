import styles from './ΣήμαΥπόΚατασκευή.module.css';

import ΠοσοστόΥλοποίησης from '@/components/Ποσοστά/ΠοσοστόΥλοποίησης';
import Link from 'next/link';
import Μετάφραση from '@/components/Μετάφραση';

const ΣήμαΥπόΚατασκευή = () => {
  return (
    <Link href={'/programming/implementation'} className={styles.ribbon}>
      <Μετάφραση>Υπό Ανάπτυξη</Μετάφραση>
      <div className={styles.παύλες}> -- </div>
      <ΠοσοστόΥλοποίησης />
    </Link>
  );
};

export default ΣήμαΥπόΚατασκευή;
