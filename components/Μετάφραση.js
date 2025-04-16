'use client';

import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';


const TranslatedText = ({ children }) => {
  const { language } = useAppContext();

  return <>{μετάφραση(`${children}`, language)}</>;
};

export default TranslatedText;