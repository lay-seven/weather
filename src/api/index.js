// 统一管理api 接口
import requests from "./request.js"

// 地理信息api
// https://geoapi.qweather.com/v2/city/lookup?[请求参数]

// 天气api
// https://devapi.qweather.com/v7/weather/24h?location=101010100&key=你的KEY

// import { reqCategoryList } from "@/api";
export const reqCategoryList = () => {
    // 发请求
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

export const reqCityCode = (params) => {
    return requests({ url: 'https://geoapi.qweather.com/v2/city/lookup', method: 'get', params:params})
}

export const reqWeather = (locationId) => {
    return requests({ url:'https://devapi.qweather.com/v7/weather/now',method:'get',params:locationId})
}
