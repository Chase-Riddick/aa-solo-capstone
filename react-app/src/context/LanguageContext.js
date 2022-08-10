import { createContext, useContext, useEffect, useState } from 'react';
import { English, Chinese } from '../language'

export const LanguageContext = createContext();
export const useLanguageContext = () => useContext(LanguageContext);

export default function LanguageContextProvider(props) {
  const [language, setLanguage] = useState('English');

  useEffect(()=>{
    localStorage.setItem('lang1', `${language}`);
}, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        English,
        Chinese
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}