import styles from './ProgrammingTimelineSideNav.module.css';

import TranslatedText from '@/components/TranslatedText';
import ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος from '@/components/ToggleButtons/ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος';
import ΣτοιχείοΠλαϊνήςΣτήλης from '@/components/Πλήκτρα/ΣτοιχείοΠλαϊνήςΣτήλης';

import { FaMinus } from 'react-icons/fa6';
import { TiMinusOutline } from 'react-icons/ti';
import { RiAlibabaCloudLine } from 'react-icons/ri';

const ProgrammingTimelineSideNav = ({ σελίδα }) => {
  return (
    <nav className={styles['timeline-side-nav']}>
      <ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος σελίδα={σελίδα}>
        <ul className={styles['εικονίδια']}>
          <ΣτοιχείοΠλαϊνήςΣτήλης είδοςΚατηγορίας="Εν αναμονή" />

          <ΣτοιχείοΠλαϊνήςΣτήλης είδοςΚατηγορίας="Εν εξελίξει" />

          {σελίδα === 'Χρονολόγιο' && (
            <>
              <ΣτοιχείοΠλαϊνήςΣτήλης είδοςΚατηγορίας="Ολοκληρωμένο" />

              <ΣτοιχείοΠλαϊνήςΣτήλης είδοςΚατηγορίας="Παρατημένο" />

              <ΣτοιχείοΠλαϊνήςΣτήλης είδοςΚατηγορίας="Σπουδές" />

              <ΣτοιχείοΠλαϊνήςΣτήλης είδοςΚατηγορίας="Εργασία" />

              <ΣτοιχείοΠλαϊνήςΣτήλης είδοςΚατηγορίας="Έργα" />
            </>
          )}
        </ul>
      </ΠερίβλημαΠλήκτροΕπιμονήςΧρωμάτωνΓεγονότος>

      {/* <EventColorPersistenceToggle2 /> */}
    </nav>
  );
};
export default ProgrammingTimelineSideNav;
