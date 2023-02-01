import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@util-tools-lj/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@util-tools-lj/core': resolve(__dirname, 'packages/core/index.ts'),
      '@util-tools-lj/vue-hooks': resolve(__dirname, 'packages/vue-hooks/index.ts'),
      '@util-tools-lj/react-hooks': resolve(__dirname, 'packages/react-hooks/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom', // or 'jsdom', 'node'
    reporters: 'dot',
  },
});
