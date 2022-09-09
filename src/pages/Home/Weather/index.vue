<template>
  <div class="weather_container">
    <!-- <h1>我是weather</h1> -->
    <!-- <img src="@/assets/images/icons/100-fill.svg" alt="QWeather" width="64" height="64"> -->
    <div class="weather01">
        <div class="weather01_top"></div>
        <div class="weather01_bottom"></div>
    </div>
    <div class="weather02"></div>
    <div class="weather03"></div>
    <div class="weather04"></div>
  </div>
</template>

<script>
export default {
    name:'Weather',
}
</script>

<style>
.weather_container{
    /* border: 0; */
    position: relative;
    width: 100%;
    height: 160px;
    background-color: yellowgreen;
}
.weather01{
    position: absolute;
    left: 0;
    top: 0;
    width: 25%;
    height: 100%;
}
.weather01_top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
}
.weather01_bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
}
.weather02{
    position: absolute;
    left: 25%;
    top: 0;
    width: 25%;
    height: 100%;
}.weather03{
    position: absolute;
    right: 25%;
    top: 0;
    width: 25%;
    height: 100%;
}.weather04{
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
}
</style>