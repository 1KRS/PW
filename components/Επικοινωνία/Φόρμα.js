'use client';

import styles from './Φόρμα.module.css';

import { useRef } from 'react';

import Input from '@/components/Επικοινωνία/Inputs/Input';
import Textarea from '@/components/Επικοινωνία/Inputs/Textarea';

import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';

import { μετάφραση } from '@/utils/μετάφραση';

const Form = ({ id }) => {
  const [φόρτωση, setΦόρτωση] = useState(false);
  const [μήνυμαΕπιτυχίας, setΜήνυμαΕπιτυχίας] = useState('');
  const [ονοματεπώνυμο, setΟνοματεπώνυμο] = useState('');
  const [ηΤαχυδρομείο, setΗΤαχυδρομείο] = useState('');
  const [αριθμός, setΑριθμός] = useState('');
  const [θέμα, setΘέμα] = useState('');
  const [κείμενο, setΚείμενο] = useState('');

  const { language } = useAppContext();

  const formRef = useRef(null);

  // 👇 Λήψη όλων των τιμών της φόρμας
  const χειρισμόςΟνοματεπώνυμου = (e) => {
    setΟνοματεπώνυμο(e.target.value);
  };
  const χειρισμόςΤαχυδρομείου = (e) => {
    setΗΤαχυδρομείο(e.target.value);
  };
  const χειρισμόςΑριθμού = (e) => {
    setΑριθμός(e.target.value);
  };
  const χειρισμόςΘέματος = (e) => {
    setΘέμα(e.target.value);
  };
  const χειρισμόςΚειμένου = (e) => {
    setΚείμενο(e.target.value);
  };

  const onSubmit = async (e) => {
    // Αποτροπή της υποβολής της φόρμας με τον παραδοσιακό τρόπο
    e.preventDefault();

    // Αποτροπή διπλής υποβολής
    if (φόρτωση) {
      return;
    }

    setΦόρτωση(true);
    setΜήνυμαΕπιτυχίας('');

    await fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify({
        fullName: ονοματεπώνυμο,
        email: ηΤαχυδρομείο,
        number: αριθμός,
        subject: θέμα,
        text: κείμενο,
      }),
    });

    setΦόρτωση(false);
    setΜήνυμαΕπιτυχίας(μετάφραση('Το μήνυμα εστάλη', language));

    // ❗️ Επαναφορά των τιμών της φόρμας και του πλήκτρου αποστολής μετά από επιτυχή υποβολή
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
      }

      setΜήνυμαΕπιτυχίας('');
    }, [4000]);
  };

  return (
    <form
      action=""
      ref={formRef}
      onSubmit={onSubmit}
      className={styles['φόρμα']}
      id={id}
    >
      <div className={styles['ομάδα-πεδίων']}>
        <div className={styles['περιέκτης-πεδίου']}>
          <Input
            type="text"
            style="κείμενο"
            name="name"
            placeholder="Πλήρες Ονοματεπώνυμο"
            χειρισμόςΠληκτρισμού={χειρισμόςΟνοματεπώνυμου}
            required
          />
        </div>
        <div className={styles['περιέκτης-πεδίου']}>
          <Input
            type="email"
            style="ηΤαχυδρομείο"
            name="email"
            placeholder="ηΤαχυδρομείο"
            χειρισμόςΠληκτρισμού={χειρισμόςΤαχυδρομείου}
            required
          />
        </div>
        <div className={styles['περιέκτης-πεδίου']}>
          <Input
            type="number"
            style="αριθμός-τηλεφώνου"
            name="phone-number"
            placeholder="Αριθμός Τηλεφώνου"
            χειρισμόςΠληκτρισμού={χειρισμόςΑριθμού}
            required
          />
        </div>
        <div className={styles['περιέκτης-πεδίου']}>
          <Input
            type="text"
            style="κείμενο"
            name="subject"
            placeholder="Θέμα"
            χειρισμόςΠληκτρισμού={χειρισμόςΘέματος}
            required
          />
        </div>
      </div>
      <div className={styles['ομάδα-πεδίων-2']}>
        <div className={styles['περιέκτης-πεδίου']}>
          <Textarea
            cols="30"
            rows="10"
            name="message"
            placeholder="Γράψτε το μήνυμά σας στα ελληνικά."
            χειρισμόςΠληκτρισμού={χειρισμόςΚειμένου}
            required
          />
        </div>
        <Input
          type="submit"
          style={μήνυμαΕπιτυχίας ? 'πλήκτρο-επιτυχίας' : 'πλήκτρο'}
          value={μήνυμαΕπιτυχίας ? μήνυμαΕπιτυχίας : 'Αποστολή Μηνύματος'}
          disabled={φόρτωση}
          onSubmit={onSubmit}
        />
      </div>
    </form>
  );
};

export default Form;
