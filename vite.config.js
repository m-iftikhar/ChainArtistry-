import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window', // Define `global` as `window`
  },
  resolve: {
    alias: {
      ws: 'isomorphic-ws', // Replace `ws` with `isomorphic-ws`
    },
  },
});