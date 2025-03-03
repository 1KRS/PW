import styles from './Κεφαλίδα.module.css';

import LanguagesDropdown from '../LanguagesDropdown';
import Λογότυπο from '@/components/Λογότυπο';

const Κεφαλίδα = () => {
  return (
    <header className={styles.κεφαλίδα}>
      <div className={styles['περιέκτης-λογότυπου']}>
        <Λογότυπο />
      </div>
      <nav className={styles['γραμμή-πλοήγησης-κεφαλίδας-προγραμματισμού']}>
        <ul className={styles.στοιχεία}>
          <LanguagesDropdown />
        </ul>
      </nav>
    </header>
  );
};
export default Κεφαλίδα;
