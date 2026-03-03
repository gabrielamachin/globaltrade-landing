import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/globaltrade-landing/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
