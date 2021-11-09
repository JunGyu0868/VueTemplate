import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';

export const serviceComputed = {
	...mapState('sampleStore', Object.keys(state)),
	...mapGetters('sampleStore', Object.keys(getters)),
};

export const serviceMethods = {
	...mapActions('sampleStore', Object.keys(actions)),
	...mapMutations('sampleStore', Object.keys(mutations)),
};
