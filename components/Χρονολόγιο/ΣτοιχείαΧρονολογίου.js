'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import ΦίλτραΓεγονότων from '@/components/Χρονολόγιο/ΦίλτραΓεγονότων';

import { useAppContext } from '@/context/AppContext';
import TranslatedText from '../TranslatedText';

const TimelineElements = () => {
  const { μορφήΣτοιχείων } = useAppContext();

  return (
    <>
      <div className={styles['περιέκτης-κειμένου-αναμονής']}>
        <div className={styles['κείμενο-αναμονής']}>
          <TranslatedText>
            Μετά από προτάσεις βελτίωσης επισκεπτών γίνονται οι απαραίτητες αλλαγές στο
            χρονολόγιο. Οπότε προς το παρόν τα γεγονότα χρονολογίου είναι ορατά
            μόνο σε υπολογιστές. Σύντομα θα γίνουν προσβάσιμα και στις υπόλοιπες
            συσκευές. Ευχαριστώ για την κατανόηση.
          </TranslatedText>
        </div>
      </div>
      <div
        className={
          styles['στοιχεία-χρονολογίου'] +
          ' ' +
          styles[
            `${μορφήΣτοιχείων === 'υαλομορφισμός' ? '' : 'με-θολό-κάλυμμα'}`
          ]
        }
      >
        <ΦίλτραΓεγονότων />
      </div>
    </>
  );
};
export default TimelineElements;
