import styles from '@/components/Κείμενα/Κείμενο.module.css';

import TranslatedText from '@/components/Μετάφραση';

const ΚείμενοΑναμονής = () => {
  return (
    <div className={styles['περιέκτης-κειμένου']}>
      <div className={styles['κείμενο']}>
        <TranslatedText>
          Μετά από προτάσεις βελτίωσης επισκεπτών γίνονται οι απαραίτητες
          αλλαγές στο χρονολόγιο. Οπότε προς το παρόν τα γεγονότα χρονολογίου
          είναι ορατά μόνο σε υπολογιστές. Σύντομα θα γίνουν προσβάσιμα και στις
          υπόλοιπες συσκευές. Ευχαριστώ για την κατανόηση.
        </TranslatedText>
      </div>
    </div>
  );
};

export default ΚείμενοΑναμονής;
