import Vue from 'vue';
import vuex from 'vuex';

import home from './home';
// 使用vuex
Vue.use(vuex);

export default new vuex.Store({
    modules: {
        home:home,
    }
})


