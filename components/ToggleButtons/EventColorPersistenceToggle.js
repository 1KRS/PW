'use client';

import styles from './EventColorPersistenceToggle.module.css';
import { useAppContext } from '@/context/AppContext';

import { TbBrandVercelFilled } from "react-icons/tb";
import { FiLoader } from "react-icons/fi";

const EventColorPersistenceToggle = () => {
  const { programmingBackground, changeBackground } = useAppContext();

  let backgroundType =
    programmingBackground === 'static' ? 'dynamic' : 'static';

  return (
    <div className={styles['container']}>
      <button className={styles['button']}>
        <FiLoader className={styles['icon']}/>
      </button>
    </div>
  );
};

export default EventColorPersistenceToggle;
