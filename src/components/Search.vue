<template>
  <div>
    <!-- <el-input placeholder="请输入城市名" v-model="input">
      <el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
    </el-input> -->
    <!-- 此处为容器 -->
    <div id="wrapper">
      <div class="head">

        <!-- 搜索框上面的内容 -->
        <div class="search_top"></div>

        <!-- 后续加入动画效果 -->
        <!-- <transition name="search"> -->
          <!-- 搜索部分 -->
          <div class="search">
            <input type="text" class="input" placeholder="请输入城市" v-model="inputCity.location"/>
            <span class="btn_box">
              <!-- 搜索按钮 -->
              <input type="submit" @click="submit" class="btn_search" value="查询天气" />
            </span>
          </div>
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Search",
  data() {
    return {
      input: "",
      inputCity:{
        location:'',
      },
    };
  },
  methods: {
    submit() {
      this.$store.state.home.weather.isShow = false;
      this.$store.state.home.city = this.inputCity.location;
      // console.log(this.$store.state.home.city);
      this.$store.dispatch('home/cityCode',this.inputCity);
      this.inputCity.location = '';
    }
  },
};
</script>

<style scoped>
.head {
  position: relative;
  display: block;
  height: 100%;
  width: 654px;
  margin: 0 auto;
  z-index: 100;
  /* background-color: pink; */
}
.search_top {
  display: block;
  height: 50%;
  position: relative;
  z-index: 0;
  text-align: center;
}
.input {
  display: inline-block;
  width: 443px;
  padding-right: 87px;
  height: 16px;
  padding: 12px 16px;
  font-size: 16px;
  margin: 0;
  vertical-align: top;
  outline: 0;
  box-shadow: none;
  border-radius: 10px 0 0 10px;
  border: 2px solid #c4c7ce;
  background: #fff;
  color: #222;
  overflow: hidden;
  box-sizing: content-box;
  text-rendering: auto;
  text-align: start;
}
/* input框获取焦点时修改边框颜色 */
.input:focus{
  border: 2px solid skyblue;
}
.btn_box {
  display: inline-block;
  width: 108px;
  height: 44px;
  position: relative;
  z-index: 2;
  text-align: left;
}
.btn_search {
  cursor: pointer;
  width: 108px;
  height: 44px;
  line-height: 45px;
  padding: 0;
  /* background-color: #4e6ef2; */
  background-color: rgb(12, 178, 243);
  border-radius: 0 10px 10px 0;
  font-size: 17px;
  color: #fff;
  box-shadow: none;
  font-weight: 400;
  border: none;
  outline: 0;
  user-select: none;
  white-space: pre;
  align-items: flex-start;
  text-align: center;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
#wrapper {
  height: 314px;
  display: block;
  /* background-color: skyblue; */
  margin: 0 auto;
  text-align: center;
  text-align: center;
  font-size: 12px;
  font-family: Arial, sans-serif;
}
</style>
