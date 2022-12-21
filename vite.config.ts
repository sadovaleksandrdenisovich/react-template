import viteLegacyPlugin from '@vitejs/plugin-legacy';
import viteReactPlugin from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import vitePluginBanner from 'vite-plugin-banner';
import { default as checkerPlugin } from 'vite-plugin-checker';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    viteReactPlugin(),
    checkerPlugin({
      typescript: true,
      eslint: {
        lintCommand: 'eslint ./src --ext .tsx,.ts --fix',
      },
    }),
    tsconfigPathsPlugin(),
    viteLegacyPlugin({
      targets: ['defaults', 'not dead', 'last 100 versions'],
    }),
    vitePluginBanner(
      'Made by Sadov Aleksandr Denisovich Studio.\n* Our site: https://sadovaleksandrdenisovich.ru/',
    ),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          flexbox: true,
          overrideBrowserslist: ['>0.2%', 'not dead', 'not op_mini all'],
        }),
      ],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
