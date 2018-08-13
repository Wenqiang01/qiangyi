import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
	elementPermissions: [],
	componentPermissions: [],
	errorPop: {
		errorMsg: '',
		isPopUp: false
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})