import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@stores': path.resolve(__dirname, 'src/stores'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@validation': path.resolve(__dirname, 'src/validation'),
		},
	},
});
