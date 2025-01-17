'use client';

import styles from './ProgrammingBackground.module.css';

import BinaryRain from './BinaryRain';
import { useAppContext } from '@/context/AppContext';

const ProgrammingBackground = ({ screenType, fontSize, speed, children }) => {
  const { programmingBackground } = useAppContext();

  return programmingBackground === 'dynamic' ? (
    <>
      <BinaryRain
        screenType={screenType || 'normal'}
        fontSize={fontSize || '14'}
        speed={speed || '80'}
      />
      {children}
    </>
  ) : (
    <div className={styles['background-image']}>{children}</div>
  );
};
export default ProgrammingBackground;
