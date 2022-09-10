<template>
  <div class="weather_top_container">
    <transition name="weather">
      <div class="weather_container" v-show="isShow">
        <!-- <h1>我是weather</h1> -->
        <!-- <img src="@/assets/images/icons/100-fill.svg" alt="QWeather" width="64" height="64"> -->
        <div class="weather01">
          <div class="weather01_top">
            <img v-show="icon" :src="iconPath" class="icons" alt="weather" />
          </div>
          <div class="weather01_bottom">
            {{ text }}
            <div class="location">
              {{ cityName }}
            </div>
          </div>
        </div>
        <div class="weather02">
          <div class="weather02_top">{{ temp }}℃</div>
          <div class="weather02_middle">体感温度：{{ feelsLike }}℃</div>
          <div class="weather02_bottom">相对湿度：{{ humidity }}%</div>
        </div>
        <div class="weather03">
          <div class="weather03_top">{{ windDir }}</div>
          <div class="weather03_middle">风力:{{ windScale }}级</div>
          <div class="weather03_bottom">风速{{ windSpeed }} km/h</div>
        </div>
        <div class="weather04">{{  }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Weather",
  computed: {
    ...mapState({
      isShow: (state) => state.home.weather.isShow,
      cityName: (state) => state.home.weather.cityName,
      icon: (state) => state.home.weather.icon,
      dew: (state) => state.home.weather.dew,
      feelsLike: (state) => state.home.weather.feelsLike, // 体感温度 1
      humidity: (state) => state.home.weather.humidity, // 相对湿度，百分比数值 1
      obsTime: (state) => state.home.weather.obsTime, // 观测时间 1
      precip: (state) => state.home.weather.precip, // 当前小时累计降雨量
      temp: (state) => state.home.weather.temp, // 温度
      text: (state) => state.home.weather.text,
      vis: (state) => state.home.weather.vis, //能见度
      windDir: (state) => state.home.weather.windDir, // 风向
      windScale: (state) => state.home.weather.windScale, // 风力等级
      windSpeed: (state) => state.home.weather.windSpeed, // 风速
    }),
    // 动态展示天气icon图标
    iconPath() {
      switch (this.icon) {
        case "100":
          return require(`../../../assets/icons/100-fill.svg`);
        case "101":
          return require(`../../../assets/icons/101-fill.svg`);
        case "102":
          return require(`../../../assets/icons/102-fill.svg`);
        case "103":
          return require(`../../../assets/icons/103-fill.svg`);
        case "104":
          return require(`../../../assets/icons/104-fill.svg`);
        case "150":
          return require(`../../../assets/icons/150-fill.svg`);
        case "151":
          return require(`../../../assets/icons/151-fill.svg`);
        case "152":
          return require(`../../../assets/icons/152-fill.svg`);
        case "153":
          return require(`../../../assets/icons/153-fill.svg`);
        case "300":
          return require(`../../../assets/icons/300-fill.svg`);
        case "301":
          return require(`../../../assets/icons/301-fill.svg`);
        case "302":
          return require(`../../../assets/icons/302-fill.svg`);
        case "303":
          return require(`../../../assets/icons/303-fill.svg`);
        case "304":
          return require(`../../../assets/icons/304-fill.svg`);
        case "305":
          return require(`../../../assets/icons/305-fill.svg`);
        case "306":
          return require(`../../../assets/icons/306-fill.svg`);
        case "307":
          return require(`../../../assets/icons/307-fill.svg`);
        case "308":
          return require(`../../../assets/icons/308-fill.svg`);
        case "309":
          return require(`../../../assets/icons/309-fill.svg`);
        case "310":
          return require(`../../../assets/icons/310-fill.svg`);
        case "311":
          return require(`../../../assets/icons/311-fill.svg`);
        case "312":
          return require(`../../../assets/icons/312-fill.svg`);
        case "313":
          return require(`../../../assets/icons/313-fill.svg`);
        case "314":
          return require(`../../../assets/icons/314-fill.svg`);
        case "315":
          return require(`../../../assets/icons/315-fill.svg`);
        case "316":
          return require(`../../../assets/icons/316-fill.svg`);
        case "317":
          return require(`../../../assets/icons/317-fill.svg`);
        case "318":
          return require(`../../../assets/icons/318-fill.svg`);
        case "350":
          return require(`../../../assets/icons/350-fill.svg`);
        case "351":
          return require(`../../../assets/icons/351-fill.svg`);
      }
    },
    // greeting() {
    //   // 欢迎语
    //   // let time = parseInt(this.$store.state.home.hour, 10);
      
    //   // console.log(time);
    //   if (time >= 0 && time < 11) return "早上好";
    //   if (time >= 11 && time <= 14) return "中午好";
    //   if (time >= 14 && time <= 18) return "下午好";
    //   return "晚上好";
    // },
    mounted() {
      console.log(this.$store.state);
    },
  },
};
</script>

<style>
.weather_top_container{
  overflow: hidden;
}
.icons {
  width: 64px;
  height: 64px;
  line-height: 80px;
}
.weather_container {
  /* border: 0; */
  position: relative;
  width: 100%;
  height: 160px;
  background-color: #fff;
  border: 1px solid skyblue;
  border-radius: 10px;
  overflow: hidden;
  /* background-color: yellowgreen; */
}
.weather01 {
  position: absolute;
  left: 0;
  top: 0;
  width: 25%;
  height: 100%;
}
.weather01_top {
  display: flex;
  position: absolute;
  justify-content: center;
  /*使子项目垂直居中*/
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
}
.weather01_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  font-size: 18px;
}
.location {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60%;
  font-size: 32px;
  line-height: 48px;
  /* background-color: rgb(127, 25, 42); */
}
.weather02 {
  position: absolute;
  left: 25%;
  top: 0;
  width: 25%;
  height: 100%;
}
.weather02_top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  font-size: 3em;
  line-height: 80px;
}
.weather02_middle {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 25%;
  font-size: 18px;
  line-height: 40px;
}
.weather02_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  font-size: 18px;
  line-height: 40px;
}
.weather03_top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  font-size: 3em;
  line-height: 80px;
}
.weather03_middle {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 25%;
  font-size: 18px;
  line-height: 40px;
}
.weather03_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  font-size: 18px;
  line-height: 40px;
}
.weather03 {
  position: absolute;
  right: 25%;
  top: 0;
  width: 25%;
  height: 100%;
}
.weather04 {
  position: absolute;
  right: 0;
  top: 0;
  width: 25%;
  height: 100%;
  font-size: 2em;
  line-height: 160px;
}
.weather-enter-active{
		animation: animation1 0.5s ;
	}

	.weather-leave-active{
		animation: animation2 0.5s;
	}

	@keyframes animation1 {
		from{
			transform: translateY(-100%);
		}
		to{
			transform: translateY(0px);
		}
	}
  @keyframes animation2 {
		from{
			transform: translateY(0px);
		}
		to{
			transform: translateY(100%);
		}
	}
</style>