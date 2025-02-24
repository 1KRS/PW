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

const ΣτοιχείοΤαινίαςΚύλισηςΜεΕικονίδιο = ({ αριθμόςΣτοιχείου, όνομαΣτοιχείου }) => {
  return (
    <div
      className={
        styles['στοιχείο'] + ' ' + styles[`στοιχείο${αριθμόςΣτοιχείου}`]
      }
      data-types={όνομαΣτοιχείου}
    >
      {όνομαΣτοιχείου === 'HTML' ? (
        <TbBrandHtml5 className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'CSS' ? (
        <TbBrandCss3 className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'JavaScript' ? (
        <TbBrandJavascript className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'EJS' ? (
        <SiEjs className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'ReactJS' ? (
        <IoLogoReact className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'NextJS' ? (
        <TbBrandNextjs className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'React Native' ? (
        <TbBrandReactNative className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'MongoDB' ? (
        <BiLogoMongodb className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'PostGre SQL' ? (
        <BiLogoPostgresql className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'GIT' ? (
        <FaGitAlt className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'GitHub' ? (
        <IoLogoGithub className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'NodeJS' ? (
        <IoLogoNodejs className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'NPM' ? (
        <RiNpmjsFill className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'Express' ? (
        <SiExpress className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'Bootstrap' ? (
        <FaBootstrap className={styles['tech-icon']} />
      ) : όνομαΣτοιχείου === 'Vercel' ? (
        <TbBrandVercel className={styles['tech-icon']} />
      ) : (
        ''
      )}
    </div>
  );
};
export default ΣτοιχείοΤαινίαςΚύλισηςΜεΕικονίδιο;
