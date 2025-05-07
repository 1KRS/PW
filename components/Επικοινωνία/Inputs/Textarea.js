'use client';

import styles from '@/components/Επικοινωνία/ΦόρμεςΚαιΠεδία.module.css';
import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';

const Textarea = ({
  id,
  name,
  cols,
  rows,
  style,
  placeholder,
  χειρισμόςΠληκτρισμού,
  children,
}) => {
  const { language, μορφήΣτοιχείων, φέγγοςΟρίων, φέγγοςΣτοιχείων } =
    useAppContext();

  return (
    <textarea
      id={id}
      name={name}
      cols={cols}
      rows={rows}
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
      placeholder={μετάφραση(`${placeholder}`, language)}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
