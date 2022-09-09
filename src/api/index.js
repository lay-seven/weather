// 统一管理api 接口
import requests from "./request.js"

// 三级联动接口
// GET  /api/product/getBaseCategoryList 无参数

export const reqCategoryList = () => {
    // 发请求
    return requests({ url: '/product/getBaseCategoryList',method:'get' })
}
