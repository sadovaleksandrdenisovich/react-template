import type { FC } from 'react';

/**
 * @description Компонент "Серверной ошибки".
 * */
export interface ErrorInternalServerComponent extends FC {}

/**
 * @description Серверная ошибка.
 * */
export const ErrorInternalServer: ErrorInternalServerComponent = () => (
  <div>500</div>
);

ErrorInternalServer.displayName = 'ErrorInternalServer';
