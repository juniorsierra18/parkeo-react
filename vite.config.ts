import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://juniorsierra18.github.io/Parkeo/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
