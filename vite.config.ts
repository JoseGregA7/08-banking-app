import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.ts',
    include: ['**/*.test.tsx', '**/*.test.ts'],
  },
  server: {
    proxy: {
      '/api': 'http://3.145.213.103:8080',
    },
  },
});
