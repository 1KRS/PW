'use client';

import styles from './ΠλήκτροΚειμένουΜικρήςΟθόνης.module.css';

import Μετάφραση from '@/components/Μετάφραση';

import { useAppContext } from '@/context/AppContext';

const SmallScreenTextButton = ({ pxΠλάτουςΓιαΑπόκρυψη }) => {
  const { toggleSmallScreenTextModal } = useAppContext();

  const μέγεθοςΑπόκρυψης = pxΠλάτουςΓιαΑπόκρυψη
    ? pxΠλάτουςΓιαΑπόκρυψη === 1024
      ? 'απόκρυψη-στα-1024px'
      : 'απόκρυψη-στα-1366px'
    : '';

  const χειρισμόςΠίεσηςΠλήκτρου = (e) => {
    e.preventDefault();

    toggleSmallScreenTextModal();
  };

  return (
    <div
      className={styles['βασικό-πλήκτρο'] + ' ' + styles[`${μέγεθοςΑπόκρυψης}`]}
      onClick={(e) => χειρισμόςΠίεσηςΠλήκτρου(e)}
    >
      <Μετάφραση>Μάθε Περισσότερα</Μετάφραση>
    </div>
  );
};

export default SmallScreenTextButton;
