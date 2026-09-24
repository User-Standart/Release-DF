import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Relative base keeps the build portable: it works at a domain root
  // (Hostinger, Netlify, Vercel) and under a sub-path (GitHub Pages).
  base: './',
  plugins: [react(), tailwindcss()],
  test: {
    include: ['src/**/*.test.ts'],
  },
});
