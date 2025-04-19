'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import initialState from './initialState';
import reducer from './reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (language) => {
    dispatch({
      type: 'DISPLAY_ALERT',
      payload: { language },
    });
    clearAlert();
  };

  const changeLanguage = (newLanguage) => {
    localStorage.setItem('language', newLanguage);
    dispatch({
      type: 'CHANGE_LANGUAGE',
      payload: { newLanguage },
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

  const toggleEventColors = (εμφάνισηΧρωμάτωνΑρχική) => {
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

  const toggleCertificateModal = (certificate) => {
    const certificateLink = certificate ? certificate : '';
    dispatch({
      type: 'TOGGLE_CERTIFICATE_MODAL',
      payload: { certificateLink },
    });
  };

  const toggleSettingsModal = () => {
    dispatch({
      type: 'TOGGLE_SETTINGS_MODAL',
    });
  };

  const toggleSmallScreenTextModal = () => {
    dispatch({
      type: 'TOGGLE_SMALL_SCREEN_TEXT_MODAL',
    });
  };

  const changeEventFilter = (filterName) => {
    dispatch({
      type: 'CHANGE_EVENT_FILTER',
      payload: { filterName },
    });
  };

  useEffect(() => {
    const αποθηκευμένηΓλώσσα = localStorage.getItem('language');
    const αποθηκευμένοΥπόβαθρο = localStorage.getItem('υπόβαθρο-προγραμματισμού');
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

    toggleEventColors(αρχικήΕμφάνισηΧρωμάτων);
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
