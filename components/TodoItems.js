import styles from './TodoItems.module.css';
import { DateTime, Duration } from "luxon";
import { προςΥλοποίηση } from '@/db/προςΥλοποίηση'

import TranslatedText from './TranslatedText';
import { μετάφραση } from '@/utils/μετάφραση';


const TodoItems = () => {

  return (
    <>
      <div className={styles['todo-items']}>
        {
          προςΥλοποίηση.filter(todo => todo.τομέας === 'Προγραμματισμός').filter(todo => todo.ολοκλήρωση === false).map((todo, index) => {
          const { ταυτότητα, τομέας, μέρος, τύπος, επεξήγηση, κρίσιμο, ενΕξελίξει, ολοκλήρωση } = todo;
          
          const μορφήΠεριβλήματος = ολοκλήρωση === true ? 'ολοκληρωμένο' : ενΕξελίξει ? 'ενΕξελίξει' : 'ενΑναμονή'
          const κείμενο =
            τύπος === 'Σελίδα' && επεξήγηση === 'Δημιουργία σελίδας'
              ? `${επεξήγηση} «${μέρος}»`
              : επεξήγηση;

          return (
            <article key={ταυτότητα} className={styles['todo-item']}>
              <div className={styles['todo-content'] + ' ' + styles[`${μορφήΠεριβλήματος}`]}>
              <div className={styles['todo-αριθμός']}>{index + 1}</div>
                <h4 className={styles['επάνω-γραμμή']}>
                  <TranslatedText>{τύπος}</TranslatedText>
                  {' '}
                  <TranslatedText>για</TranslatedText>
                  {' '}
                  <TranslatedText>{μέρος === 'Ιστότοπος' ? 'Ιστότοπο' : μέρος}</TranslatedText>
                  
              </h4>
                <h3 className={styles['κάτω-γραμμή']}><TranslatedText>{κείμενο}</TranslatedText></h3>
              </div>
            </article>
          );
        })}

      </div>
    </>
  );
};
export default TodoItems;
