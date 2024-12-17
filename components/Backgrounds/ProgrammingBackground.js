'use client'

import { useAppContext } from '@/context/AppContext';
import BinaryRain from './BinaryRain';
import styles from './ProgrammingBackground.module.css';

const ProgrammingBackground = ({screenType, fontSize, speed, children }) => {
  const { programmingBackground } = useAppContext();

  return programmingBackground === 'dynamic' ? (
    <>
    <BinaryRain screenType={screenType || "normal"} fontSize={fontSize || '14'} speed={speed || '80'}/>
    {children}
    </>
  ) : (
    <div className={styles['background-image']}>{children}</div>
  );
};
export default ProgrammingBackground;
