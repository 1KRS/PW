import styles from './ProgrammingTimelineSideNav.module.css';
import { FaMinus } from 'react-icons/fa6';
import { TbPoint } from 'react-icons/tb';
import { TiMinusOutline } from "react-icons/ti";

const ProgrammingTimelineSideNav = () => {
  return (
    <nav className={styles['timeline-side-nav']}>
      <ul className={styles['timeline-side-nav__items']}>
        <li className={styles['timeline-side-nav__item']}>
          <TiMinusOutline className={styles['χρώμα-εικονιδίου-ολοκληρωμένο']} />{' '}
          <div className={styles['κείμενο']}>Ολοκληρωμένα</div>
        </li>
        <li className={styles['timeline-side-nav__item']}>
          <TiMinusOutline className={styles['χρώμα-εικονιδίου-εν-εξελίξει']} />{' '}
          <div className={styles['κείμενο']}>Σε εξέλιξη</div>
        </li>
        <li className={styles['timeline-side-nav__item']}>
          <TiMinusOutline className={styles['χρώμα-εικονιδίου-εν-αναμονή']} />{' '}
          <div className={styles['κείμενο']}>Εν αναμονή</div>
        </li>
        <li className={styles['timeline-side-nav__item']}>
          <FaMinus className={styles['χρώμα-εικονιδίου-σπουδές']} />{' '}
          <div className={styles['κείμενο']}>Σπουδές</div>
        </li>
        <li className={styles['timeline-side-nav__item']}>
          <FaMinus className={styles['χρώμα-εικονιδίου-εργασία']} />{' '}
          <div className={styles['κείμενο']}>Εργασία</div>
        </li>
        <li className={styles['timeline-side-nav__item']}>
          <FaMinus className={styles['χρώμα-εικονιδίου-έργα']} />{' '}
          <div className={styles['κείμενο']}>Έργα</div>
        </li>
      </ul>
    </nav>
  );
};
export default ProgrammingTimelineSideNav;
