import '@babel/polyfill';
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';

import App from './App.vue';
import store from './store';

//router setup
import router from './routes/router';

Vue.use(SuiVue);
Vue.use(require('vue-moment'));
new Vue({
	store,
	el: '#app',
	render: (h) => h(App),
	router,
});
