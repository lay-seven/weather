// 对axios进行二次封装
import axios from "axios";
// import { config } from "vue/types/umd";

// 引入进度条及其样式
import nprogress from "nprogress";
import "nprogress/nprogress.css"

// 1 利用axios对象的create
// request就是axios
const request = axios.create({
    // 配置对象
    // 基础路径，发请求时，路径中自动出现/api
    baseURL: "/api",
    // 代表请求超时时间
    timeout: 5000,

});

// 请求拦截器 在发请求前可以检测并拦截
request.interceptors.request.use((config) => {
    // config 配置对象
    // 进度条开始
    nprogress.start();
    return config;
})
// 响应拦截器
request.interceptors.response.use((response) => {
    // 成功的回调
    // 进度条结束
    nprogress.done();
    return response.data
}, (error) => { 
    // 失败的回调
    return Promise.reject(new Error('fail'));
 })


// 对外暴露
export default request;
