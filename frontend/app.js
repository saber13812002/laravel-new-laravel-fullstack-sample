import Vue from 'vue';
import App from './views/App'
import Component from './components/Components';

window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Object.keys(Components).forEach(item => {
        Vue.component(item, Components[item])
    }
);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
