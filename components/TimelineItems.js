'use client';
import styles from './TimelineItems.module.css';

const TimelineItems = ({ props }) => {

  return (
    <>
      <div className={styles['timeline-items']}>
        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-content']}>
            <div className={styles['timeline-upper-line-odd']}>
              <div className={styles['timeline-date']}>1999 - 2001</div>
              <div className={styles['course-entity-odd']}>
                <h3>Λύκειο</h3>
                <h6>2o Ενιαίο Λύκειο Νεάπολης</h6>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-content']}>
            <div className={styles['timeline-upper-line-even']}>
              <div className={styles['timeline-date']}>2001 - </div>
              <div className={styles['course-entity-even']}>
                <h3>Σχολή Έργων Υποδομής</h3>
                <h6>Τ.Ε.Ι. Σίνδου Θεσσαλονίκης</h6>
              </div>
            </div>
            <p>
              Η πρώτη σχολή που πέρασα. Στο δεύτερο εξάμηνο της σχολής επέλεγα
              να σταματήσω και ξαναέδωσα πανελλήνιες εξετάσεις όπου και πέρασα
              στο Πολυτεχνείο στο Ηράκλειο της Κρήτης στην σχολή «Επιστήμης και
              Τεχνολογίας Υλικών» όπου επίσης επέλεξα να μην πάω.
            </p>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-content']}>
            <div className={styles['timeline-upper-line-odd']}>
              <div className={styles['timeline-date']}>2003</div>
              <div className={styles['course-entity-odd']}>
                <h3>Πτυχίο Μηχανικού</h3>
                <h6>Πανεπιστήμιο του Πόρτσμουθ</h6>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-content']}>
            <div className={styles['timeline-upper-line-even']}>
              <div className={styles['timeline-date']}>2006</div>
              <div className={styles['course-entity-even']}>
                <h3>Μεταπτυχιακό Μηχανικού</h3>
                <h6>Πανεπιστήμιο του Πόρτσμουθ</h6>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>
        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-content']}>
            <div className={styles['timeline-upper-line-odd']}>
              <div className={styles['timeline-date']}>2022</div>
              <div className={styles['course-entity-odd']}>
                <h3>Υποτροφία</h3>
                <h6>School of Applied Technologies</h6>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>
        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-content']}>
            <div className={styles['timeline-upper-line-even']}>
              <div className={styles['timeline-date']}>2022</div>
              <div className={styles['course-entity-even']}>
                <h3>Υποτροφία</h3>
                <h6>School of Applied Technologies</h6>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TimelineItems;
