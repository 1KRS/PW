import styles from './page.module.css';

import Image from 'next/image';
import ΠλαίσιοΜορφήςΧαρτοφυλακίου from '@/components/ΠλαίσιοΜορφήςΧαρτοφυλακίου';
import Τίτλος from '@/components/Τίτλος';
import TranslatedText from '@/components/TranslatedText';

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
                        <TranslatedText>{project.title}</TranslatedText>
                      </h4>
                      <p>
                        <TranslatedText>{project.text}</TranslatedText>
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
      </main>
    </>
  );
};
export default ΣελίδαΧαρτοφυλακίου;
