import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@util-tools-lj/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@util-tools-lj/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
});
