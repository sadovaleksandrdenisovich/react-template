import viteLegacyPlugin from '@vitejs/plugin-legacy';
import viteReactPlugin from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import vitePluginBanner from 'vite-plugin-banner';
import { default as vitePluginChecker } from 'vite-plugin-checker';
import vitePluginSvgr from 'vite-plugin-svgr';
import vitePluginTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
  plugins: [
    viteReactPlugin(),
    vitePluginChecker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint ./src --ext .tsx,.ts --fix',
      },
    }),
    vitePluginTsconfigPaths(),
    viteLegacyPlugin({
      targets: ['defaults', 'not dead', 'last 100 versions'],
    }),
    vitePluginBanner(
      'Made by Sadov Aleksandr Denisovich Studio.\n* Our site: https://sadovaleksandrdenisovich.ru/',
    ),
    vitePluginSvgr(),
  ],
  css: {
    modules: {
      generateScopedName:
        mode === 'development'
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:6]',
      hashPrefix: 'prefix',
      localsConvention: 'camelCaseOnly',
    },
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
}));
