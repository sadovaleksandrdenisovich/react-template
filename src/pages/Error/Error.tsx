import type { FC } from 'react';

import { Outlet } from 'react-router-dom';

import type { ErrorInternalServerComponent } from './ErrorInternalServer';
import { ErrorInternalServer } from './ErrorInternalServer';
import type { ErrorNotFoundComponent } from './ErrorNotFound';
import { ErrorNotFound } from './ErrorNotFound';

/**
 * @description Компонент "Ошибки".
 * */
export interface ErrorComponent extends FC {
  /**
   * @description Компонент "Серверной ошибки".
   * */
  InternalServer: ErrorInternalServerComponent;

  /**
   * @description Компонент "Ошибки не найдена".
   * */
  NotFound: ErrorNotFoundComponent;
}

/**
 * @description Ошибка.
 * */
export const Error: ErrorComponent = () => <Outlet />;

Error.displayName = 'Error';

Error.InternalServer = ErrorInternalServer;
Error.NotFound = ErrorNotFound;
