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

  const toggleEventColors = () => {
    const εμφάνισηΧρωμάτων =
      state.φίλτροΚατάστασηςΓεγονότωνΧρονολογίου === ''
        ? !state.showEventColors
        : true;
    localStorage.setItem('showEventColors', εμφάνισηΧρωμάτων);
    dispatch({
      type: 'TOGGLE_EVENT_COLORS',
      payload: { εμφάνισηΧρωμάτων },
    });
  };

  const toggleCertificateModal = (certificate) => {
    const paperLink = certificate ? certificate : '';
    dispatch({
      type: 'TOGGLE_CERTIFICATE_MODAL',
      payload: { paperLink },
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
    const εμφάνισηΧρωμάτων = localStorage.getItem('showEventColors');

    if (αποθηκευμένηΓλώσσα) {
      changeLanguage(αποθηκευμένηΓλώσσα);
    }

    if (αποθηκευμένοΥπόβαθρο) {
      changeBackground(αποθηκευμένοΥπόβαθρο);
    }

    if (εμφάνισηΧρωμάτων) {
      toggleEventColors();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        changeLanguage,
        changeBackground,
        toggleEventColors,
        toggleCertificateModal,
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
