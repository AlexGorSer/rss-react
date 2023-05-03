import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      codeCoverageTask(on, config);

      return config;
    },
    baseUrl: 'http://localhost:5173',
  },

  viewportHeight: 900,
  viewportWidth: 1200,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  video: false,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: false,
});
