'use client';

import styles from './Φόρμα.module.css';

import Input from '@/components/Επικοινωνία/Inputs/Input';
import Textarea from '@/components/Επικοινωνία/Inputs/Textarea';

import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';

import { μετάφραση } from '@/utils/μετάφραση';

const Form = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [ονοματεπώνυμο, setΟνοματεπώνυμο] = useState('');
  const [ηΤαχυδρομείο, setΗΤαχυδρομείο] = useState('');
  const [αριθμός, setΑριθμός] = useState('');
  const [θέμα, setΘέμα] = useState('');
  const [κείμενο, setΚείμενο] = useState('');

  const { language } = useAppContext();

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
    if (loading) {
      return;
    }

    setLoading(true);
    setSuccessMessage('');

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

    setLoading(false);
    setSuccessMessage(μετάφραση('Το μήνυμα εστάλη', language));

    // ❗️ Επαναφορά των τιμών της φόρμας μετά από επιτυχή υποβολή
    // form.reset();
  };

  return (
    <form action="" onSubmit={onSubmit} className={styles['φόρμα']} id={id}>
      <div className={styles['input-group']}>
        <div className={styles['input-box']}>
          <Input
            type="text"
            style="text"
            name="name"
            placeholder="Πλήρες Ονοματεπώνυμο"
            χειρισμόςΠληκτρισμού={χειρισμόςΟνοματεπώνυμου}
            required
          />
        </div>
        <div className={styles['input-box']}>
          <Input
            type="email"
            style="email"
            name="email"
            placeholder="ηΤαχυδρομείο"
            χειρισμόςΠληκτρισμού={χειρισμόςΤαχυδρομείου}
            required
          />
        </div>
        <div className={styles['input-box']}>
          <Input
            type="number"
            style="phone-number"
            name="phone-number"
            placeholder="Αριθμός Τηλεφώνου"
            χειρισμόςΠληκτρισμού={χειρισμόςΑριθμού}
            required
          />
        </div>
        <div className={styles['input-box']}>
          <Input
            type="text"
            style="text"
            name="subject"
            placeholder="Θέμα"
            χειρισμόςΠληκτρισμού={χειρισμόςΘέματος}
            required
          />
        </div>
      </div>
      <div className={styles['input-group-2']}>
        {successMessage && <p>{successMessage}</p>}
        <div className={styles['input-box']}>
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
          style="btn"
          value="Αποστολή Μηνύματος"
          disabled={loading}
          onSubmit={onSubmit}
        />
      </div>
    </form>
  );
};

export default Form;
