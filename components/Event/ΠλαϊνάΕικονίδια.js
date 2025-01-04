import styles from '@/components/TimelineItems.module.css';
import TranslatedText from '../TranslatedText';
import Link from 'next/link';

import { TbCertificate, TbWorldWww, TbBrandHtml5 } from "react-icons/tb";


const ΠλαϊνάΕικονίδια = ({ μονός, είδος, φωτογραφίαΠιστοποιητικού, ιστότοπος, }) => {
  return (
    μονός ?  
      <div className={styles[`icons-container`] + ' ' + styles['icons-container-right']}>
      
      {είδος === 'Εργασία' ? null : φωτογραφίαΠιστοποιητικού ? <Link href=''><TbCertificate className={styles['icon-active']}/></Link> : <TbCertificate className={styles['icon-inactive']}/>}
      {ιστότοπος ? <a target="_blank" href={ιστότοπος} rel="noopener noreferrer"><TbWorldWww className={styles['icon-active']}/></a> : <TbWorldWww className={styles['icon-inactive']}/>}
      
      </div> :  <div className={styles[`icons-container`] + ' ' + styles['icons-container-left']}>

      {είδος === 'Εργασία' ? null : φωτογραφίαΠιστοποιητικού ? <Link href=''><TbCertificate className={styles['icon-active']}/></Link> : <TbCertificate className={styles['icon-inactive']}/>}
      {ιστότοπος ? <a target="_blank" href={ιστότοπος} rel="noopener noreferrer"><TbWorldWww className={styles['icon-active']}/></a> : <TbWorldWww className={styles['icon-inactive']}/>}

      </div> 
    
  );
};

export default ΠλαϊνάΕικονίδια;
