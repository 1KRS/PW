'use client';

/* eslint-disable react-hooks/rules-of-hooks */

import styles from './ΠλήκτροΡυθμίσεων.module.css';

import { useAppContext } from '@/context/AppContext';

import { VscSettings } from 'react-icons/vsc';

const ΠλήκτροΡυθμίσεων = ({}) => {
  const { settings, εναλλαγήΠαραθύρουΡυθμίσεων } = useAppContext();

  const handleSettingsClick = (e) => {
    e.preventDefault();

    εναλλαγήΠαραθύρουΡυθμίσεων();
  };

  const απόκρυψη = settings ? 'απόκρυψη' : '';

  return (
    <div
      className={
        styles['περιέκτης-εικονιδίου-ρυθμίσεων'] + ' ' + styles[`${απόκρυψη}`]
      }
      onClick={(e) => handleSettingsClick(e)}
    >
      <VscSettings className={styles['εικονίδιο-ρυθμίσεων']} />
    </div>
  );
};

export default ΠλήκτροΡυθμίσεων;
