'use client';

import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';

const TranslatedText = ({ children }) => {
  const { γλώσσα } = useAppContext();

  return <>{μετάφραση(`${children}`, γλώσσα)}</>;
};

export default TranslatedText;
