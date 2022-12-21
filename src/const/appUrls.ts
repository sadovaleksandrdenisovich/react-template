import urlJoin from 'url-join';

import { PATHS } from 'const/paths';
import { SYMBOLS } from 'const/symbols';

/**
 * @description Ссылки приложения.
 * */
export const APP_URLS = {
  /**
   * @description Домашняя страница.
   * */
  home: SYMBOLS.slash,

  /**
   * @description Cтраница не найдена.
   * */
  get notFound() {
    return urlJoin(this.home, PATHS.notFound);
  },
} as const;
