'use client';

import { createContext, useContext, useReducer } from 'react';
import initialState from './initialState';
import reducer from './reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (language) => {
    dispatch({ type: 'DISPLAY_ALERT', payload: { language } });
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

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, changeLanguage, changeBackground }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
