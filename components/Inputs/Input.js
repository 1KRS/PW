'use client';

import styles from './InputsStyles.module.css';
import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';

const Input = ({ id, type, style, value, placeholder, children }) => {
  const { language } = useAppContext();

  return value ? (
    <input
      id={id}
      type={type}
      className={styles[`${style}`]}
      value={μετάφραση(`${value}`, language)}
    />
  ) : placeholder ? (
    <input
      id={id}
      type={type}
      className={styles[`${style}`]}
      placeholder={μετάφραση(`${placeholder}`, language)}
    >
      {children}
    </input>
  ) : (
    <input id={id} type={type} className={styles[`${style}`]} />
  );
};

export default Input;
