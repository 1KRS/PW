'use client'

import styles from './TimelineItems.module.css';
import Link from 'next/link';
import TranslatedText from './TranslatedText';
import { μετάφραση } from '@/utils/μετάφραση';


import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiArrowDownWideLine, RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { TbCertificate, TbWorldWww, TbBrandHtml5 } from "react-icons/tb";
import { FcDiploma2 } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import { useAppContext } from '@/context/AppContext';


const Event = ({ταυτότητα, μορφήΠεριβλήματος, μονόςΖυγόςΠάνωΓραμμή, χρώμαΕίδους, κείμενοΧρονολογίας, μονόςΖυγόςΟντότητα, κείμενοΔεδομένωνH3, τύποςΔεδομένωνH6Βασικό, κείμενοΔεδομένωνH6Βασικό, κείμενοΔεδομένωνH6Δευτερεύον, τύποςΔεδομένωνH6Δευτερεύον, κείμενο, είδος, φωτογραφίαΠιστοποιητικού, ιστότοπος, τεχνολογίεςΜαθήματος}) => {
  
  const { language } = useAppContext();  

  const τύποςH6Δευτερεύον = μετάφραση(τύποςΔεδομένωνH6Δευτερεύον, language)
  const τύποςH6Βασικό = μετάφραση(τύποςΔεδομένωνH6Βασικό, language)

  return (
      <article key={ταυτότητα} className={styles['timeline-item']}>
        <div className={styles['timeline-dot']}/>
        <div className={styles['timeline-content'] + ' ' + styles[`${μορφήΠεριβλήματος}`]}>
          <div className={styles[`${μονόςΖυγόςΠάνωΓραμμή}`]}>
            <div className={styles['timeline-date'] + ' ' + styles[`color${χρώμαΕίδους}`]}>{κείμενοΧρονολογίας}</div>
            <div className={styles[`${μονόςΖυγόςΟντότητα}`]}>
              <h3><TranslatedText>{κείμενοΔεδομένωνH3}</TranslatedText></h3>
              <div className={styles['event-info']}>
                {ταυτότητα % 2 !== 0 
                  ?  <>
                  <h6 data-types-main={τύποςH6Δευτερεύον} className={styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]}><TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText></h6>
                  {κείμενοΔεδομένωνH6Δευτερεύον && <pre className={styles['middle-text']}>  |  </pre>}
                  {είδος !== '' && <h6 data-types-sec={τύποςH6Βασικό} className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}>{`${κείμενοΔεδομένωνH6Βασικό}`}</h6>}
                  </>
                  : <>
                  {είδος !== '' && <h6 data-types-sec={τύποςH6Βασικό} className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}>{`${κείμενοΔεδομένωνH6Βασικό}`}</h6>}
                  {κείμενοΔεδομένωνH6Δευτερεύον && <pre className={styles['middle-text']}>  |  </pre>}
                  <h6 data-types-main={τύποςH6Δευτερεύον} className={styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]}><TranslatedText>{κείμενοΔεδομένωνH6Δευτερεύον}</TranslatedText></h6>
                  </> 
                }
              </div>
            </div>
          </div>
          {κείμενο !== '' && ταυτότητα % 2 === 0 ? <p className={styles[`event-text`] + ' ' + styles['event-text-left']}><TranslatedText>{κείμενο}</TranslatedText></p> : <p className={styles[`event-text`] + ' ' + styles['event-text-right']}><TranslatedText>{κείμενο}</TranslatedText></p>}
          {ταυτότητα % 2 === 0 ?  
          <div className={styles[`icons-container`] + ' ' + styles['icons-container-left']}>

          {είδος === 'Εργασία' ? null : φωτογραφίαΠιστοποιητικού ? <Link href=''><TbCertificate className={styles['icon-active']}/></Link> : <TbCertificate className={styles['icon-inactive']}/>}
          {ιστότοπος ? <a target="_blank" href={ιστότοπος} rel="noopener noreferrer"><TbWorldWww className={styles['icon-active']}/></a> : <TbWorldWww className={styles['icon-inactive']}/>}
          
          </div> :  <div className={styles[`icons-container`] + ' ' + styles['icons-container-right']}>
          
          {είδος === 'Εργασία' ? null : φωτογραφίαΠιστοποιητικού ? <Link href=''><TbCertificate className={styles['icon-active']}/></Link> : <TbCertificate className={styles['icon-inactive']}/>}
          {ιστότοπος ? <a target="_blank" href={ιστότοπος} rel="noopener noreferrer"><TbWorldWww className={styles['icon-active']}/></a> : <TbWorldWww className={styles['icon-inactive']}/>}
          
          </div> }
          {τεχνολογίεςΜαθήματος}
          
        </div>
      </article>
  )
}

export default Event