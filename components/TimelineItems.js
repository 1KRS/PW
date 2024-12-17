import styles from './TimelineItems.module.css';
import { DateTime, Duration } from "luxon";
import { χρονολόγιο } from '@/db/χρονολόγιο'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiArrowDownWideLine, RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { TbCertificate, TbWorldWww, TbBrandHtml5 } from "react-icons/tb";
import { FcDiploma2 } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import Link from 'next/link';
import TechIcon from '@/components/TechIcon';
import TranslatedText from './TranslatedText';
import EventMonth from './EventMonth';


const TimelineItems = () => {

  return (
    <>

      <div className={styles['timeline-items']}>
      {
        χρονολόγιο.filter(todo => todo.γεγονός.κατηγορία === 'Προγραμματισμός').map(στιγμή => {

          const { ταυτότητα, γεγονός, οντότητα, σπουδές, εργασία, τοποθεσία, κείμενο } = στιγμή
          const { είδος, κατηγορία, έναρξη, λήξη } = γεγονός
          const { όνομα, τύπος, λογότυπο, ιστότοπος } = οντότητα
          const { σχολή, τμήμαΉΤίτλος, τύποςΣπουδών, διάρκειαΔιδακτέαςΎλης, τεχνολογίες, δίδακτρα, ολοκλήρωση, πιστοποιητικό, φωτογραφίαΠιστοποιητικού } = σπουδές
          const { θέση, τομέαςΕργασίας } = εργασία
          

          const μορφήΠεριβλήματος = ολοκλήρωση === '-' && κείμενο ? 'coming-with-text' : ολοκλήρωση === '-' && !κείμενο ? 'coming-without-text' : !ολοκλήρωση && κείμενο ? 'unfinished-with-text' : !ολοκλήρωση && !κείμενο ? 'unfinished-without-text' : ολοκλήρωση && !κείμενο ? 'finished-without-text' : 'finished-with-text' ;
          const μονόςΖυγόςΠάνωΓραμμή = ταυτότητα % 2 === 0 ? 'timeline-upper-line-even' : 'timeline-upper-line-odd' ;
          const μονόςΖυγόςΟντότητα = ταυτότητα % 2 === 0 ? 'event-even' : 'event-odd' ;
          const χρώμαΕίδους = είδος === "Σπουδές" ? '-orange' : είδος === "Εργασία" ? '-gold' : '-normal' ;


          const μήναςΈναρξης = έναρξη.split('/').length === 2 ? true : false ;
          const χρονολογίαΈναρξης = έναρξη.split('/').length === 2 ? έναρξη.split('/')[1] : έναρξη.split('/')[0] ;
          const μήναςΛήξης = λήξη.split('/').length === 2 ? λήξη.split('/')[0] : '' ;
          const χρονολογίαΛήξης = λήξη.split('/').length === 2 ? λήξη.split('/')[1] : λήξη.split('/')[0] ;
          const ημερομηνίαΈναρξης = έναρξη.length === 4 ? έναρξη : DateTime.fromFormat(`${έναρξη}`, "LL/yyyy");
          const ημερομηνίαΛήξης = λήξη ? λήξη.length === 4 ? λήξη : DateTime.fromFormat(`${λήξη}`, "LL/yyyy") : '';
          const διάρκειαΓεγονότος = λήξη ? parseFloat(Duration.fromObject({ seconds: (ημερομηνίαΛήξης - ημερομηνίαΈναρξης) / 1000 }).as('months')).toFixed(1) : '-';
          
          const κείμενοΧρονολογίας = ταυτότητα % 2 === 0 ? μήναςΈναρξης ? <><div className={styles['timeline-date-month-even']}><EventMonth έναρξη={έναρξη}/></div><div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div></> : <div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div> : μήναςΈναρξης ? <><div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div><div className={styles['timeline-date-month-odd']}><EventMonth έναρξη={έναρξη}/></div></> : <div className={styles['timeline-date-year']}>{χρονολογίαΈναρξης}</div>
          const τύποςΔεδομένωνH3 = είδος === "Σπουδές" ? τμήμαΉΤίτλος : είδος === "Εργασία" ? θέση : τμήμαΉΤίτλος || θέση ;
          const κείμενοΔεδομένωνH6Δευτερεύον = είδος === "Σπουδές" ? τύποςΣπουδών && τύποςΣπουδών : είδος === 'Εργασία' ? τομέαςΕργασίας : null ;
          const κείμενοΔεδομένωνH6Βασικό = είδος ? όνομα : null ;
          const τύποςΔεδομένωνH6Δευτερεύον = είδος === "Σπουδές" ? τοποθεσία && τοποθεσία : είδος === 'Εργασία' ? τοποθεσία && τοποθεσία : null ;
          const τύποςΔεδομένωνH6Βασικό = είδος ? τύπος : null ;

          const τεχνολογίεςΜαθήματος = τεχνολογίες.length !== 0 ? <div className={styles['tech-container']}>{τεχνολογίες.map((τεχνολογία) => {return <TechIcon key={τεχνολογία} όνομαΤεχνολογίας={τεχνολογία}/>})} </div> : null ;
          

          console.log("Ημερομηνία", ταυτότητα, διάρκειαΓεγονότος) ;

          return (
            <>
            <article key={ταυτότητα} className={styles['timeline-item']}>
              <div className={styles['timeline-dot']}/>
              <div className={styles['timeline-content'] + ' ' + styles[`${μορφήΠεριβλήματος}`]}>
                <div className={styles[`${μονόςΖυγόςΠάνωΓραμμή}`]}>
                  <div className={styles['timeline-date'] + ' ' + styles[`color${χρώμαΕίδους}`]}>{κείμενοΧρονολογίας}</div>
                  <div className={styles[`${μονόςΖυγόςΟντότητα}`]}>
                    <h3>{τύποςΔεδομένωνH3}</h3>
                    <div className={styles['event-info']}>
                      {ταυτότητα % 2 !== 0 
                        ?  <>
                        <h6 data-types-main={τύποςΔεδομένωνH6Δευτερεύον} className={styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]}>{κείμενοΔεδομένωνH6Δευτερεύον}</h6>
                        {κείμενοΔεδομένωνH6Δευτερεύον && <pre className={styles['middle-text']}>  |  </pre>}
                        {είδος !== '' && <h6 data-types-sec={τύποςΔεδομένωνH6Βασικό} className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}>{`${κείμενοΔεδομένωνH6Βασικό}`}</h6>}
                        </>
                        : <>
                        {είδος !== '' && <h6 data-types-sec={τύποςΔεδομένωνH6Βασικό} className={styles[`sec-h6`] + ' ' + styles[`sec-h6${χρώμαΕίδους}`]}>{`${κείμενοΔεδομένωνH6Βασικό}`}</h6>}
                        {κείμενοΔεδομένωνH6Δευτερεύον && <pre className={styles['middle-text']}>  |  </pre>}
                        <h6 data-types-main={τύποςΔεδομένωνH6Δευτερεύον} className={styles[`main-h6`] + ' ' + styles[`main-h6${χρώμαΕίδους}`]}>{κείμενοΔεδομένωνH6Δευτερεύον}</h6>
                        </> 
                      }
                    </div>
                  </div>
                </div>
                {κείμενο !== '' && ταυτότητα % 2 === 0 ? <p className={styles[`event-text`] + ' ' + styles['event-text-left']}>{κείμενο}</p> : <p className={styles[`event-text`] + ' ' + styles['event-text-right']}>{κείμενο}</p>}
                {ταυτότητα % 2 === 0 ?  
                <div className={styles[`icons-container`] + ' ' + styles['icons-container-left']}>

                {είδος === 'Εργασία' ? null : φωτογραφίαΠιστοποιητικού ? <Link href=''><TbCertificate className={styles['icon-active']}/></Link> : <TbCertificate className={styles['icon-inactive']}/>}
                {ιστότοπος ? <a target="_blank" href={ιστότοπος} rel="noopener noreferrer"><TbWorldWww className={styles['icon-active']}/></a> : <TbWorldWww className={styles['icon-inactive']}/>}
                
                </div> :  <div className={styles[`icons-container`] + ' ' + styles['icons-container-right']}>
                
                {είδος === 'Εργασία' ? null : φωτογραφίαΠιστοποιητικού ? <Link href=''><TbCertificate className={styles['icon-active']}/></Link> : <TbCertificate className={styles['icon-inactive']}/>}
                {ιστότοπος ? <a target="_blank" href={ιστότοπος} rel="noopener noreferrer"><TbWorldWww className={styles['icon-active']}/></a> : <TbWorldWww className={styles['icon-inactive']}/>}
                
                </div> }
                {τεχνολογίεςΜαθήματος}
               
              {/* <div className={styles['icons-container']}>
                  <FcDiploma2 />
                  <CgWebsite />
                  <FaLinkedinIn />
                  <FaLinkedinIn />
              </div> */}
              </div>
            </article>
            </>
          )
        })
      }

      </div>
    </>
  );
};
export default TimelineItems;
