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

  const changeBackground = (backgroundType) => {
    localStorage.setItem('programming-background', backgroundType);
    dispatch({
      type: 'CHANGE_BACKGROUND',
      payload: { backgroundType },
    });
  };

  const αλλαγήΜορφήςΣτοιχείων = (μορφήΣτοιχείων) => {
    localStorage.setItem('μορφή-στοιχείων', μορφήΣτοιχείων);
    dispatch({
      type: 'ΑΛΛΑΓΗ_ΜΟΡΦΗΣ_ΣΤΟΙΧΕΙΩΝ',
      payload: { μορφήΣτοιχείων },
    });
  };

  const εναλλαγήΦέγγουςΣτοιχείων = (επιλογήΦέγγους) => {
    localStorage.setItem('φέγγος-στοιχείων', επιλογήΦέγγους);
    dispatch({
      type: 'ΕΝΑΛΛΑΓΗ_ΦΕΓΓΟΥΣ_ΣΤΟΙΧΕΙΩΝ',
      payload: { επιλογήΦέγγους },
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

  const changeEventFilter = (filterName) => {
    dispatch({
      type: 'CHANGE_EVENT_FILTER',
      payload: { filterName },
    });
  };

  useEffect(() => {
    const αποθηκευμένηΓλώσσα = localStorage.getItem('language');
    const αποθηκευμένοΥπόβαθρο = localStorage.getItem('programming-background');
    const αποθηκευμένηΜορφή = localStorage.getItem('μορφή-στοιχείων');
    const αποθηκευμένοΦέγγος =
      localStorage.getItem('φέγγος-στοιχείων') === 'true' ? true : false;
    // const αρχικήΕμφάνισηΧρωμάτων = localStorage.getItem('showEventColors');
    const αρχικήΕμφάνισηΧρωμάτων = 'αρχική';

    if (αποθηκευμένηΓλώσσα) {
      changeLanguage(αποθηκευμένηΓλώσσα);
    }

    if (αποθηκευμένοΥπόβαθρο) {
      changeBackground(αποθηκευμένοΥπόβαθρο);
    }

    if (αποθηκευμένηΜορφή) {
      αλλαγήΜορφήςΣτοιχείων(αποθηκευμένηΜορφή);
    }

    if (αποθηκευμένοΦέγγος) {
      εναλλαγήΦέγγουςΣτοιχείων(αποθηκευμένοΦέγγος);
    }

    toggleEventColors(αρχικήΕμφάνισηΧρωμάτων);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        changeLanguage,
        changeBackground,
        αλλαγήΜορφήςΣτοιχείων,
        εναλλαγήΦέγγουςΣτοιχείων,
        toggleEventColors,
        toggleCertificateModal,
        toggleSettingsModal,
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
