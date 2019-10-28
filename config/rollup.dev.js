// Import plugins
import copy from 'rollup-plugin-copy-glob'
// Import base config
import base from './rollup.base'
// Import dev plugins
import liveServer from 'rollup-plugin-live-server'

const { input, name, format, copyOptions, plugins, devPath, bundle } = base

plugins.push(liveServer({
	root: './dev',
	open: true,
	file: 'index.html',
	ignore: '**/*.map'
}))

console.log(format)

const config = {
	input,
	output: {
		name,
		format,
		file: `${devPath}/${bundle}.js`,
		sourcemap: true,
	},
	plugins: [
		copy(...copyOptions, {verbose: true, watch: true}),
		...plugins
	],
	watch: {
		chokidar: true,
		include: ['src/**']
	}
}

export default config
