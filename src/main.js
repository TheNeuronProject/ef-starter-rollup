// Import style
import './main.css'

// Import `Hello` template
import Hello from './hello.eft'
// Import helper function and version info from `ef-core`
import {registerProps, version} from 'ef-core'

// Register props for `Hello` template for easier usage
// Can ignore this and apply your data directly to `$data`
const App = registerProps(Hello, {year: {}, version: {}})

// Create an instance for template `App`
const app = new App({year: (new Date()).getFullYear(), version})

// Mount app to document
app.$mount({target: document.body})
