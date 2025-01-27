import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window',  // Polyfill global to window for the browser
  },
  optimizeDeps: {
    include: [
      'crypto',  // Add other Node.js modules if needed
      'stream',
      // You can add other libraries that are being problematic here
    ]
  }
});
