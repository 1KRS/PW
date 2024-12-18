import styles from './Slider.module.css';

import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReactNative,
} from 'react-icons/tb';
import { IoLogoReact } from 'react-icons/io5';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import { FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiEjs, SiExpress } from 'react-icons/si';
import { RiNpmjsFill } from 'react-icons/ri';
import { IoLogoGithub, IoLogoNodejs } from 'react-icons/io';

// const technologies = [
//   {
//     id: 1,
//     title: 'HTML',
//     style: styles.item + ' ' + styles.tech1,
//     Icon: <TbBrandHtml5 className={styles['tech-icon']} />,
//   },
//   {
//     id: 2,
//     title: 'CSS',
//     style: styles.item + ' ' + styles.tech2,
//     Icon: <TbBrandCss3 className={styles['tech-icon']} />,
//   },
//   {
//     id: 3,
//     title: 'JavaScript',
//     style: styles.item + ' ' + styles.tech3,
//     Icon: <TbBrandJavascript className={styles['tech-icon']} />,
//   },
//   {
//     id: 4,
//     title: 'EJS',
//     style: styles.item + ' ' + styles.tech4,
//     Icon: <SiEjs className={styles['tech-icon']} />,
//   },
//   {
//     id: 5,
//     title: 'ReactJS',
//     style: styles.item + ' ' + styles.tech5,
//     Icon: <IoLogoReact className={styles['tech-icon']} />,
//   },
//   {
//     id: 6,
//     title: 'NextJS',
//     style: styles.item + ' ' + styles.tech6,
//     Icon: <TbBrandNextjs className={styles['tech-icon']} />,
//   },
//   {
//     id: 7,
//     title: 'React Native',
//     style: styles.item + ' ' + styles.tech7,
//     Icon: <TbBrandReactNative className={styles['tech-icon']} />,
//   },
//   {
//     id: 8,
//     title: 'MongoDB',
//     style: styles.item + ' ' + styles.tech8,
//     Icon: <BiLogoMongodb className={styles['tech-icon']} />,
//   },
//   {
//     id: 9,
//     title: 'PostGre SQL',
//     style: styles.item + ' ' + styles.tech9,
//     Icon: <BiLogoPostgresql className={styles['tech-icon']} />,
//   },
//   {
//     id: 10,
//     title: 'GIT',
//     style: styles.item + ' ' + styles.tech10,
//     Icon: <FaGitAlt className={styles['tech-icon']} />,
//   },
//   {
//     id: 11,
//     title: 'GitHub',
//     style: styles.item + ' ' + styles.tech11,
//     Icon: <IoLogoGithub className={styles['tech-icon']} />,
//   },
//   {
//     id: 12,
//     title: 'NPM',
//     style: styles.item + ' ' + styles.tech12,
//     Icon: <RiNpmjsFill className={styles['tech-icon']} />,
//   },
//   {
//     id: 13,
//     title: 'Express',
//     style: styles.item + ' ' + styles.tech13,
//     Icon: <SiExpress className={styles['tech-icon']} />,
//   },
// ];

const Slider = () => {

  return (
    <div className={styles.wrapper}>

      {/* {technologies.map((tech) => {

        return (
          <div
            key={tech.id}
            className={tech.style}
            data-types={tech.title}
          >
            {tech.Icon}
          </div>
        );
      })} */}

      {/* {τεχνολογίες.map((τεχνολογία, index) => {
        const εικονίδιοΤεχνολογίας =
          τεχνολογία === 'HTML' ? (
            <TbBrandHtml5 className={styles['tech-icon']} />
          ) : τεχνολογία === 'CSS' ? (
            <TbBrandCss3 className={styles['tech-icon']} />
          ) : τεχνολογία === 'JavaScript' ? (
            <TbBrandJavascript className={styles['tech-icon']} />
          ) : τεχνολογία === 'EJS' ? (
            <SiEjs className={styles['tech-icon']} />
          ) : τεχνολογία === 'ReactJS' ? (
            <IoLogoReact className={styles['tech-icon']} />
          ) : τεχνολογία === 'NextJS' ? (
            <TbBrandNextjs className={styles['tech-icon']} />
          ) : τεχνολογία === 'React Native' ? (
            <TbBrandReactNative className={styles['tech-icon']} />
          ) : τεχνολογία === 'MongoDB' ? (
            <BiLogoMongodb className={styles['tech-icon']} />
          ) : τεχνολογία === 'PostGre SQL' ? (
            <BiLogoPostgresql className={styles['tech-icon']} />
          ) : τεχνολογία === 'GIT' ? (
            <FaGitAlt className={styles['tech-icon']} />
          ) : τεχνολογία === 'GitHub' ? (
            <IoLogoGithub className={styles['tech-icon']} />
          ) : τεχνολογία === 'NodeJS' ? (
            <IoLogoNodejs className={styles['tech-icon']} />
          ) : τεχνολογία === 'Express' ? (
            <SiExpress className={styles['tech-icon']} />
          ) : τεχνολογία === 'NPM' ? (
            <RiNpmjsFill className={styles['tech-icon']} />
          ) : null;


        console.log('ΕΙΚΟΝΙΔΙΟ', εικονίδιοΤεχνολογίας);

        <div
          className={styles.item + ' ' + styles[`item1`]}
          data-types={τεχνολογία}
        >
          {εικονίδιοΤεχνολογίας}
        </div>;
      })} */}

      <div className={styles.item + ' ' + styles.item1} data-types='HTML'><TbBrandHtml5 className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item2} data-types='CSS'><TbBrandCss3 className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item3} data-types='JavaScript'><TbBrandJavascript className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item4} data-types='EJS'><SiEjs className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item5} data-types='ReactJS'><IoLogoReact className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item6} data-types='NextJS'><TbBrandNextjs className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item7} data-types='React Native'><TbBrandReactNative className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item8} data-types='MongoDB'><BiLogoMongodb className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item9} data-types='PostGre SQL'><BiLogoPostgresql className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item10} data-types='GIT'><FaGitAlt className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item11} data-types='GitHub'><IoLogoGithub className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item12} data-types='NodeJS'><IoLogoNodejs className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item13} data-types='NPM'><RiNpmjsFill className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item14} data-types='Express'><SiExpress className={styles['tech-icon']}/></div>
      <div className={styles.item + ' ' + styles.item15} data-types='Bootstrap'><FaBootstrap className={styles['tech-icon']}/></div>
    </div>
  );
};
export default Slider;
