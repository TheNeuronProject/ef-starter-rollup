import path from 'path'
import { deleteSync } from 'del'

// Rollup plugins
import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import progress from 'rollup-plugin-progress'
import execute from 'rollup-plugin-shell'
import copy from 'rollup-plugin-copy-glob'
import browsersync from 'rollup-plugin-browsersync'

// browsersync config
import bsConfig from './bs-config'

// build configuration
import userConfig from './build.config.mjs'

import { isProduction } from './utils.mjs'

const {
	del,
	input,
	output,
	format,
	target,
	external,
	globals,
	plugins,
	copyOptions,
	execCommands
} = userConfig

// Clear previous builds files
if (del) {
	if (isProduction) deleteSync(['dist/**'])
	else deleteSync(['dev/**'])
}

export default {
	input: input || {
		main: 'src/main.js'
	},
	output: output || {
		format: format || 'iife',
		dir: path.normalize(isProduction ? 'dist' : 'dev'),
		sourcemap: !isProduction,
		globals
	},
	external,
	plugins: [
		copy(copyOptions, {
			verbose: true,
			watch: !isProduction
		}),
		progress({
			clearLine: false
		}),
		eslint({
			exclude: ['src/static/**.*', '../../../**/**.*', '**/*.efml']
		}),
		esbuild({
			target: target || 'es2015',
			sourceMap: !isProduction,
			minify: isProduction,
			define: {
				'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
			}
		}),
		resolve({
			browser: true,
			extensions: ['.mjs', '.js', '.jsx', '.json', '.node']
		}),
		json(),
		commonjs(),
		...plugins,
		execute(execCommands),
		isProduction && browsersync(bsConfig)
	],
	watch: !isProduction && {
		include: ['src/**/*.*']
	}
}
