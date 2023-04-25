/// <reference types="vitest" />
/// <reference types="vite/client" />

import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react({ fastRefresh: false }), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [...configDefaults.exclude, 'src/main.tsx'],
      include: ['**/*.{jsx,tsx}'],
      all: true,
      src: ['src'],
      skipFull: false,
      provider: 'c8',
      reporter: ['text'],
    },
  },
  server: {
    host: 'localhost',
  },
});
