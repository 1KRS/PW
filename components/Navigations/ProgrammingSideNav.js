import styles from './ProgrammingSideNav.module.css';
import NavLinkThatStartsWith from '../NavLinks/NavLinkThatStartsWith';
import NavLinkThatEndsWith from '../NavLinks/NavLinkThatEndsWith';
// import { MdOutlineStarRate } from 'react-icons/md';
import { IoMdCodeWorking } from 'react-icons/io';
import { FaBusinessTime, FaStar, FaTimeline } from 'react-icons/fa6';
import { TiMessages } from 'react-icons/ti';
import { GiAngelWings } from 'react-icons/gi';

const ProgrammingSideNav = () => {
  return (
    <nav className={styles['home-side-nav']}>
      <ul className={styles['home-side-nav__items']}>
        <li className={styles['home-side-nav__item']}>
          <NavLinkThatEndsWith href="/programming">
            <GiAngelWings />
          </NavLinkThatEndsWith>
        </li>
        <li className={styles['home-side-nav__item']}>
          <NavLinkThatStartsWith href="/programming/portfolio">
            <IoMdCodeWorking />
          </NavLinkThatStartsWith>
        </li>
        <li className={styles['home-side-nav__item']}>
          <NavLinkThatStartsWith href="/programming/timeline">
            <FaTimeline style={{ transform: 'rotate(90deg)' }} />
          </NavLinkThatStartsWith>
        </li>
        <li className={styles['home-side-nav__item']}>
          <NavLinkThatStartsWith href="/programming/services">
            <FaBusinessTime />
          </NavLinkThatStartsWith>
        </li>
        <li className={styles['home-side-nav__item']}>
          <NavLinkThatStartsWith href="/programming/testimonials">
            <FaStar />
          </NavLinkThatStartsWith>
        </li>
        <li className={styles['home-side-nav__item']}>
          <NavLinkThatStartsWith href="/programming/contact" s>
            <TiMessages />
          </NavLinkThatStartsWith>
        </li>
      </ul>
    </nav>
  );
};
export default ProgrammingSideNav;
