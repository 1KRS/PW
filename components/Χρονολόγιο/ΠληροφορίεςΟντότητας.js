import styles from '@/components/Χρονολόγιο/ΣτοιχείαΧρονολογίου.module.css';

import { SiSololearn, SiUdemy, SiYoutube } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
// import { SiKoenigsegg } from 'react-icons/si';

const ΠληροφορίεςΟντότητας = ({
  είδος,
  ιστότοποςΟντότητας,
  χρώμαΕίδους,
  κείμενοΔεδομένωνΟντότητας,
  τύποςΔεδομένωνΟντότητας,
}) => {
  // const σύμβολοΟντότητας =
  //   είδος === 'Εργασία' ? (
  //     κείμενοΔεδομένωνΟντότητας === 'Koenigsegg' ? (
  //       <FaCode />
  //     ) : (
  //       κείμενοΔεδομένωνΟντότητας
  //     )
  //   ) : είδος === 'Σπουδές' ? (
  //     κείμενοΔεδομένωνΟντότητας === 'Sololearn' ? (
  //       <SiSololearn />
  //     ) : κείμενοΔεδομένωνΟντότητας === 'Udemy' ? (
  //       <SiUdemy />
  //     ) : κείμενοΔεδομένωνΟντότητας === 'YouTube' ||
  //       κείμενοΔεδομένωνΟντότητας === 'YT' ? (
  //       <SiYoutube />
  //     ) : (
  //       κείμενοΔεδομένωνΟντότητας
  //     )
  //   ) : (
  //     <FaCode />
  //   );

  return (
    είδος !== '' &&
    (ιστότοποςΟντότητας ? (
      <a
        target="_blank"
        href={ιστότοποςΟντότητας}
        rel="noopener noreferrer"
        className={styles['σύνδεσμος-οντότητας']}
      >
        <h6
          // data-types-main={τύποςΔεδομένωνΟντότητας}
          className={
            styles[`οντότητα`] + ' ' + styles[`οντότητα${χρώμαΕίδους}`]
          }
        >
          {κείμενοΔεδομένωνΟντότητας}
        </h6>
      </a>
    ) : (
      <h6
        // data-types-main={τύποςΔεδομένωνΟντότητας}
        className={styles[`οντότητα`] + ' ' + styles[`οντότητα${χρώμαΕίδους}`]}
      >
        {κείμενοΔεδομένωνΟντότητας}
      </h6>
    ))
  );
};

export default ΠληροφορίεςΟντότητας;
