import Tpl from './template.eft'

export default class Copyright extends Tpl {
	constructor(year, author) {
		super({
			$data: {
				year,
				author
			}
		})
	}
}
