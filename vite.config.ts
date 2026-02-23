import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@contracts': path.resolve(__dirname, 'src/contracts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@validation': path.resolve(__dirname, 'src/validation'),
	  '@src': path.resolve(__dirname, 'src/'),
    }
  },
  base: '/cop-connect-4/'
});