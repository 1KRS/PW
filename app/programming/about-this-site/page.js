import styles from './page.module.css';

import Τίτλος from '@/components/Τίτλος';
import Μετάφραση from '@/components/Μετάφραση';

export const metadata = {
  title: 'ΔΜ - Σχετικά με τον ιστότοπο',
  description: 'Λεπτομέρειες σχετικά με τον ιστότοπο',
  keywords: ['Προσωπικός Ιστότοπος', 'Personal Website', 'Personlig Webbplats'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const aboutSite = () => {
  return (
    <main className={styles.main}>
      <Τίτλος text="Σχετικά με τον ιστότοπο" />
      <section
        className={styles['σχετικά-με-ιστότοπο']}
        id="σχετικά-με-ιστότοπο"
      >
        <div className={styles['περιέκτης-σχετικά-με-ιστότοπο']}>
          <p className={styles['κείμενο-σελίδας']}>
            <Μετάφραση>
              Καλωσορίσατε στον προσωπικό μου ιστότοπο, ένα έργο που
              αντικατοπτρίζει το πάθος μου για την ανάπτυξη σύγχρονων και
              καινοτόμων διαδικτυακών εφαρμογών καθώς.
            </Μετάφραση>
          </p>
          <p className={styles['κείμενο-σελίδας']}>
            <Μετάφραση>
              Ο ιστότοπος έχει σχεδιαστεί και αναπτυχθεί εξ ολοκλήρου από εμένα,
              χρησιμοποιώντας το πανίσχυρο πλαίσιο NextJS, με απώτερο στόχο την
              επίδειξη των ικανοτήτων μου με τον ευκολότερο και ταχύτερο δυνατό
              τρόπο.
            </Μετάφραση>
          </p>
          <p className={styles['κείμενο-σελίδας']}>
            <Μετάφραση>
              Αυτό έγινε προσπάθεια να επιτευχθεί μέσω μιας εξαιρετικής
              εμπειρίας χρήστη και την βέλτιστη απόδοση. Για παράδειγμα ένα από
              αυτά που ξεχωρίζουν στον ιστότοπο είναι η πλήρως δυναμική του
              φύση. Κάθε στοιχείο, από το διαδραστικό χρονολόγιο μέχρι και την
              μετάφραση και του μικρότερου κειμένου, τροφοδοτείται δυναμικά από
              προσεκτικά σχεδιασμένες βάσεις δεδομένων.
            </Μετάφραση>
          </p>
          <p className={styles['κείμενο-σελίδας']}>
            <Μετάφραση>
              Ακόμη πιο συγκεκριμένα όσον αφορά την μετάφραση ιδιαίτερη έμφαση
              έχει δοθεί στην πολυγλωσσική υποστήριξη, με ένα προσαρμοσμένο
              σύστημα μετάφρασης που αναπτύχθηκε εκ του μηδενός, εξασφαλίζοντας
              άψογη λειτουργία χωρίς εξάρτηση από εξωτερικές υπηρεσίες.
            </Μετάφραση>
          </p>
          <p className={styles['κείμενο-σελίδας']}>
            <Μετάφραση>
              Οι προσεγγίσεις αυτές αποδεικνύουν όχι μόνο την τεχνική μου
              κατάρτιση, αλλά και την προσήλωσή μου στη δημιουργία
              εξατομικευμένων λύσεων που ανταποκρίνονται πλήρως στις ανάγκες του
              κάθε έργου. Αν αναζητάτε έναν συνεργάτη με βασικό του στόχο την
              συνεχή του εξέλιξη, ώστε να μπορεί να μετατρέψει το όραμά σας σε
              πραγματικότητα, είμαι εδώ για να συζητήσουμε το επόμενό σας έργο ή
              ιδέα.
            </Μετάφραση>
          </p>
        </div>
      </section>
    </main>
  );
};

export default aboutSite;
