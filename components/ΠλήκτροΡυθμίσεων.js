'use client';

import styles from './ΠλήκτροΡυθμίσεων.module.css';

import ΕικονίδιοΡυθμίσεων from '@/components/ΕικονίδιοΡυθμίσεων';

import { useAppContext } from '@/context/AppContext';

const SettingsButton = ({}) => {
  const { settings, toggleSettingsModal } = useAppContext();

  const handleSettingsClick = (e) => {
    e.preventDefault();

    toggleSettingsModal();
  };

  const απόκρυψη = settings ? 'απόκρυψη' : '';

  return (
    <div
      className={styles['περιέκτης-ρυθμίσεων'] + ' ' + styles[`${απόκρυψη}`]}
      onClick={(e) => handleSettingsClick(e)}
    >
      <ΕικονίδιοΡυθμίσεων />
    </div>
  );
};

export default SettingsButton;
