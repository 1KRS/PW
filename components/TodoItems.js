import styles from './TodoItems.module.css';

import Μετάφραση from './Μετάφραση';

import { DateTime, Duration } from 'luxon';
import { προςΥλοποίηση } from '@/db/προςΥλοποίηση';

import { μετάφραση } from '@/utils/μετάφραση';

const TodoItems = () => {
  return (
    <>
      <div className={styles['todo-items']}>
        {προςΥλοποίηση
          .filter((todo) => todo.τομέας === 'Προγραμματισμός')
          .filter((todo) => todo.ολοκλήρωση === false)
          .map((todo, index) => {
            const {
              ταυτότητα,
              τομέας,
              μέρος,
              τύπος,
              επεξήγηση,
              κρίσιμο,
              ενΕξελίξει,
              ολοκλήρωση,
            } = todo;

            const μορφήΠεριβλήματος =
              ολοκλήρωση === true
                ? 'ολοκληρωμένο'
                : ενΕξελίξει
                  ? 'ενΕξελίξει'
                  : 'ενΑναμονή';
            const κείμενο =
              τύπος === 'Σελίδα' && επεξήγηση === 'Δημιουργία σελίδας'
                ? `${επεξήγηση} «${μέρος}»`
                : επεξήγηση;

            return (
              <article key={ταυτότητα} className={styles['todo-item']}>
                <div
                  className={
                    styles['todo-content'] +
                    ' ' +
                    styles[`${μορφήΠεριβλήματος}`]
                  }
                >
                  <div className={styles['todo-αριθμός']}>{index + 1}</div>
                  <h4 className={styles['επάνω-γραμμή']}>
                    <Μετάφραση>{τύπος}</Μετάφραση>{' '}
                    <Μετάφραση>για</Μετάφραση>{' '}
                    <Μετάφραση>
                      {μέρος === 'Ιστότοπος' ? 'Ιστότοπο' : μέρος}
                    </Μετάφραση>
                  </h4>
                  <h3 className={styles['κάτω-γραμμή']}>
                    <Μετάφραση>{κείμενο}</Μετάφραση>
                  </h3>
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
};
export default TodoItems;
