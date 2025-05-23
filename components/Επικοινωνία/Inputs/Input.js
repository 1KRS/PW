'use client';

import styles from '@/components/Επικοινωνία/ΦόρμεςΚαιΠεδία.module.css';
import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';

const Input = ({
  id,
  type,
  style,
  value,
  placeholder,
  χειρισμόςΠληκτρισμού,
  required,
  children,
}) => {
  const { language, μορφήΣτοιχείων, φέγγοςΟρίων, φέγγοςΣτοιχείων } =
    useAppContext();

  return value ? (
    <input
      id={id}
      type={type}
      className={
        styles[`${style}`] +
        ' ' +
        styles[
          `${μορφήΣτοιχείων === 'υαλομορφισμός' ? 'με-υαλομορφισμό' : μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ? 'με-ημιδιαφανή-στοιχεία' : μορφήΣτοιχείων === 'αδιαφανή στοιχεία' ? 'με-αδιαφανή-στοιχεία' : ''}`
        ] +
        ' ' +
        styles[`${φέγγοςΟρίων === true ? 'με-φέγγος-ορίων' : ''}`] +
        ' ' +
        styles[`${φέγγοςΣτοιχείων === true ? 'με-φέγγος-στοιχείων' : ''}`]
      }
      onChange={(e) => χειρισμόςΠληκτρισμού(e)}
      value={μετάφραση(`${value}`, language)}
    />
  ) : placeholder ? (
    <input
      id={id}
      type={type}
      className={
        styles[`${style}`] +
        ' ' +
        styles[
          `${μορφήΣτοιχείων === 'υαλομορφισμός' ? 'με-υαλομορφισμό' : μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ? 'με-ημιδιαφανή-στοιχεία' : μορφήΣτοιχείων === 'αδιαφανή στοιχεία' ? 'με-αδιαφανή-στοιχεία' : ''}`
        ] +
        ' ' +
        styles[`${φέγγοςΟρίων === true ? 'με-φέγγος-ορίων' : ''}`] +
        ' ' +
        styles[`${φέγγοςΣτοιχείων === true ? 'με-φέγγος-στοιχείων' : ''}`]
      }
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
      className={
        styles[`${style}`] +
        ' ' +
        styles[
          `${μορφήΣτοιχείων === 'υαλομορφισμός' ? 'με-υαλομορφισμό' : μορφήΣτοιχείων === 'ημιδιαφανή στοιχεία' ? 'με-ημιδιαφανή-στοιχεία' : μορφήΣτοιχείων === 'αδιαφανή στοιχεία' ? 'με-αδιαφανή-στοιχεία' : ''}`
        ] +
        ' ' +
        styles[`${φέγγοςΟρίων === true ? 'με-φέγγος-ορίων' : ''}`] +
        ' ' +
        styles[`${φέγγοςΣτοιχείων === true ? 'με-φέγγος-στοιχείων' : ''}`]
      }
      onChange={(e) => χειρισμόςΠληκτρισμού(e)}
      required={required}
    />
  );
};

export default Input;
