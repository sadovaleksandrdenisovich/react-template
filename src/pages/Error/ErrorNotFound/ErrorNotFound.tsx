import type { FC } from 'react';

/**
 * @description Компонент "Ошибки не найдена".
 * */
export interface ErrorNotFoundComponent extends FC {}

/**
 * @description Ошибка не найдена.
 * */
export const ErrorNotFound: ErrorNotFoundComponent = () => <div>404</div>;

ErrorNotFound.displayName = 'ErrorNotFound';
