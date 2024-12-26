import styles from './TodoItems.module.css';
import { DateTime, Duration } from "luxon";
import { προςΥλοποίηση } from '@/db/προςΥλοποίηση'



const TodoItems = () => {

  return (
    <>
      <div className={styles['todo-items']}>
        {
          προςΥλοποίηση.filter(todo => todo.ολοκλήρωση === false).map((todo, index) => {
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
                  <div>{τύπος}</div>
                  <div>για</div>
                  <div> {μέρος === 'Ιστότοπος' ? 'Ιστότοπο' : μέρος}</div>
              </h4>
                <h3 className={styles['κάτω-γραμμή']}>{κείμενο}</h3>
              </div>
            </article>
          );
        })}

      </div>
    </>
  );
};
export default TodoItems;
