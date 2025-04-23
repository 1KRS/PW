'use client';

import { μετάφραση } from '@/utils/μετάφραση';
import styles from './BackgroundToggle.module.css';
import { useAppContext } from '@/context/AppContext';
import Input from '@/components/Επικοινωνία/Inputs/Input';

const BackgroundToggle = () => {
  const { language, programmingBackground, changeBackground } = useAppContext();

  let checked = '';
  let unchecked = '';

  let backgroundType =
    programmingBackground === 'static' ? 'dynamic' : 'static';

  programmingBackground === 'static'
    ? (checked = 'Δυναμικό')
    : (checked = 'Στατικό');
  programmingBackground === 'static'
    ? (unchecked = 'Στατικό')
    : (unchecked = 'Δυναμικό');

  return (
    <div>
      <input
        type="checkbox"
        className={styles.toggle}
        id="rounded"
        onClick={() => changeBackground(backgroundType)}
      />
      <label
        for="rounded"
        className={styles.rounded}
        // data-checked={μετάφραση(checked, language)}
        // data-unchecked={μετάφραση(unchecked, language)}
      ></label>
    </div>
  );
};

export default BackgroundToggle;
