'use client';

import styles from './EventColorPersistenceToggle2.module.css';
import { useAppContext } from '@/context/AppContext';

import { TbBrandVercelFilled } from 'react-icons/tb';
import { FiLoader } from 'react-icons/fi';

const EventColorPersistenceToggle2 = () => {
  const { showEventColors, toggleEventColors } = useAppContext();

  // let checked = programmingBackground === 'static' ? 'Δυναμικό' : 'Στατικό';
  // let unchecked = programmingBackground === 'static' ? 'Στατικό' : 'Δυναμικό';

  // let backgroundType =
  //   programmingBackground === 'static' ? 'dynamic' : 'static';

  return (
    <div className={styles['container']}>
      <label className={styles['toggle-box']}>
        <input
          type="checkbox"
          className={styles['input']}
          checked={showEventColors}
          onClick={() => toggleEventColors(showEventColors)}
        />
        <div className={styles['button']}></div>
      </label>
    </div>
  );
};

export default EventColorPersistenceToggle2;
