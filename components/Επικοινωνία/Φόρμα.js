'use client';

import styles from './Φόρμα.module.css';

import Input from '@/components/Επικοινωνία/Inputs/Input';
import Textarea from '@/components/Επικοινωνία/Inputs/Textarea';

import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';
import { μετάφραση } from '@/utils/μετάφραση';

const Φόρμα = ({ id }) => {
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
    // console.log('Ονοματεπώνυμο:', e.target.value);
  };
  const χειρισμόςΤαχυδρομείου = (e) => {
    setΗΤαχυδρομείο(e.target.value);
    // console.log('ηΤαχυδρομείο:', e.target.value);
  };
  const χειρισμόςΑριθμού = (e) => {
    setΑριθμός(e.target.value);
    // console.log('Αριθμός τηλεφώνου:', e.target.value);
  };
  const χειρισμόςΘέματος = (e) => {
    setΘέμα(e.target.value);
    // console.log('Θέμα:', e.target.value);
  };
  const χειρισμόςΚειμένου = (e) => {
    setΚείμενο(e.target.value);
    // console.log('Κείμενο:', e.target.value);
  };

  const onSubmit = async (e) => {
    // Αποτροπή της υποβολής της φόρμας με τον παραδοσιακό τρόπο
    e.preventDefault();

    // Αποτροπή διπλής υποβολής
    if (loading) {
      return;
    }

    // 👇 Λήψη όλων των τιμών της φόρμας ως αντικείμενο

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
  };

  // const onSubmit = async (e) => {
  //   // Αποτροπή της υποβολής της φόρμας με τον παραδοσιακό τρόπο
  //   e.preventDefault();

  //   // Αποτροπή διπλής υποβολής
  //   if (loading) {
  //     return;
  //   }

  //   // 👇 Λήψη όλων των τιμών της φόρμας ως αντικείμενο
  //   const τιμέςΦόρμας = {
  //     ονοματεπώνυμο: ονοματεπώνυμο,
  //     ηΤαχυδρομείο: ηΤαχυδρομείο,
  //     αριθμός: αριθμός,
  //     θέμα: θέμα,
  //     κείμενο: κείμενο,
  //   };
  //   console.log('Τιμές Φόρμας', τιμέςΦόρμας);
  //   setLoading(true);
  //   setSuccessMessage('');

  //   await fetch('/api/emails', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(τιμέςΦόρμας),
  //   });

  //   setLoading(false);
  //   setSuccessMessage(μετάφραση('Το μήνυμα εστάλη', language));

  //   // Επαναφορά των τιμών της φόρμας μετά από επιτυχή υποβολή
  //   // form.reset();

  //   // try {
  //   //   await fetch('/api/emails', {
  //   //     method: 'POST',
  //   //     headers: { 'Content-Type': 'application/json' },
  //   //     body: JSON.stringify(τιμέςΦόρμας),
  //   //   }).then((response) => {
  //   //     if (!response.ok) {
  //   //       throw new Error(`HTTP error! Status: ${response.status}`);
  //   //     }
  //   //     return response.json();
  //   //   });

  //   //   setLoading(false);
  //   //   setSuccessMessage(μετάφραση('Το μήνυμα εστάλη', language));

  //   //   // Επαναφορά των τιμών της φόρμας μετά από επιτυχή υποβολή
  //   //   form.reset();
  //   // } catch (err) {
  //   //   console.error(err);
  //   //   alert(
  //   //     μετάφραση(
  //   //       'Κάποιο λάθος προέκυψε κατά την αποστολή του μηνύματος',
  //   //       language
  //   //     )
  //   //   );
  //   //   setLoading(false);
  //   // }
  // };

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

export default Φόρμα;
