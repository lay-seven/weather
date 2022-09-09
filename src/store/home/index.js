// import dayjs from "dayjs";
import { reqCityCode, reqWeather } from '@/api'

const state = {
    // key: '79ce89a7a9d2afcac3eb3ee3e9861698',
    heKey: '3167dcff0df247b2925882d0011099eb',
    city: '123',
    cityCode: {
        location: '',
    },
    weather: {
        cloud: '',
        dew: '',
        feelsLike: '',
        humidity: '',
        icon: '',
        obsTime: '',
        precip: '',//当前小时累积降水量
        temp: '',
        text: '',
        vis: '',
        windDir: '',
        windScale: '',
        windSpeed: '',
    }
};

const actions = {
    // 通过api里的接口函数调用，向服务器发请求
    async cityCode({ commit }, inputCity) {
        let result = await reqCityCode(inputCity);
        // if (result.code == 200) {
        let locationId = { location: result.location[0].id };
        console.log(locationId);
        let weather = await reqWeather(locationId);
        if (weather.code == 200) {
            console.log(weather.now);
            commit('WEATHER', weather.now)
            // console.log(weather.now);
        } else {
            console.log(weather);
        }
        // commit("CITYCODE", weather.data)
        // } else {
        //     console.log('错误', result);
        //     console.log(result.location[0].id);
        // }
    }
};

const mutations = {
    // 地理信息api
    // https://geoapi.qweather.com/v2/city/lookup?[请求参数]

    // 天气api
    // https://devapi.qweather.com/v7/weather/24h?location=101010100&key=你的KEY
    WEATHER({ weather }, weatherMsg) {
        weather.cloud = weatherMsg.cloud;
        weather.dew = weatherMsg.dew;
        weather.feelsLike = weatherMsg.feelsLike;
        weather.humidity = weatherMsg.humidity;
        weather.icon = weatherMsg.icon;
        weather.obsTime = weatherMsg.obsTime;
        weather.precip = weatherMsg.precip;//当前小时累积降水量
        weather.temp = weatherMsg.temp;
        weather.text = weatherMsg.text;
        weather.vis = weatherMsg.vis;
        weather.windDir = weatherMsg.windDir;
        weather.windScale = weatherMsg.windScale;
        weather.windSpeed = weatherMsg.windSpeed;
    }
};



export default {
    state,
    actions,
    mutations,
    namespaced: true,
}



