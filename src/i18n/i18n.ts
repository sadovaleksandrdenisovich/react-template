import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ru } from 'i18n/locale';

/**
 * @description Языки.
 */
export enum LOCALE {
  /**
   * @description Русский.
   */
  ru = 'ru',
}

use(initReactI18next)
  .init({
    resources: {
      [LOCALE.ru]: ru,
    },
    lng: LOCALE.ru,
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false,
    },
  })
  .catch(console.error);
