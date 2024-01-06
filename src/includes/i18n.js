import { createI18n } from "vue-i18n";
import en from '@/locales/en'
import fa from '@/locales/fa'

export default createI18n({
  locale: 'en', fallbackLocale: 'en', messages: {
    en, fa
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: 'USD'
      }
    },
    fa: {
      currency: {
        style: 'currency',
        currency: 'IRR'
      }
    }
  }
});