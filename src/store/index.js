import Vue from 'vue';
import vuex from 'vuex';

import home from './home';
// 使用vuex
Vue.use(vuex);

const state = {
    hour: '',
    background: 10001,
}
const mutations = {
    SETHOUR(state, hour) {
        state.hour = hour;
    },
    CHANGEIMAGE(state) {
        state.background += 1;
        if (state.background == 10004) state.background = 10001;
    }
}

export default new vuex.Store({
    modules: {
        home:home,
    },
    state,
    mutations,
})


