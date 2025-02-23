import styles from './ΣτοιχείοΤαινίαςΚύλισης.module.css';

import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandVercel,
} from 'react-icons/tb';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import { FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { IoLogoGithub, IoLogoNodejs } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { RiNpmjsFill } from 'react-icons/ri';
import { SiEjs, SiExpress } from 'react-icons/si';

const ΣτοιχείοΤαινίαςΚύλισης = ({ αριθμόςΣτοιχείου, όνομαΤεχνολογίας }) => {

  return (
      <div
        className={styles.item + ' ' + styles[`item${αριθμόςΣτοιχείου}`]}
        data-types={όνομαΤεχνολογίας}
      >
        {όνομαΤεχνολογίας === 'HTML' ? (
          <TbBrandHtml5 className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'CSS' ? (
          <TbBrandCss3 className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'JavaScript' ? (
          <TbBrandJavascript className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'EJS' ? (
          <SiEjs className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'ReactJS' ? (
          <IoLogoReact className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'NextJS' ? (
          <TbBrandNextjs className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'React Native' ? (
          <TbBrandReactNative className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'MongoDB' ? (
          <BiLogoMongodb className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'PostGre SQL' ? (
          <BiLogoPostgresql className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'GIT' ? (
          <FaGitAlt className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'GitHub' ? (
          <IoLogoGithub className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'NodeJS' ? (
          <IoLogoNodejs className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'NPM' ? (
          <RiNpmjsFill className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'Express' ? (
          <SiExpress className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'Bootstrap' ? (
          <FaBootstrap className={styles['tech-icon']} />
        ) : όνομαΤεχνολογίας === 'Vercel' ? (
          <TbBrandVercel className={styles['tech-icon']} />
        ) : (
          ''
        )}
      </div>
  );
};
export default ΣτοιχείοΤαινίαςΚύλισης;
