import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(process.cwd(), 'src');

export default defineConfig({
  root,

  define: {
    global: 'globalThis',
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        gallery: resolve(root, '1-gallery.html'),
        form: resolve(root, '2-form.html'),
      },
    },
  },
});
