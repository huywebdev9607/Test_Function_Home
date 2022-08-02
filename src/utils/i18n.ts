import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'src/locales/en/translation.json';
import vi from 'src/locales/vi/translation.json';

i18next.use(initReactI18next).init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng:'vi',
    // Using simple hardcoded resources for simple example
    resources: {
        vi: {
            translation: vi
        },
        en: {
            translation: en
        },

    },
});

export default i18next