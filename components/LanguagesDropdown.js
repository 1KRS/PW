'use client';

import styles from './LanguagesDropdown.module.css';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { CircleFlag } from 'react-circle-flags';
import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

const LanguagesDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { γλώσσα, changeLanguage } = useAppContext();

  return (
    <div
      className={styles['dropdown-container']}
      // onMouseEnter={() => setShowDropdown(true)}
      // onMouseLeave={() => setShowDropdown(false)}
    >
      <button
        className={
          showDropdown
            ? styles['current-language-btn-show']
            : styles['current-language-btn-hide']
        }
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {showDropdown === true ? (
          <GiEarthAfricaEurope className={styles['flag-icon']} />
        ) : γλώσσα === 'svenska' ? (
          <CircleFlag countryCode="se" className={styles['flag']} />
        ) : γλώσσα === 'english' ? (
          <CircleFlag countryCode="uk" className={styles['flag']} />
        ) : (
          <CircleFlag countryCode="gr" className={styles['flag']} />
        )}
      </button>

      <div
        className={
          showDropdown
            ? styles['dropdown-firstLanguage'] +
              ' ' +
              styles['show-dropdown'] +
              ' ' +
              styles['show-dropdown-firstLanguage']
            : styles['dropdown-firstLanguage']
        }
      >
        <button
          type="button"
          onClick={() => {
            const νέαΓλώσσα =
              γλώσσα === 'ελληνικά' ? 'english' : 'ελληνικά';
            changeLanguage(νέαΓλώσσα);
            setShowDropdown(false);
          }}
          className={styles['dropdown-btn']}
        >
          {γλώσσα === 'ελληνικά' ? (
            <CircleFlag countryCode="uk" className={styles['flag-dropdown']} />
          ) : (
            <CircleFlag countryCode="gr" className={styles['flag-dropdown']} />
          )}
          <p
            className={showDropdown ? styles['text-show'] : styles['text-hide']}
          >
            {γλώσσα === 'ελληνικά' ? 'English' : 'Ελληνικά'}
          </p>
        </button>
      </div>

      <div
        className={
          showDropdown
            ? styles['dropdown-secondLanguage'] +
              ' ' +
              styles['show-dropdown'] +
              ' ' +
              styles['show-dropdown-secondLanguage']
            : styles['dropdown-secondLanguage']
        }
      >
        <button
          type="button"
          onClick={() => {
            const νέαΓλώσσα = γλώσσα === 'svenska' ? 'english' : 'svenska';
            changeLanguage(νέαΓλώσσα);
            setShowDropdown(false);
          }}
          className={styles['dropdown-btn']}
        >
          {γλώσσα === 'svenska' ? (
            <CircleFlag countryCode="uk" className={styles['flag-dropdown']} />
          ) : (
            <CircleFlag countryCode="se" className={styles['flag-dropdown']} />
          )}
          <p
            className={showDropdown ? styles['text-show'] : styles['text-hide']}
          >
            {γλώσσα === 'svenska' ? 'English' : 'Svenska'}
          </p>
        </button>
      </div>
    </div>
  );
};

export default LanguagesDropdown;
