import eft from 'rollup-plugin-eft'
import postcss from 'rollup-plugin-postcss'

// Postcss plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'

import { isProduction, from } from './utils.mjs'

export default {
	input: {
		main: 'src/main.js'
	},
	del: true,
	format: 'iife',
	target: 'es2015',
	copyOptions: [
		from('src/index.html').to(''),
		from('src/assets/**.*').to('assets')
	],
	external: [],
	globals: {},
	plugins: [
		eft(),
		postcss({
			extract: true,
			minimize: isProduction,
			sourceMap: !isProduction,
			plugins: [
				simplevars(),
				nested(),
				postcssPresetEnv({ warnForDuplicates: false })
			]
		}),
	],
	execCommands: []
}
