import Tpl from './template.eft'

export default class SpinBox extends Tpl {
	static init(state, $data, watch) {
		let step = 1

		watch('step', ({value}) => {
			step = parseInt(value, 10)
		})

		return {
			methods: {
				increment() {
					$data.value += step
					state.$emit('change')
				},
				decrement() {
					$data.value -= step
					state.$emit('change')
				}
			}
		}
	}

	constructor(value = 0, step = 1) {
		super({
			$data: {
				value,
				step
			}
		})
	}
}
