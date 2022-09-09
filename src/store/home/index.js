import dayjs from "dayjs";

const state = {
    // key: '79ce89a7a9d2afcac3eb3ee3e9861698',
    heKey:'3167dcff0df247b2925882d0011099eb',
    city: '123',
    cityCode:'',
};

const actions = {};

const mutations = {
    // 地理信息api
    // https://geoapi.qweather.com/v2/city/lookup?[请求参数]

    // 天气api
    // https://devapi.qweather.com/v7/weather/24h?location=101010100&key=你的KEY
    APPLYCITYCODE(state, city) {
        
    }
};



export default {
    state,
    actions,
    mutations,
    namespaced:true,
}



