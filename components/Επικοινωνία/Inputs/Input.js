'use client';

import styles from '@/components/Επικοινωνία/Φόρμα.module.css';
import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';

const Input = ({
  id,
  type,
  style,
  value,
  placeholder,
  χειρισμόςΠληκτρισμού,
  onSubmit,
  required,
  children,
}) => {
  const { language } = useAppContext();

  return (style === 'btn' || style === 'btn-success') ? (
    <button
      id={id}
      type={type}
      className={styles[`${style}`]}
      onSubmit={(e) => onSubmit(e)}
    >
      {μετάφραση(`${value}`, language)}
    </button>
  ) : value ? (
    <input
      id={id}
      type={type}
      className={styles[`${style}`]}
      onChange={(e) => χειρισμόςΠληκτρισμού(e)}
      value={μετάφραση(`${value}`, language)}
    />
  ) : placeholder ? (
    <input
      id={id}
      type={type}
      className={styles[`${style}`]}
      placeholder={μετάφραση(`${placeholder}`, language)}
      onChange={(e) => χειρισμόςΠληκτρισμού(e)}
      required={required}
    >
      {children}
    </input>
  ) : (
    <input
      id={id}
      type={type}
      className={styles[`${style}`]}
      onChange={(e) => χειρισμόςΠληκτρισμού(e)}
      required={required}
    />
  );
};

export default Input;
