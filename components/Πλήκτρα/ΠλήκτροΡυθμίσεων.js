'use client';

import styles from './ΠλήκτροΡυθμίσεων.module.css';

import { useAppContext } from '@/context/AppContext';

import { VscSettings } from 'react-icons/vsc';

const SettingsButton = ({}) => {
  const { settings, toggleSettingsModal } = useAppContext();

  const handleSettingsClick = (e) => {
    e.preventDefault();

    toggleSettingsModal();
  };

  const απόκρυψη = settings ? 'απόκρυψη' : '';

  return (
    <div
      className={styles['περιέκτης-εικονιδίου-ρυθμίσεων'] + ' ' + styles[`${απόκρυψη}`]}
      onClick={(e) => handleSettingsClick(e)}
    >
      <VscSettings className={styles['εικονίδιο-ρυθμίσεων']} />
    </div>
  );
};

export default SettingsButton;
