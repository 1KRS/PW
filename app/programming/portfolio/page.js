import styles from './page.module.css';

import Image from 'next/image';
import ΠλαίσιοΜορφήςΧαρτοφυλακίου from '@/components/ΠλαίσιοΜορφήςΧαρτοφυλακίου';
import ΚείμενοΤίτλοςΜικρήςΟθόνης from '@/components/ΚείμεναΣεΠλαίσιο/ΚείμενοΤίτλοςΜικρήςΟθόνης';
import ΠλήκτροΚειμένουΜικρήςΟθόνης from '@/components/Πλήκτρα/ΠλήκτροΚειμένουΜικρήςΟθόνης';
import Τίτλος from '@/components/Τίτλος';
import Μετάφραση from '@/components/Μετάφραση';

import { έργα } from '@/db/έργα';

import { FaRegHandPointer } from 'react-icons/fa6';

export const metadata = {
  title: 'ΔΜ - Χαρτοφυλάκιο',
  description: 'Ο προσωπικός μου ιστότοπος ως προγραμματιστής',
  keywords: ['Προσωπικός Ιστότοπος', 'Personal Website', 'Personlig Webbplats'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

const ΣελίδαΧαρτοφυλακίου = () => {
  return (
    <>
      <main className={styles.main}>
        <Τίτλος text="Χαρτοφυλάκιο" />

        <section className={styles['χαρτοφυλάκιο']} id="χαρτοφυλάκιο">
          <div className={styles['περιέκτης-χαρτοφυλακίου']}>
            {έργα.reverse().map((project) => {
              return (
                <ΠλαίσιοΜορφήςΧαρτοφυλακίου
                  key={project.id}
                  // καθορισμόςΔιαστάσεων="από μέσα"
                  εξωτερικόΠεριθώριο={false}
                  ακτίναΓωνίας={35}
                  πάχοςΟρίου={2}
                  ενεργόςΔιακόπτηςΦέγγουςΟρίων={true}
                  ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων={true}
                >
                  <div className={styles['στοιχείο-χαρτοφυλακίου']}>
                    <Image
                      className={styles['εικόνα']}
                      src={project.imageSrc}
                      fill
                      alt={project.imageAlt}
                    />
                    <a
                      target="_blank"
                      href={project.link}
                      rel="noopener noreferrer"
                      className={styles['στρώση-χαρτοφυλακίου']}
                    >
                      <h4>
                        <Μετάφραση>{project.title}</Μετάφραση>
                      </h4>
                      <p>
                        <Μετάφραση>{project.text}</Μετάφραση>
                      </p>
                      <FaRegHandPointer
                        className={styles['εικονίδιο-συνδέσμου']}
                      />
                    </a>
                  </div>
                </ΠλαίσιοΜορφήςΧαρτοφυλακίου>
              );
            })}
          </div>
        </section>
        <ΚείμενοΤίτλοςΜικρήςΟθόνης />
        <ΠλήκτροΚειμένουΜικρήςΟθόνης />
      </main>
    </>
  );
};
export default ΣελίδαΧαρτοφυλακίου;
