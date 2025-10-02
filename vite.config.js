import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Snitchy-s-Hub/",
  server: {
    host: '0.0.0.0',
  }
})
