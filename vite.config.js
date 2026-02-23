import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
});
