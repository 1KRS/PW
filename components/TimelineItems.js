import styles from './TimelineItems.module.css';
import { DateTime, Duration } from 'luxon';
import { χρονολόγιο } from '@/db/χρονολόγιο';

import TechIcon from '@/components/TechIcon';
import EventMonth from './EventMonth';
import Event from './Event';

const TimelineItems = () => {
  return (
    <>
      <div className={styles['timeline-items']}>
        {χρονολόγιο
          .filter((todo) => todo.γεγονός.κατηγορία === 'Προγραμματισμός')
          .map((στιγμή) => {
            
            const {
              ταυτότητα,
              γεγονός,
              οντότητα,
              σπουδές,
              εργασία,
              τοποθεσία,
              κείμενο,
            } = στιγμή;
           
            const { είδος, κατηγορία, έναρξη, λήξη } = γεγονός;
            const { όνομα, τύπος, λογότυπο, ιστότοπος } = οντότητα;
            
            const {
              σχολή,
              τμήμαΉΤίτλος,
              τύποςΣπουδών,
              διάρκειαΔιδακτέαςΎλης,
              τεχνολογίες,
              δίδακτρα,
              ολοκλήρωση,
              πιστοποιητικό,
              φωτογραφίαΠιστοποιητικού,
            } = σπουδές;
            
            const { θέση, τομέαςΕργασίας } = εργασία;

            const μορφήΠεριβλήματος =
              ολοκλήρωση === '-' && κείμενο
                ? 'coming-with-text'
                : ολοκλήρωση === '-' && !κείμενο
                ? 'coming-without-text'
                : !ολοκλήρωση && κείμενο
                ? 'unfinished-with-text'
                : !ολοκλήρωση && !κείμενο
                ? 'unfinished-without-text'
                : ολοκλήρωση && !κείμενο
                ? 'finished-without-text'
                : 'finished-with-text';

            const μονόςΖυγόςΠάνωΓραμμή =
              ταυτότητα % 2 === 0
                ? 'timeline-upper-line-even'
                : 'timeline-upper-line-odd';

            const μονόςΖυγόςΟντότητα =
              ταυτότητα % 2 === 0 ? 'event-even' : 'event-odd';

            const χρώμαΕίδους =
              είδος === 'Σπουδές'
                ? '-orange'
                : είδος === 'Εργασία'
                ? '-gold'
                : '-normal';

            const μήναςΈναρξης = έναρξη.split('/').length === 2 ? true : false;

            const χρονολογίαΈναρξης =
              έναρξη.split('/').length === 2
                ? έναρξη.split('/')[1]
                : έναρξη.split('/')[0];

            const μήναςΛήξης =
              λήξη.split('/').length === 2 ? λήξη.split('/')[0] : '';

            const χρονολογίαΛήξης =
              λήξη.split('/').length === 2
                ? λήξη.split('/')[1]
                : λήξη.split('/')[0];

            const ημερομηνίαΈναρξης =
              έναρξη.length === 4
                ? έναρξη
                : DateTime.fromFormat(`${έναρξη}`, 'LL/yyyy');

            const ημερομηνίαΛήξης = λήξη
              ? λήξη.length === 4
                ? λήξη
                : DateTime.fromFormat(`${λήξη}`, 'LL/yyyy')
              : '';

            const διάρκειαΓεγονότος = λήξη
              ? parseFloat(
                  Duration.fromObject({
                    seconds: (ημερομηνίαΛήξης - ημερομηνίαΈναρξης) / 1000,
                  }).as('months')
                ).toFixed(1)
              : '-';

            const κείμενοΧρονολογίας =
              ταυτότητα % 2 === 0 ? (
                μήναςΈναρξης ? (
                  <>
                    <div className={styles['timeline-date-month-even']}>
                      <EventMonth έναρξη={έναρξη} />
                    </div>
                    <div className={styles['timeline-date-year']}>
                      {χρονολογίαΈναρξης}
                    </div>
                  </>
                ) : (
                  <div className={styles['timeline-date-year']}>
                    {χρονολογίαΈναρξης}
                  </div>
                )
              ) : μήναςΈναρξης ? (
                <>
                  <div className={styles['timeline-date-year']}>
                    {χρονολογίαΈναρξης}
                  </div>
                  <div className={styles['timeline-date-month-odd']}>
                    <EventMonth έναρξη={έναρξη} />
                  </div>
                </>
              ) : (
                <div className={styles['timeline-date-year']}>
                  {χρονολογίαΈναρξης}
                </div>
              );

            const κείμενοΔεδομένωνH3 =
              είδος === 'Σπουδές'
                ? τμήμαΉΤίτλος
                : είδος === 'Εργασία'
                ? θέση
                : τμήμαΉΤίτλος || θέση;

            const κείμενοΔεδομένωνH6Βασικό = είδος ? όνομα : null;

            const τύποςΔεδομένωνH6Βασικό = είδος ? τύπος : null;

            const τύποςΔεδομένωνH6Δευτερεύον =
              είδος === 'Σπουδές'
                ? τοποθεσία && τοποθεσία
                : είδος === 'Εργασία'
                ? τοποθεσία && τοποθεσία
                : null;

            const κείμενοΔεδομένωνH6Δευτερεύον =
              είδος === 'Σπουδές'
                ? τύποςΣπουδών && τύποςΣπουδών
                : είδος === 'Εργασία'
                ? τομέαςΕργασίας
                : null;

            const τεχνολογίεςΜαθήματος =
              τεχνολογίες.length !== 0 ? (
                <div className={styles['tech-container'] + ' ' + styles[`tech-${τεχνολογίες.length}`]}>
                  {τεχνολογίες.map((τεχνολογία) => {
                    return (
                      <TechIcon
                        key={τεχνολογία}
                        όνομαΤεχνολογίας={τεχνολογία}
                      />
                    );
                  })}{' '}
                </div>
              ) : null;

            return (
              <Event
                ταυτότητα={ταυτότητα}
                μορφήΠεριβλήματος={μορφήΠεριβλήματος}
                μονόςΖυγόςΠάνωΓραμμή={μονόςΖυγόςΠάνωΓραμμή}
                χρώμαΕίδους={χρώμαΕίδους}
                κείμενοΧρονολογίας={κείμενοΧρονολογίας}
                μονόςΖυγόςΟντότητα={μονόςΖυγόςΟντότητα}
                κείμενοΔεδομένωνH3={κείμενοΔεδομένωνH3}
                τύποςΔεδομένωνH6Βασικό={τύποςΔεδομένωνH6Βασικό}
                κείμενοΔεδομένωνH6Βασικό={κείμενοΔεδομένωνH6Βασικό}
                κείμενοΔεδομένωνH6Δευτερεύον={κείμενοΔεδομένωνH6Δευτερεύον}
                τύποςΔεδομένωνH6Δευτερεύον={τύποςΔεδομένωνH6Δευτερεύον}
                κείμενο={κείμενο}
                είδος={είδος}
                φωτογραφίαΠιστοποιητικού={φωτογραφίαΠιστοποιητικού}
                ιστότοπος={ιστότοπος}
                τεχνολογίεςΜαθήματος={τεχνολογίεςΜαθήματος}
              ></Event>
            );
          })}
      </div>
    </>
  );
};
export default TimelineItems;
