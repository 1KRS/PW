'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import initialState from './initialState';
import reducer from './reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (γλώσσα) => {
    dispatch({
      type: 'DISPLAY_ALERT',
      payload: { γλώσσα },
    });
    clearAlert();
  };

  const changeLanguage = (νέαΓλώσσα) => {
    localStorage.setItem('γλώσσα', νέαΓλώσσα);
    dispatch({
      type: 'CHANGE_LANGUAGE',
      payload: { νέαΓλώσσα },
    });
  };

  const αλλαγήΥποβάθρου = (τύποςΥποβάθρου) => {
    localStorage.setItem('υπόβαθρο-προγραμματισμού', τύποςΥποβάθρου);
    dispatch({
      type: 'ΑΛΛΑΓΗ_ΥΠΟΒΑΘΡΟΥ',
      payload: { τύποςΥποβάθρου },
    });
  };

  const αλλαγήΜορφήςΣτοιχείων = (μορφήΣτοιχείων) => {
    localStorage.setItem('μορφή-στοιχείων', μορφήΣτοιχείων);
    dispatch({
      type: 'ΑΛΛΑΓΗ_ΜΟΡΦΗΣ_ΣΤΟΙΧΕΙΩΝ',
      payload: { μορφήΣτοιχείων },
    });
  };

  const εναλλαγήΦέγγουςΟρίων = (επιλογήΦέγγουςΟρίων) => {
    localStorage.setItem('φέγγος-ορίων', επιλογήΦέγγουςΟρίων);
    dispatch({
      type: 'ΕΝΑΛΛΑΓΗ_ΦΕΓΓΟΥΣ_ΟΡΙΩΝ',
      payload: { επιλογήΦέγγουςΟρίων },
    });
  };

  const εναλλαγήΦέγγουςΣτοιχείων = (επιλογήΦέγγουςΣτοιχείων) => {
    localStorage.setItem('φέγγος-στοιχείων', επιλογήΦέγγουςΣτοιχείων);
    dispatch({
      type: 'ΕΝΑΛΛΑΓΗ_ΦΕΓΓΟΥΣ_ΣΤΟΙΧΕΙΩΝ',
      payload: { επιλογήΦέγγουςΣτοιχείων },
    });
  };

  const εναλλαγήΕμφάνισηςΧρωμάτων = (εμφάνισηΧρωμάτωνΑρχική) => {
    const εμφάνισηΧρωμάτων =
      εμφάνισηΧρωμάτωνΑρχική === 'αρχική'
        ? false
        : state.φίλτροΚατάστασηςΓεγονότωνΧρονολογίου === ''
          ? !state.showEventColors
          : true;

    localStorage.setItem('showEventColors', εμφάνισηΧρωμάτων);
    dispatch({
      type: 'TOGGLE_EVENT_COLORS',
      payload: { εμφάνισηΧρωμάτων },
    });
  };
  // alias for backward compatibility
  const toggleEventColors = εναλλαγήΕμφάνισηςΧρωμάτων;

  const εναλλαγήΠαραθύρουΠιστοποιητικών = (certificate) => {
    const certificateLink = certificate ? certificate : '';
    dispatch({
      type: 'TOGGLE_CERTIFICATE_MODAL',
      payload: { certificateLink },
    });
  };
  const toggleCertificateModal = εναλλαγήΠαραθύρουΠιστοποιητικών;

  const εναλλαγήΠαραθύρουΡυθμίσεων = () => {
    dispatch({
      type: 'TOGGLE_SETTINGS_MODAL',
    });
  };
  const toggleSettingsModal = εναλλαγήΠαραθύρουΡυθμίσεων;

  const εναλλαγήΚειμένουΜικρήςΟθόνης = () => {
    dispatch({
      type: 'TOGGLE_SMALL_SCREEN_TEXT_MODAL',
    });
  };
  const toggleSmallScreenTextModal = εναλλαγήΚειμένουΜικρήςΟθόνης;

  const αλλαγήΦίλτρουΓεγονότος = (filterName) => {
    dispatch({
      type: 'CHANGE_EVENT_FILTER',
      payload: { filterName },
    });
  };
  const changeEventFilter = αλλαγήΦίλτρουΓεγονότος;

  useEffect(() => {
    const αποθηκευμένηΓλώσσα = localStorage.getItem('γλώσσα');
    const αποθηκευμένοΥπόβαθρο = localStorage.getItem(
      'υπόβαθρο-προγραμματισμού'
    );
    const αποθηκευμένηΜορφή = localStorage.getItem('μορφή-στοιχείων');
    const αποθηκευμένοΦέγγοςΟρίων =
      localStorage.getItem('φέγγος-ορίων') === 'true' ? true : false;
    const αποθηκευμένοΦέγγοςΣτοιχείων =
      localStorage.getItem('φέγγος-στοιχείων') === 'true' ? true : false;
    // const αρχικήΕμφάνισηΧρωμάτων = localStorage.getItem('showEventColors');
    const αρχικήΕμφάνισηΧρωμάτων = 'αρχική';

    if (αποθηκευμένηΓλώσσα) {
      changeLanguage(αποθηκευμένηΓλώσσα);
    }

    if (αποθηκευμένοΥπόβαθρο) {
      αλλαγήΥποβάθρου(αποθηκευμένοΥπόβαθρο);
    }

    if (αποθηκευμένηΜορφή) {
      αλλαγήΜορφήςΣτοιχείων(αποθηκευμένηΜορφή);
    }

    if (αποθηκευμένοΦέγγοςΟρίων) {
      εναλλαγήΦέγγουςΣτοιχείων(αποθηκευμένοΦέγγοςΟρίων);
    }
    if (αποθηκευμένοΦέγγοςΣτοιχείων) {
      εναλλαγήΦέγγουςΣτοιχείων(αποθηκευμένοΦέγγοςΣτοιχείων);
    }

    εναλλαγήΕμφάνισηςΧρωμάτων(αρχικήΕμφάνισηΧρωμάτων);
  }, []);

  // Φορτώνει τα παραγγέλματα μία φορά ανά συνεδρία και τα αποθηκεύει στο
  // sessionStorage για να αποφευχθούν διπλά αιτήματα κατά την ανανέωση ή
  // το επαναπρόσδεση (remount) στην ίδια καρτέλα.
  useEffect(() => {
    const key = 'pw_paraggelmata_data';
    const tsKey = 'pw_paraggelmata_ts';
    try {
      const cached = sessionStorage.getItem(key);
      const cachedTs = sessionStorage.getItem(tsKey);
      const now = Date.now();
      if (cached && cachedTs && now - Number(cachedTs) < 10000) {
        // χρησιμοποιεί την αποθηκευμένη τιμή αν είναι πρόσφατη (παράθυρο 10s)
        const parsed = JSON.parse(cached);
        dispatch({
          type: 'ΟΡΙΣΜΟΣ_ΠΑΡΑΓΓΕΛΜΑΤΩΝ',
          payload: { παραγγέλματα: parsed },
        });
        return;
      }
    } catch (e) {
      // αγνοεί σφάλματα sessionStorage
    }

    let cancelled = false;

    const fetchΠαραγγέλματα = async () => {
      try {
        const res = await fetch('/api/kryle/ola');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const αποτελέσματα = data?.αποτελέσματα || [];
        if (cancelled) return;
        dispatch({
          type: 'ΟΡΙΣΜΟΣ_ΠΑΡΑΓΓΕΛΜΑΤΩΝ',
          payload: { παραγγέλματα: αποτελέσματα },
        });
        try {
          sessionStorage.setItem(key, JSON.stringify(αποτελέσματα));
          sessionStorage.setItem(tsKey, String(Date.now()));
        } catch (e) {
          // αγνοεί σφάλματα κατά την αποθήκευση στο storage
        }
      } catch (err) {
        console.warn('Σφάλμα ανάκτησης παραγγελμάτων στο context:', err);
      }
    };

    fetchΠαραγγέλματα();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        changeLanguage,
        αλλαγήΥποβάθρου,
        αλλαγήΜορφήςΣτοιχείων,
        εναλλαγήΦέγγουςΟρίων,
        εναλλαγήΦέγγουςΣτοιχείων,
        // Ελληνικά ονόματα (προτιμώμενα)
        εναλλαγήΕμφάνισηςΧρωμάτων,
        εναλλαγήΠαραθύρουΠιστοποιητικών,
        εναλλαγήΠαραθύρουΡυθμίσεων,
        εναλλαγήΚειμένουΜικρήςΟθόνης,
        αλλαγήΦίλτρουΓεγονότος,
        // Αγγλικά aliases για συμβατότητα
        toggleEventColors,
        toggleCertificateModal,
        toggleSettingsModal,
        toggleSmallScreenTextModal,
        changeEventFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
