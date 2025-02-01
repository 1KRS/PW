'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';
import TranslatedText from '../TranslatedText';
import { useAppContext } from '@/context/AppContext';

import { μετάφραση } from '@/utils/μετάφραση';

const ΠληροφορίεςΔευτερεύουσαςΓραμμής = ({
  στιγμή,
  γεγονόςΣεΜονόΑριθμό,
  χρώμαΕίδους,
}) => {
  const { language } = useAppContext();

  const { γεγονός, οντότητα, σπουδές, εργασία, τοποθεσία } = στιγμή;

  const { είδος } = γεγονός;
  const { όνομα, τύπος, ιστότοπος } = οντότητα;

  const { τύποςΣπουδών } = σπουδές;

  const { τομέαςΕργασίας } = εργασία;

  const κείμενοΔεδομένωνH6Βασικό =
    είδος === 'Σπουδές' || είδος === 'Εργασία' || είδος === 'Έργα'
      ? όνομα
      : null;

  const τύποςΔεδομένωνH6Βασικό =
    είδος === 'Σπουδές' || είδος === 'Εργασία' || είδος === 'Έργα'
      ? τύπος
      : null;

  const τύποςΔεδομένωνH6Δευτερεύον =
    είδος === 'Σπουδές' || είδος === 'Εργασία' || είδος === 'Έργα'
      ? τοποθεσία && τοποθεσία
      : null;

  const κείμενοΔεδομένωνH6Δευτερεύον =
    είδος === 'Σπουδές'
      ? τύποςΣπουδών && τύποςΣπουδών
      : είδος === 'Εργασία'
      ? τομέαςΕργασίας && τομέαςΕργασίας
      : είδος === 'Έργα'
      ? τύποςΣπουδών && τύποςΣπουδών
      : null;

  return γεγονόςΣεΜονόΑριθμό ? (
    <>
      {
        <h6
          data-types-main={μετάφραση(τύποςΔεδομένωνH6Δευτερεύον, language)}
          className={styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]}
        >
          <TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText>
        </h6>
      }
      {κείμενοΔεδομένωνH6Δευτερεύον && (
        <pre className={styles['middle-line']}> | </pre>
      )}
      {είδος !== '' &&
        (ιστότοπος ? (
          <a
            target="_blank"
            href={ιστότοπος}
            rel="noopener noreferrer"
            className={styles['σύνδεσμος-οντότητας']}
          >
            <h6
              data-types-sec={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
              className={
                styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]
              }
            >
              <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
            </h6>
          </a>
        ) : (
          <h6
            data-types-sec={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
            className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
          >
            <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
          </h6>
        ))}
    </>
  ) : (
    <>
      {είδος !== '' &&
        (ιστότοπος ? (
          <a
            target="_blank"
            href={ιστότοπος}
            rel="noopener noreferrer"
            className={styles['σύνδεσμος-οντότητας']}
          >
            <h6
              data-types-sec={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
              className={
                styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]
              }
            >
              <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
            </h6>
          </a>
        ) : (
          <h6
            data-types-sec={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
            className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
          >
            <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
          </h6>
        ))}
      {κείμενοΔεδομένωνH6Δευτερεύον && (
        <pre className={styles['middle-line']}> | </pre>
      )}
      <h6
        data-types-main={μετάφραση(τύποςΔεδομένωνH6Δευτερεύον, language)}
        className={styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]}
      >
        <TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText>
      </h6>
    </>
  );
};

export default ΠληροφορίεςΔευτερεύουσαςΓραμμής;
