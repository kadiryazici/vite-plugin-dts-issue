import { defineConfig, type UserConfig } from 'vite';
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import VueJSX from '@vitejs/plugin-vue-jsx';
import DTS from 'vite-plugin-dts';

const devConfig: UserConfig = {
  plugins: [Vue(), VueJSX()],
  root: './playground',
};

const prodConfig: UserConfig = {
  plugins: [
    Vue(), //
    VueJSX(),
    DTS({
      outputDir: 'dist/types',
      include: ['src'],
      exclude: ['playground'],
      logDiagnostics: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src', 'lib.ts'),
      name: 'Listeleme',
      fileName: 'index',
      formats: ['umd', 'es', 'iife'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};

export default defineConfig(({ mode }) => (mode == 'production' ? prodConfig : devConfig));
