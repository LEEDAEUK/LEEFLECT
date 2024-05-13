import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import packageJson from './package.json';
import env from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`実行モードは${mode}です。`);

  return {
    plugins: [vue(), env({ prefix: 'VITE', mountedPath: 'process.env' })],
    define: {
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
      'import.meta.env.CURRENT_ENV': JSON.stringify(mode),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use "~/override.scss" as *;
        `,
        },
      },
    },
  };
});
