import { useState } from 'react';
import icon_eng_lang from '../../assets/icon_eng_lang.png';
import icon_es_lang from '../../assets/icon_es_lang.png';
import "./languageSelector.css";


const LanguageSelector = () => {
  const [language, setLanguage] = useState('en');

  const handleChangeLang = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  }
  return (
    <div className='language-selector' onClick={handleChangeLang}>
      <img src={language === 'en' ? icon_eng_lang : icon_es_lang} alt="language" />
    </div>
  )
}

export default LanguageSelector;
