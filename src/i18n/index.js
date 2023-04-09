
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptJson from './translations/pt.json'
import enJson from './translations/en.json'

i18n.use(initReactI18next).init({
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: enJson,
            pt: ptJson
        }
    })

export default i18n
