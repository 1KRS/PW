import styles from './UnderDevelopmentRibbon.module.css';
import TranslatedText from '@/components/TranslatedText';
import ΠοσοστόΥλοποίησης from '@/components/Ποσοστά/ΠοσοστόΥλοποίησης';
import Link from 'next/link';

const UnderDevelopmentRibbon = () => {
  return (
    <Link href={'/programming/implementation'} className={styles.ribbon}>
      <TranslatedText>Υπό Ανάπτυξη</TranslatedText>
      <div className={styles.παύλες}> -- </div>
      <ΠοσοστόΥλοποίησης />
    </Link>
  );
};

export default UnderDevelopmentRibbon;
