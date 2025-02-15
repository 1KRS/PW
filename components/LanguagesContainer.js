'use client';

import styles from './LanguagesContainer.module.css';
import { useAppContext } from '@/context/AppContext';
import { CircleFlag } from 'react-circle-flags';

const LanguagesContainer = ({ μέγεθος }) => {
  const { changeLanguage } = useAppContext();
  

  return (
    <div className={styles['']}>
      <div className={styles['flag-container']}>
        <button
          type="button"
          className={styles['flag-btn'] + ' ' + styles[`${μέγεθος ? μέγεθος : ''}`]}
          // disabled={isLoading}
          onClick={() => {
            changeLanguage('ελληνικά');
          }}
        >
          <CircleFlag
            countryCode="gr"
            className={styles['flag'] + ' ' + styles[`${μέγεθος ? μέγεθος : ''}`]}
            alt="Ελληνικά"
          />
        </button>
        <button
          type="button"
          className={styles['flag-btn'] + ' ' + styles[`${μέγεθος ? μέγεθος : ''}`]}
          // disabled={isLoading}
          onClick={() => {
            changeLanguage('svenska');
          }}
        >
          <CircleFlag
            countryCode="se"
            className={styles['flag'] + ' ' + styles[`${μέγεθος ? μέγεθος : ''}`]}
            alt="Svenska"
          />
        </button>
        <button
          type="button"
          className={styles['flag-btn'] + ' ' + styles[`${μέγεθος ? μέγεθος : ''}`]}
          // disabled={isLoading}
          onClick={() => {
            changeLanguage('english');
          }}
        >
          <CircleFlag
            countryCode="uk"
            className={styles['flag'] + ' ' + styles[`${μέγεθος ? μέγεθος : ''}`]}
            alt="English"
          />
        </button>
      </div>
    </div>
  );
};

export default LanguagesContainer;
