'use client';
import styles from './TimelineItems.module.css';
// import { useRef } from 'react';

const TimelineItems = ({ props }) => {
  // const scrollRef = useRef(null);

  return (
    <>
      <div className={styles['timeline-items']}>
        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-date']}>1998</div>
          <div className={styles['timeline-content']}>
            <h3>Λύκειο</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-date']}>2001</div>
          <div className={styles['timeline-content']}>
            <h3>Τ.Ε.Ι.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-date']}>2002</div>
          <div className={styles['timeline-content']}>
            <h3>Πανεπιστήμιο (Πτυχίο)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-date']}>2006</div>
          <div className={styles['timeline-content']}>
            <h3>Πανεπιστήμιο (Μεταπτυχιακό)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              non lectus dictum, dapibus ipsum in, lacinia lectus. Pellentesque
              aliquam ac purus ac sagittis. Nullam gravida.
            </p>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['timeline-dot']}></div>
          <div className={styles['timeline-date']}>2022</div>
          <div className={styles['timeline-content']}>
            <h3>Πρόγραμμα Εκπαίδευσης Προγραμματισμού</h3>
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
