// Import base config
import base from './rollup.base'

const {input, name, format, plugins, proPath, bundle} = base

const config = {
	input,
	output: {
		name,
		format,
		file: `${proPath}/${bundle}.js`,
		sourcemap: false
	},
	plugins
}

export default config
