import Vue from 'vue';
import Vuex from 'vuex';

//rootStore
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

//pageStore
import sampleStore from '@/views/Sample/store';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		rootStore: { namespaced: true, state, actions, getters, mutations },
		//페이지 별 스토어 추가
		sampleStore,
	},
});
