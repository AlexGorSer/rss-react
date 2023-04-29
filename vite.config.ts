/// <reference types="vitest" />
/// <reference types="vite/client" />

import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react({ fastRefresh: false }),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        'src/main.tsx',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
      ],
      include: ['**/*.{jsx,tsx}'],
      all: true,
      src: ['src'],
      skipFull: false,
      provider: 'c8',
      reporter: ['text'],
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
