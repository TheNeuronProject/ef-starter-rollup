// Import style
import './main.css'

// Import `Hello` template
import Hello from './hello.eft'
// Import helper function and version info from `ef-core`
import {version} from 'ef-core'

// Create an instance for template `App`
const app = new Hello({
	$data: {
		year: (new Date()).getFullYear(),
		version
	}
})

// Mount app to document
app.$mount({target: document.body})
