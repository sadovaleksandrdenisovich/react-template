import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

/**
 * @description Публичный узел.
 * */
export const Public: FC = () => {
  const { t } = useTranslation();

  return <div>{t('helloWorld')}</div>;
};

Public.displayName = 'Public';
