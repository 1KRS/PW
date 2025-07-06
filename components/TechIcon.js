import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandVercel,
} from 'react-icons/tb';
import { IoLogoReact } from 'react-icons/io5';
import {
  BiLogoVisualStudio,
  BiLogoMongodb,
  BiLogoPostgresql,
} from 'react-icons/bi';
import { FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiEjs, SiExpress, SiGithubcopilot } from 'react-icons/si';
import { RiNpmjsFill, RiPerplexityFill } from 'react-icons/ri';
import { IoLogoGithub } from 'react-icons/io';

import styles from './TechIcon.module.css';

const TechIcon = ({ όνομαΤεχνολογίας }) => {
  // const findChild = (array, id) => {
  //   let result;
  //   array.some(
  //     (child) =>
  //       (child.id === id && (result = child)) ||
  //       (result = findChild(child.options || [], id))
  //   );
  //   return result;
  // };

  const εικονίδιο =
    όνομαΤεχνολογίας === 'HTML' ? (
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
    ) : όνομαΤεχνολογίας === 'NPM' ? (
      <RiNpmjsFill className={styles['tech-icon']} />
    ) : όνομαΤεχνολογίας === 'Express' ? (
      <SiExpress className={styles['tech-icon']} />
    ) : όνομαΤεχνολογίας === 'Bootstrap' ? (
      <FaBootstrap className={styles['tech-icon']} />
    ) : όνομαΤεχνολογίας === 'Vercel' ? (
      <TbBrandVercel className={styles['tech-icon']} />
    ) : όνομαΤεχνολογίας === 'Perplexity' ? (
      <RiPerplexityFill className={styles['tech-icon']} />
    ) : όνομαΤεχνολογίας === 'GitHub Copilot' ? (
      <SiGithubcopilot className={styles['tech-icon']} />
    ) : null;

  return (
    <div className={styles['tech']} data-types={όνομαΤεχνολογίας}>
      {εικονίδιο}
    </div>
  );
};

export default TechIcon;
