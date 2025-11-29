import styles from './SocialIcons.module.css';
import Link from 'next/link';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const ΕικονίδιαΜΚΔ = () => {
  return (
    <>
      <div className={styles['social-icons']}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/δημήτρης-μανωλόπουλος-86a19217a/"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaLinkedinIn />
        </a>
        <a
          target="_blank"
          href="https://github.com/1KRS"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default ΕικονίδιαΜΚΔ;
