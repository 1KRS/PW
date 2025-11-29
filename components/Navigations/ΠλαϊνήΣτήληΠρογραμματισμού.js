import styles from './ΠλαϊνήΣτήληΠρογραμματισμού.module.css';

import ΣύνδεσμοςΠουΞεκινάΜε from '@/components/NavLinks/NavLinkThatStartsWith';
import ΣύνδεσμοςΠουΤελειώνειΜε from '@/components/NavLinks/NavLinkThatEndsWith';
import ΠλαίσιοΜορφής from '@/components/ΠλαίσιοΜορφής';

// import { MdOutlineStarRate } from 'react-icons/md';
import { IoMdCodeWorking } from 'react-icons/io';
import { FaBusinessTime, FaStar, FaTimeline } from 'react-icons/fa6';
import { TiMessages } from 'react-icons/ti';
import { PiArticleNyTimesFill } from 'react-icons/pi';
import { GiAngelWings } from 'react-icons/gi';

const ΠλαϊνήΣτήληΠρογραμματισμού = () => {
  return (
    <nav className={styles['βασική-πλαϊνή-στήλη-ή-γραμμή-πλοήγησης']}>
      <ΠλαίσιοΜορφής
        καθορισμόςΔιαστάσεων="από μέσα"
        ακτίναΓωνίας={15}
        πάχοςΟρίου={1}
        ενεργόςΔιακόπτηςΦέγγουςΟρίων={true}
        ενεργόςΔιακόπτηςΦέγγουςΣτοιχείων={true}
      >
        <ul className={styles['στοιχεία']}>
          <li className={styles['στοιχείο']}>
            <ΣύνδεσμοςΠουΤελειώνειΜε href="/programming">
              <GiAngelWings />
            </ΣύνδεσμοςΠουΤελειώνειΜε>
          </li>
          <li className={styles['στοιχείο']}>
            <ΣύνδεσμοςΠουΞεκινάΜε href="/programming/portfolio">
              <IoMdCodeWorking />
            </ΣύνδεσμοςΠουΞεκινάΜε>
          </li>
          <li className={styles['στοιχείο']}>
            <ΣύνδεσμοςΠουΞεκινάΜε href="/programming/timeline">
              <FaTimeline style={{ transform: 'rotate(90deg)' }} />
            </ΣύνδεσμοςΠουΞεκινάΜε>
          </li>
          {/* <li className={styles['στοιχείο']}>
            <NavLinkThatStartsWith href="/programming/services">
              <FaBusinessTime />
            </NavLinkThatStartsWith>
          </li> */}
          <li className={styles['στοιχείο']}>
            <ΣύνδεσμοςΠουΞεκινάΜε href="/programming/testimonials">
              <FaStar />
            </ΣύνδεσμοςΠουΞεκινάΜε>
          </li>
          <li className={styles['στοιχείο']}>
            <ΣύνδεσμοςΠουΞεκινάΜε href="/programming/contact" s>
              <TiMessages />
            </ΣύνδεσμοςΠουΞεκινάΜε>
          </li>
          <li className={styles['στοιχείο']}>
            <ΣύνδεσμοςΠουΞεκινάΜε href="/programming/blog" s>
              <PiArticleNyTimesFill />{' '}
            </ΣύνδεσμοςΠουΞεκινάΜε>
          </li>
        </ul>
      </ΠλαίσιοΜορφής>
    </nav>
  );
};
export default ΠλαϊνήΣτήληΠρογραμματισμού;
