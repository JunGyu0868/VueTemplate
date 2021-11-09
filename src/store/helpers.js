import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export const rootComputed = {
	...mapState('rootStore', Object.keys(state)),
	...mapGetters('rootStore', Object.keys(getters)),
};
export const rootMethods = {
	...mapActions('rootStore', Object.keys(actions)),
	...mapMutations('rootStore', Object.keys(mutations)),
};
