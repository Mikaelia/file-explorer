import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/file-explorer/', // Change 'your-repository-name' to your repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Specify the entry point of your app
      },
    },
  },
});