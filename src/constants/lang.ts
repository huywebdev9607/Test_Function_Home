import enFlag from 'src/assets/ic_flag_en.svg';
import vnFlag from 'src/assets/ic_flag_vn.svg';


export const Language = {
    vi: 'vi',
    en: 'en',
  };
  
  export const LanguageDisplay = {
    [Language.vi]: 'Tiếng Việt',
    [Language.en]: 'English',
  };
  

export const Langs = {
    [Language.en]: {
      label: 'English',
      icon: enFlag,
    },
    [Language.vi]: {
      label: 'Việt Nam',
      icon: vnFlag,
    },
  };
  