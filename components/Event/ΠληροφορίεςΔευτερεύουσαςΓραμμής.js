'use client';

import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';
import { useAppContext } from '@/context/AppContext';

import { μετάφραση } from '@/utils/μετάφραση';

const ΠληροφορίεςΔευτερεύουσαςΓραμμής = ({ στιγμή, χρώμαΕίδους }) => {
  const { language } = useAppContext();

  const { ταυτότητα, γεγονός, οντότητα, σπουδές, εργασία, τοποθεσία } = στιγμή;

  const { είδος } = γεγονός;
  const { όνομα, τύπος } = οντότητα;

  const { τύποςΣπουδών } = σπουδές;

  const { τομέαςΕργασίας } = εργασία;

  const μονόςΑριθμός = ταυτότητα % 2 !== 0 ? true : false;

  const κείμενοΔεδομένωνH6Βασικό =
    είδος === 'Σπουδές' || είδος === 'Εργασία' ? όνομα : null;

  const τύποςΔεδομένωνH6Βασικό =
    είδος === 'Σπουδές' || είδος === 'Εργασία' ? τύπος : null;

  const τύποςΔεδομένωνH6Δευτερεύον =
    είδος === 'Σπουδές'
      ? τοποθεσία && τοποθεσία
      : είδος === 'Εργασία'
      ? τοποθεσία && τοποθεσία
      : είδος === 'Έργα'
      ? null
      : null;

  const κείμενοΔεδομένωνH6Δευτερεύον =
    είδος === 'Σπουδές'
      ? τύποςΣπουδών && τύποςΣπουδών
      : είδος === 'Εργασία'
      ? τομέαςΕργασίας
      : είδος === 'Έργα'
      ? null
      : null;

  return μονόςΑριθμός ? (
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
      {είδος !== '' && (
        <h6
          data-types-sec={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
          className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
        >
          <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
        </h6>
      )}
    </>
  ) : (
    <>
      {είδος !== '' && (
        <h6
          data-types-sec={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
          className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
        >
          <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
        </h6>
      )}
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
