import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Development server URL
    setupNodeEvents(on, config) {
      // Event handlers can be defined here
    },
  },
});
