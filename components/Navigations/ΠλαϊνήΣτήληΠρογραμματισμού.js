import styles from './ΠλαϊνήΣτήληΠρογραμματισμού.module.css';

import NavLinkThatStartsWith from '@/components/NavLinks/NavLinkThatStartsWith';
import NavLinkThatEndsWith from '@/components/NavLinks/NavLinkThatEndsWith';
import ΠλαίσιοΜορφής from '@/components/ΠλαίσιοΜορφής';

// import { MdOutlineStarRate } from 'react-icons/md';
import { IoMdCodeWorking } from 'react-icons/io';
import { FaBusinessTime, FaStar, FaTimeline } from 'react-icons/fa6';
import { TiMessages } from 'react-icons/ti';
import { GiAngelWings } from 'react-icons/gi';

const ΠλαϊνήΣτήληΠρογραμματισμού = () => {
  return (
    <nav className={styles['βασική-πλαϊνή-στήλη-πλοήγησης']}>
      <ΠλαίσιοΜορφής
        καθορισμόςΔιαστάσεων="από μέσα"
        ακτίναΓωνίας={15}
        πάχοςΟρίου={1}
        ενεργόςΔιακόπτηςΦέγγουςΟρίων={true}
        ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων={true}
      >
        <ul className={styles['στοιχεία']}>
          <li className={styles['στοιχείο']}>
            <NavLinkThatEndsWith href="/programming">
              <GiAngelWings />
            </NavLinkThatEndsWith>
          </li>
          <li className={styles['στοιχείο']}>
            <NavLinkThatStartsWith href="/programming/portfolio">
              <IoMdCodeWorking />
            </NavLinkThatStartsWith>
          </li>
          <li className={styles['στοιχείο']}>
            <NavLinkThatStartsWith href="/programming/timeline">
              <FaTimeline style={{ transform: 'rotate(90deg)' }} />
            </NavLinkThatStartsWith>
          </li>
          <li className={styles['στοιχείο']}>
            <NavLinkThatStartsWith href="/programming/services">
              <FaBusinessTime />
            </NavLinkThatStartsWith>
          </li>
          <li className={styles['στοιχείο']}>
            <NavLinkThatStartsWith href="/programming/testimonials">
              <FaStar />
            </NavLinkThatStartsWith>
          </li>
          <li className={styles['στοιχείο']}>
            <NavLinkThatStartsWith href="/programming/contact" s>
              <TiMessages />
            </NavLinkThatStartsWith>
          </li>
        </ul>
      </ΠλαίσιοΜορφής>
    </nav>
  );
};
export default ΠλαϊνήΣτήληΠρογραμματισμού;
