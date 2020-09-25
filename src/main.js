// Import style
import './main.css'

// Import templates
import App from './app.eft'
import Hello from './components/hello.eft'
import Copyright from './components/copyright'
import Link from './components/link'
// Import helper function and version info from `ef-core`
import {inform, exec, version} from 'ef-core'

// Prepare a custom component scope for later use
const scope = {Hello}

// Pause rendering
inform()

// Create an instance for template `Hello`
const app = new App({
	footer: new Copyright((new Date()).getFullYear(), 'Yukino Song'),
	$data: {
		version
	}
}, scope)

// Add links
app.links.push(
	new Link('Documents', 'https://ef.js.org/#!guides/quick-start'),
	new Link('Commuinty Chat', 'https://t.me/ef_js'),
	new Link('Twitter', 'https://twitter.com/classicoldsong'),
	new Link('GitHub', 'https://github.com/TheNeuronProject/ef.js')
)

// Mount app to document
app.$mount({target: document.body})

// Resume rendering
exec()
