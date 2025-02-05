'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import TranslatedText from '../TranslatedText';

import { RiHomeOfficeLine } from 'react-icons/ri';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaSchoolFlag } from 'react-icons/fa6';

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
  const { όνομα, τύπος, ιστότοποςΟντότητας } = οντότητα;

  const { τύποςΣπουδών, ιστότοποςΣπουδών } = σπουδές;

  const { τομέαςΕργασίας } = εργασία;

  const κείμενοΔεδομένωνH6Βασικό =
    είδος === 'Σπουδές' || είδος === 'Εργασία' || είδος === 'Έργα'
      ? όνομα
      : null;

  const τύποςΔεδομένωνH6Βασικό =
    είδος === 'Σπουδές' || είδος === 'Εργασία' || είδος === 'Έργα'
      ? τύπος
      : null;

  // const τύποςΔεδομένωνH6Δευτερεύον =
  //   είδος === 'Σπουδές' || είδος === 'Εργασία' || είδος === 'Έργα'
  //     ? τοποθεσία && τοποθεσία
  //     : null;

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
      {/* <div
        className={styles['περιέκτης-εικονιδίων']}
        data-types-icon={μετάφραση(τοποθεσία, language)}
      >
        {τοποθεσία === 'Απομακρυσμένα' ? (
          <RiHomeOfficeLine
            className={styles['εικονίδιο-δευτερεύουσας-γραμμής']}
          />
        ) : τοποθεσία === 'Δια ζώσης' && είδος === 'Εργασία' ? (
          <HiOutlineBuildingOffice2
            className={styles['εικονίδιο-δευτερεύουσας-γραμμής']}
          />
        ) : τοποθεσία === 'Δια ζώσης' && είδος === 'Σπουδές' ? (
          <FaSchoolFlag className={styles['εικονίδιο-δευτερεύουσας-γραμμής']} />
        ) : null}
      </div>
      {τοποθεσία && <pre className={styles['middle-line']}>{`   `}</pre>} */}

      {ιστότοποςΣπουδών ? (
        <a
          target="_blank"
          href={ιστότοποςΣπουδών}
          rel="noopener noreferrer"
          className={styles['σύνδεσμος-σπουδών']}
        >
          <h6
            // data-types-sec={μετάφραση(τύποςΔεδομένωνH6Δευτερεύον, language)}
            className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
          >
            <TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText>
          </h6>
        </a>
      ) : (
        <h6
          // data-types-sec={μετάφραση(τύποςΔεδομένωνH6Δευτερεύον, language)}
          className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
        >
          <TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText>
        </h6>
      )}
      {κείμενοΔεδομένωνH6Δευτερεύον && (
        <pre className={styles['middle-line']}> | </pre>
      )}
      {είδος !== '' &&
        (ιστότοποςΣπουδών ? (
          <a
            target="_blank"
            href={ιστότοποςΣπουδών}
            rel="noopener noreferrer"
            className={styles['σύνδεσμος-οντότητας']}
          >
            <h6
              data-types-main={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
              className={
                styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]
              }
            >
              <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
            </h6>
          </a>
        ) : (
          <h6
            data-types-main={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
            className={
              styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]
            }
          >
            <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
          </h6>
        ))}
    </>
  ) : (
    <>
      {είδος !== '' &&
        (ιστότοποςΣπουδών ? (
          <a
            target="_blank"
            href={ιστότοποςΣπουδών}
            rel="noopener noreferrer"
            className={styles['σύνδεσμος-οντότητας']}
          >
            <h6
              data-types-main={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
              className={
                styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]
              }
            >
              <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
            </h6>
          </a>
        ) : (
          <h6
            data-types-main={μετάφραση(τύποςΔεδομένωνH6Βασικό, language)}
            className={
              styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]
            }
          >
            <TranslatedText>{`${κείμενοΔεδομένωνH6Βασικό}`}</TranslatedText>
          </h6>
        ))}
      {κείμενοΔεδομένωνH6Δευτερεύον && (
        <pre className={styles['middle-line']}> | </pre>
      )}
      {ιστότοποςΣπουδών ? (
        <a
          target="_blank"
          href={ιστότοποςΣπουδών}
          rel="noopener noreferrer"
          className={styles['σύνδεσμος-σπουδών']}
        >
          <h6
            // data-types-sec={μετάφραση(τύποςΔεδομένωνH6Δευτερεύον, language)}
            className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
          >
            <TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText>
          </h6>
        </a>
      ) : (
        <h6
          // data-types-sec={μετάφραση(τύποςΔεδομένωνH6Δευτερεύον, language)}
          className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}
        >
          <TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText>
        </h6>
      )}

      {/* {τοποθεσία && <pre className={styles['middle-line']}>{`   `}</pre>}
      <div
        className={styles['περιέκτης-εικονιδίων']}
        data-types-icon={μετάφραση(τοποθεσία, language)}
      >
        {τοποθεσία === 'Απομακρυσμένα' ? (
          <RiHomeOfficeLine
            className={styles['εικονίδιο-δευτερεύουσας-γραμμής']}
          />
        ) : τοποθεσία === 'Δια ζώσης' && είδος === 'Εργασία' ? (
          <HiOutlineBuildingOffice2
            className={styles['εικονίδιο-δευτερεύουσας-γραμμής']}
          />
        ) : τοποθεσία === 'Δια ζώσης' && είδος === 'Σπουδές' ? (
          <FaSchoolFlag className={styles['εικονίδιο-δευτερεύουσας-γραμμής']} />
        ) : null}
      </div> */}
    </>
  );
};

export default ΠληροφορίεςΔευτερεύουσαςΓραμμής;
