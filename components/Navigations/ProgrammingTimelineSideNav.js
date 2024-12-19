import styles from './ProgrammingTimelineSideNav.module.css';
import { FaMinus } from 'react-icons/fa6';
import { TbPoint } from 'react-icons/tb';
import { TiMinusOutline } from 'react-icons/ti';
import TranslatedText from '../TranslatedText';

const ProgrammingTimelineSideNav = ({ σελίδα }) => {
  return (
    <nav className={styles['timeline-side-nav']}>
      <ul className={styles['timeline-side-nav__items']}>
        {σελίδα === 'Χρονολόγιο' && (
          <li className={styles['timeline-side-nav__item']}>
            <TiMinusOutline className={styles['χρώμα-εικονιδίου-ολοκληρωμένο']}/>{' '}
            <div className={styles['κείμενο']}><TranslatedText>Ολοκληρωμένα</TranslatedText></div>
          </li>
        )}
        <li className={styles['timeline-side-nav__item']}>
          <TiMinusOutline className={styles['χρώμα-εικονιδίου-εν-εξελίξει']} />{' '}
          <div className={styles['κείμενο']}><TranslatedText>Σε εξέλιξη</TranslatedText></div>
        </li>
        <li className={styles['timeline-side-nav__item']}>
          <TiMinusOutline className={styles['χρώμα-εικονιδίου-εν-αναμονή']} />{' '}
          <div className={styles['κείμενο']}><TranslatedText>Εν αναμονή</TranslatedText></div>
        </li>
        {σελίδα === 'Χρονολόγιο' && (
          <>
            <li className={styles['timeline-side-nav__item']}>
              <FaMinus className={styles['χρώμα-εικονιδίου-σπουδές']} />{' '}
              <div className={styles['κείμενο']}><TranslatedText>Σπουδές</TranslatedText></div>
            </li>
            <li className={styles['timeline-side-nav__item']}>
              <FaMinus className={styles['χρώμα-εικονιδίου-εργασία']} />{' '}
              <div className={styles['κείμενο']}><TranslatedText>Εργασία</TranslatedText></div>
            </li>
            <li className={styles['timeline-side-nav__item']}>
              <FaMinus className={styles['χρώμα-εικονιδίου-έργα']} />{' '}
              <div className={styles['κείμενο']}><TranslatedText>Έργα</TranslatedText></div>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default ProgrammingTimelineSideNav;
