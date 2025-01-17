import styles from './ProgrammingTimelineSideNav.module.css';

import TranslatedText from '@/components/TranslatedText';
import ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος from '@/components/ToggleButtons/ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος';
import ΕικονίδιοΠλαϊνήςΣτήλης from '@/components/Πλήκτρα/ΕικονίδιοΠλαϊνήςΣτήλης';

import { FaMinus } from 'react-icons/fa6';
import { TiMinusOutline } from 'react-icons/ti';

const ProgrammingTimelineSideNav = ({ σελίδα }) => {
  return (
    <nav className={styles['timeline-side-nav']}>
      <ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος σελίδα={σελίδα}>
        <ul className={styles['εικονίδια']}>
          <ΕικονίδιοΠλαϊνήςΣτήλης είδοςΚατηγορίας='Εν αναμονή'>
            <TiMinusOutline className={styles['χρώμα-εικονιδίου-εν-αναμονή']} />{' '}
            <div className={styles['κείμενο']}>
              <TranslatedText>Εν αναμονή</TranslatedText>
            </div>
          </ΕικονίδιοΠλαϊνήςΣτήλης>
          <ΕικονίδιοΠλαϊνήςΣτήλης είδοςΚατηγορίας='Εν εξελίξει'>
            <TiMinusOutline
              className={styles['χρώμα-εικονιδίου-εν-εξελίξει']}
            />{' '}
            <div className={styles['κείμενο']}>
              <TranslatedText>Εν εξελίξει</TranslatedText>
            </div>
          </ΕικονίδιοΠλαϊνήςΣτήλης>
          {σελίδα === 'Χρονολόγιο' && (
            <>
              <ΕικονίδιοΠλαϊνήςΣτήλης είδοςΚατηγορίας='Ολοκληρωμένο'>
                <TiMinusOutline
                  className={styles['χρώμα-εικονιδίου-ολοκληρωμένο']}
                />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Ολοκληρωμένα</TranslatedText>
                </div>
              </ΕικονίδιοΠλαϊνήςΣτήλης>
              <ΕικονίδιοΠλαϊνήςΣτήλης είδοςΚατηγορίας='Παρατημένο'>
                <TiMinusOutline
                  className={styles['χρώμα-εικονιδίου-παρατημένο']}
                />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Παρατημένα</TranslatedText>
                </div>
              </ΕικονίδιοΠλαϊνήςΣτήλης>
              <ΕικονίδιοΠλαϊνήςΣτήλης είδοςΚατηγορίας='Σπουδές'>
                {' '}
                <FaMinus className={styles['χρώμα-εικονιδίου-σπουδές']} />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Σπουδές</TranslatedText>
                </div>
              </ΕικονίδιοΠλαϊνήςΣτήλης>
              <ΕικονίδιοΠλαϊνήςΣτήλης είδοςΚατηγορίας='Εργασία'>
                <FaMinus className={styles['χρώμα-εικονιδίου-εργασία']} />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Εργασίες</TranslatedText>
                </div>
              </ΕικονίδιοΠλαϊνήςΣτήλης>
              <ΕικονίδιοΠλαϊνήςΣτήλης είδοςΚατηγορίας='Έργα'>
                {' '}
                <FaMinus className={styles['χρώμα-εικονιδίου-έργα']} />{' '}
                <div className={styles['κείμενο']}>
                  <TranslatedText>Έργα</TranslatedText>
                </div>
              </ΕικονίδιοΠλαϊνήςΣτήλης>
            </>
          )}
        </ul>
      </ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος>

      {/* <EventColorPersistenceToggle2 /> */}
    </nav>
  );
};
export default ProgrammingTimelineSideNav;
