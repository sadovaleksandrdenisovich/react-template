import viteLegacyPlugin from '@vitejs/plugin-legacy';
import viteReactPlugin from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { splitVendorChunkPlugin } from 'vite';
import vitePluginBanner from 'vite-plugin-banner';
import { default as vitePluginChecker } from 'vite-plugin-checker';
import vitePluginStylelint from 'vite-plugin-stylelint';
import vitePluginSvgr from 'vite-plugin-svgr';
import vitePluginTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// @ts-ignore
import { name, author } from './package.json';

export default defineConfig(({ mode }) => ({
  plugins: [
    viteReactPlugin(),
    splitVendorChunkPlugin(),
    vitePluginChecker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint ./src --ext .tsx,.ts --fix',
      },
    }),
    vitePluginTsconfigPaths(),
    viteLegacyPlugin({
      targets: ['defaults', '>0.2%', 'not dead', 'not op_mini all'],
    }),
    vitePluginStylelint({ fix: true }),
    vitePluginSvgr(),
    vitePluginBanner(
      [
        '',
        ['Created by', author.name].join(' '),
        ['Our url of site', author.url].join(': '),
        ['Our email address', author.email].join(': '),
        '',
      ].join('\n'),
    ),
  ],
  css: {
    modules: {
      generateScopedName:
        mode === 'development'
          ? '[name]__[local]__[hash:base64:5]'
          : `${name}-[hash:base64:6]`,
      hashPrefix: 'prefix',
      localsConvention: 'camelCaseOnly',
    },
    postcss: {
      plugins: [
        autoprefixer({
          flexbox: true,
          overrideBrowserslist: [
            'defaults',
            '>0.2%',
            'not dead',
            'not op_mini all',
          ],
        }),
      ],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  server: {
    port: 3000,
  },
}));
