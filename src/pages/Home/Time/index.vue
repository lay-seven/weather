<template>
  <div class="time_container">
    <!-- 显示年份，北京时间 -->
    <div class="time_left_top">{{ year }}年</div>
    <div class="time_left_bottom">{{ month }}月{{ day }}日</div>

    <!-- 显示时间 -->
    <div class="time_middle">{{ hour }}:{{ min }}:{{ second }}</div>

    <!-- 显示农历（开发中） -->
    <div class="time_right">
      <span class="tz">
        {{ add.continent }}
        {{ add.location }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import dayjs from "dayjs";
let utc = require("dayjs/plugin/utc");
let timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);

export default {
  name: "Time",
  data() {
    return {
      year: "2022",
      month: "09",
      day: "01",
      hour: "00",
      min: "00",
      second: "00",
      timer1: null,

    };
  },
  computed: {
    ...mapState({
      tz: (state) => state.home.weather.tz,
      // hour: (state) => state.home.hour,
    }),
    add() {
      let index = this.tz.indexOf("/");
      let add = {
        continent: "",
        location: "",
      };
      if (index + 1) {
        add.continent = this.tz.slice(0, index);
        add.location = this.tz.slice(index + 1);
        return add;
      }
    },
  },
  watch:{
    hour(newVal) {
      this.$store.commit('SETHOUR',newVal)
    }
  },
  //   消除挂载前的000000
  created() {
    let time = dayjs().format("YYYYMMDDHHmmss");
    //   this.year = time.slice(0, 4);
    //   this.month = time.slice(4, 6);
    this.day = time.slice(6, 8);
    this.hour = time.slice(8, 10);
    this.min = time.slice(10, 12);
    this.second = time.slice(12);
  },
  mounted() {
    this.timer1 = setInterval(() => {
      let time = dayjs().tz(this.tz).format("YYYYMMDDHHmmss");
      //   this.year = time.slice(0, 4);  //由于年份与月份变更太少，暂时写死
      //   this.month = time.slice(4, 6);
      this.day = time.slice(6, 8);
      this.hour = time.slice(8, 10);
      this.min = time.slice(10, 12);
      this.second = time.slice(12);
      console.log("输出自Home/Time 84行 计时+1");
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer1);
    console.log("定时器被清除");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.time_container {
  user-select: none;
  position: relative;
  width: 587px;
  height: 110px;
  background-color: #fff;
  border: 1px solid skyblue;
  border-radius: 10px;
  /* overflow: hidden; */
  /* background-color: orange; */
}
.time_left_top {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 25%;
  height: 40%;
  line-height: 44px;
  font-size: 24px;
  /* background-color: rgb(205, 140, 20); */
}
.time_left_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  display: inline-block;
  width: 25%;
  height: 60%;
  line-height: 66px;
  font-size: 30px;
  /* background-color: rgb(205, 140, 20); */
}
.time_middle {
  position: absolute;
  top: 0;
  left: 25%;
  display: inline-block;
  width: 50%;
  height: 110px;
  font-size: 3em;
  line-height: 110px;
  /* background-color: rgb(112, 76, 10); */
}
.time_right {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 25%;
  height: 110px;
  line-height: 110px;
  font-size: 24px;
  /* background-color: rgb(250, 179, 47); */
}
.tz {
  /* display: table-cell;
  vertical-align: middle; */
  display: inline-block;
  vertical-align: middle;
  line-height: 32px;
}
</style>