<template>
  <div>
    <!-- <div class="backgroundImage"> -->
    <!-- <img class="picture" :src="path" alt="背景图" /> -->
    <div class="home_wrapper">
      <div class="container">
        <Time></Time>
        <Weather></Weather>
      </div>
      <div class="changeImage">
        <button class="changePicture" @click="change">换一张</button>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Weather from "./Weather";
import Time from "./Time";
export default {
  name: "Home",
  components: {
    Weather,
    Time,
  },
  methods: {
    change() {
      this.$store.commit('CHANGEIMAGE')
    }
  },
  // data() {
  //   return {
  //     background: 1,
  //   };
  // },
  // computed: {
  //   path() {
  //     return require(`@/assets/images/${this.bgcPath}`);
  //   },
  //   bgcPath() {
  //     return 10000 + this.background + ".png";
  //   },
  // },
};
</script>

<style scoped>
/* .backgroundImage {
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
} */
/* .picture {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 101%;
  margin: -1px 0px 0px -1px;
  object-fit: cover;
  padding: 0px;
  position: absolute;
  width: 101%;
} */
.home_wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  /* background-color: pink; */
  text-align: center;
  user-select: none;
}
.container {
  position: relative;
  width: 587px;
  height: 100%;
  margin: 0 auto;
  /* background-color: skyblue; */
  text-align: center;
}
.changeImage {
  position: absolute;
  right: 10%;
  bottom: 10%;
}
.changePicture {
  width: 96px;
  height: 48px;
  background-color: rgb(12, 178, 243);
  border-radius: 10px 10px;
  border: 1px solid #c4c7ce;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
</style>