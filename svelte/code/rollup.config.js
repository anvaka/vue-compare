import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

const production = false;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			extensions: ['.svelte'],
			emitCss: false,
		}),

		resolve({browser: true}),
		commonjs(),
		terser()
	]
};
