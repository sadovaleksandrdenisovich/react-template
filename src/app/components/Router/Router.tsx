import type { FC } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { SYMBOLS, PATHS, APP_URLS } from 'const';
import { Public, Error } from 'pages';

/**
 * @description Публичные страницы.
 * */
const PUBLIC_ROUTES: RouteObject = {
  path: SYMBOLS.slash,
  element: <Public />,
};

/**
 * @description Ошибки страницы.
 * */
const ERROR_ROUTES: RouteObject = {
  path: SYMBOLS.slash,
  element: <Error />,
  children: [
    {
      path: PATHS.internalServer,
      element: <Error.InternalServer />,
    },
    {
      path: PATHS.notFound,
      element: <Error.NotFound />,
    },
  ],
};

/**
 * @description Системные страницы.
 * */
const NO_MATCH_ROUTES: RouteObject = {
  path: SYMBOLS.asterisk,
  element: <Navigate to={APP_URLS.notFound} replace />,
};

/**
 * @description Маршрутизатор.
 * */
export const Router: FC = () =>
  useRoutes([PUBLIC_ROUTES, ERROR_ROUTES, NO_MATCH_ROUTES]);

Router.displayName = 'Router';
