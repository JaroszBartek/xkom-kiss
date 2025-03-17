import { defineConfig } from 'vite';
import { defineConfig as testConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  plugins: [react()],
});

const vitestConfig = testConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
});

export default {
  ...viteConfig,
  ...vitestConfig,
};
