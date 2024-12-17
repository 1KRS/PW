'use client';

import styles from './InputsStyles.module.css';
import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';

const Textarea = ({ id, name, cols, rows, style, placeholder, children }) => {
  const { language } = useAppContext();

  return (
    <textarea
      id={id}
      name={name}
      cols={cols}
      rows={rows}
      className={styles[`${style}`]}
      placeholder={μετάφραση(`${placeholder}`, language)}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
