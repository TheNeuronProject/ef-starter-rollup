import Tpl from './template.eft'
import { inform, exec } from 'ef-core'

export default class SpinBox extends Tpl {
	constructor(value = 0, step = 1) {
		inform()
		super()

		this.$data.value = value
		this.$data.step = step

		this.$methods = {
			increment({ state }) {
				state.$data.value += parseInt(state.$data.step, 10)
				state.$emit('change')
			},
			decrement({ state }) {
				state.$data.value -= parseInt(state.$data.step, 10)
				state.$emit('change')
			},
		}
		exec()
	}
}
