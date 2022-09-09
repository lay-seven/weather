<template>
  <div>
    <div class="home_wrapper">
      <div class="container">
        <Time></Time>
        <Weather></Weather>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from './Weather'
import Time from './Time'
export default {
  name: "Home",
  components:{
    Weather,
    Time
  },
  data() {
    return {
      
    };
  },
  
};
</script>

<style scoped>
.home_wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  /* background-color: pink; */
  text-align: center;
}
.container {
  position: relative;
  width: 587px;
  height: 100%;
  margin: 0 auto;
  /* background-color: skyblue; */
  text-align: center;
}
</style>