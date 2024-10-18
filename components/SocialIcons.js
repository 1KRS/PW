import styles from './SocialIcons.module.css';
import Link from 'next/link';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <>
      <div className={styles['social-icons']}>
        <Link href="#" className={styles.link}>
          <FaLinkedinIn />
        </Link>
        <Link href="#" className={styles.link}>
          <FaGithub />
        </Link>
      </div>
    </>
  );
};

export default SocialIcons;
