import styles from './Υποσέλιδο.module.css';

import Link from 'next/link';

import SocialIcons from '../SocialIcons';
import Μετάφραση from '../Μετάφραση';

import { στοιχείαΗμερομηνιών } from '@/utils/στοιχείαΗμερομηνιών';

const Υποσέλιδο = () => {
  const { τρέχονΈτος } = στοιχείαΗμερομηνιών();

  return (
    <footer className={styles.υποσέλιδο}>
      <div className={styles['περιέκτης-κεντρικού-τμήματος-υποσέλιδου']}>
        <nav className={styles['home-bottom-nav']}>
          <ul className={styles.στοιχεία}>
            <Link href="/home" className={styles.στοιχείο}>
              <Μετάφραση>Συχνές Ερωτήσεις</Μετάφραση>
            </Link>
            <SocialIcons />
            <Link
              href="/programming/about/me"
              className={styles.στοιχείο}
            >
              <Μετάφραση>Σχετικά</Μετάφραση>
            </Link>
          </ul>
        </nav>
        <div className={styles['περιέκτης-πνευματικών-δικαιωμάτων']}>
          <div className={styles['όνομα-και-έτος']}>
            <Μετάφραση>Δημήτρης Μανωλόπουλος</Μετάφραση>
            {` © ${τρέχονΈτος} `}
          </div>
          <pre>{' '}</pre>
          <div className={styles['επιφύλαξη']}>
            <Μετάφραση>Επιφύλαξη Παντός Δικαιώματος</Μετάφραση>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Υποσέλιδο;
