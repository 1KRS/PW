'use client';

import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import { RiHomeOfficeLine } from 'react-icons/ri';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaSchoolFlag } from 'react-icons/fa6';

import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';

const SecondaryLineIcons = ({ είδος, τοποθεσία }) => {
  const { language } = useAppContext();

  return (
    <div
      className={styles['περιέκτης-εικονιδίων-δευτερεύουσας-γραμμής']}
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
  );
};

export default SecondaryLineIcons;
