import Vue from 'vue';
import vuex from 'vuex';

import home from './home';
// 使用vuex
Vue.use(vuex);

const state = {
    hour:'',
}
const mutations = {
    SETHOUR(state, hour) {
        state.hour = hour;
    }
}

export default new vuex.Store({
    modules: {
        home:home,
    },
    state,
    mutations,
})


