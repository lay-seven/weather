<template>
  <div id="app" class="login">
    <Search></Search>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
// import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Search,
    // Home,
  },
  
};
</script>

<style scoped lang="css">

</style>

