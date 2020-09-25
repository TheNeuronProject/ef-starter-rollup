import Tpl from './template.eft'

export default class Copyright extends Tpl {
	constructor() {
		super({
			$data: {
				year: (new Date()).getFullYear()
			}
		})
	}
}
