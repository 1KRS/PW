'use client';

import styles from './SmallScreenTextButton.module.css';

import Μετάφραση from '@/components/Μετάφραση';

import { useAppContext } from '@/context/AppContext';

const SmallScreenTextButton = () => {
  const { toggleSmallScreenTextModal } = useAppContext();

  const χειρισμόςΠίεσηςΠλήκτρου = (e) => {
    console.log('Ζουλιήχτκε');
    e.preventDefault();

    toggleSmallScreenTextModal();
  };

  return (
    <div
      className={styles['βασικό-πλήκτρο']}
      onClick={(e) => χειρισμόςΠίεσηςΠλήκτρου(e)}
    >
      <Μετάφραση>Μάθε Περισσότερα</Μετάφραση>
    </div>
  );
};

export default SmallScreenTextButton;
