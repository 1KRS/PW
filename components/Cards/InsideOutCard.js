import Image from 'next/image';
import styles from './InsideOutCard.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiArrowDownWideLine } from "react-icons/ri";
import { FcDiploma2 } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";

const InsideOutCard = () => {
  return (
    <article className={styles['card']}>

      <Image
        className={styles['card-image']}
        src="/icons/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
        width={260}
        height={260}
        alt=""
      />

      <div className={styles['card-hidden-container']}>
        <FcDiploma2 />
        <CgWebsite />
        <FaLinkedinIn />
        <FaLinkedinIn />
      </div>
    </article>
  );
};

export default InsideOutCard;
