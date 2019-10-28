// Import plugins
import copy from 'rollup-plugin-copy-glob'
// Import base config
import base from './rollup.base'

const {input, name, format, copyOptions, plugins, proPath, bundle} = base

const config = {
	input,
	output: {
		name,
		format,
		file: `${proPath}/${bundle}.js`,
		sourcemap: false
	},
	plugins: [
		copy(...copyOptions, {verbose: true}),
		...plugins
	],
}

export default config
