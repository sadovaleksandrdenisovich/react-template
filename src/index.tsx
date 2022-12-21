import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { App } from 'app';
import 'i18n';

import './index.scss';

/**
 * @description Контейнер приложения.
 * */
const container = document.getElementById('app');

/**
 * @description Проверка на наличие контейнера.
 * */
if (!container) throw Error('Контейнер приложения не найден!');

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
