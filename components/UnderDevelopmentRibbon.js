import styles from './UnderDevelopmentRibbon.module.css';

import ΠοσοστόΥλοποίησης from '@/components/Ποσοστά/ΠοσοστόΥλοποίησης';
import Link from 'next/link';
import Μετάφραση from '@/components/Μετάφραση';

const UnderDevelopmentRibbon = () => {
  return (
    <Link href={'/programming/implementation'} className={styles.ribbon}>
      <Μετάφραση>Υπό Ανάπτυξη</Μετάφραση>
      <div className={styles.παύλες}> -- </div>
      <ΠοσοστόΥλοποίησης />
    </Link>
  );
};

export default UnderDevelopmentRibbon;
