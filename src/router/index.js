// import Vue from 'vue';//不需要引入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Search from '../components/Search.vue'
import Home from '@/pages/Home';

Vue.use(VueRouter);

// 重写push|replace 保存原来的push方法
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

// 开始重写
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
    routes: [
        {
            path: '',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home
        },
    ]
})