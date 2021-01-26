import Vue from 'vue'

const state = Vue.observable({
	domain: 'example',
	ltd: 'com'
})

const methods = {
	onInfo() {
		const {
			domain,
			ltd
		} = state
		console.log(`Info ${domain}.${ltd}`)
	}
}

export {
	state,
	methods
}
