import styles from './ProgrammingTimelineSideNav.module.css';
import { FaMinus } from 'react-icons/fa6';
import { TiMinusOutline } from 'react-icons/ti';
import TranslatedText from '@/components/TranslatedText';
import ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος from '@/components/ToggleButtons/ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος';

const ProgrammingTimelineSideNav = ({ σελίδα }) => {

  return (
    <nav className={styles['timeline-side-nav']}>
      <ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος σελίδα={σελίδα}>
        <ul className={styles['εικονίδια']}>
          {σελίδα === 'Χρονολόγιο' && (
            <li className={styles['εικονίδιο']}>
              <TiMinusOutline
                className={styles['χρώμα-εικονιδίου-ολοκληρωμένο']}
              />{' '}
              <div className={styles['κείμενο']}>
                <TranslatedText>Ολοκληρωμένα</TranslatedText>
              </div>
            </li>
          )}
          <li className={styles['εικονίδιο']}>
            <TiMinusOutline
              className={styles['χρώμα-εικονιδίου-εν-εξελίξει']}
            />{' '}
            <div className={styles['κείμενο']}>
              <TranslatedText>Σε εξέλιξη</TranslatedText>
            </div>
          </li>
          <li className={styles['εικονίδιο']}>
            <TiMinusOutline className={styles['χρώμα-εικονιδίου-εν-αναμονή']} />{' '}
            <div className={styles['κείμενο']}>
              <TranslatedText>Εν αναμονή</TranslatedText>
            </div>
          </li>
          {σελίδα === 'Χρονολόγιο' && (
            <>
              <li className={styles['εικονίδιο']}>
                <TiMinusOutline
                  className={styles['χρώμα-εικονιδίου-παρατημένο']}
                />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Παρατημένα</TranslatedText>
                </div>
              </li>
              <li className={styles['εικονίδιο']}>
                <FaMinus className={styles['χρώμα-εικονιδίου-σπουδές']} />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Σπουδές</TranslatedText>
                </div>
              </li>
              <li className={styles['εικονίδιο']}>
                <FaMinus className={styles['χρώμα-εικονιδίου-εργασία']} />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Εργασίες</TranslatedText>
                </div>
              </li>
              <li className={styles['εικονίδιο']}>
                <FaMinus className={styles['χρώμα-εικονιδίου-έργα']} />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Έργα</TranslatedText>
                </div>
              </li>
            </>
          )}
        </ul>
      </ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος>

      {/* <EventColorPersistenceToggle2 /> */}
    </nav>
  );
};
export default ProgrammingTimelineSideNav;
