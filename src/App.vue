<template>
  <div id="app" class="login">
    <img class="picture" :src="path" alt="背景图" />
    <Search></Search>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import { mapState } from "vuex";
// import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Search,
    // Home,
  },
  data() {
    return {
      // background: 1,
    };
  },
  computed: {
    ...mapState(["background"]),
    path() {
      return require(`@/assets/images/${this.bgcPath}`);
    },
    bgcPath() {
      return this.background + ".png";
    },
  },
};
</script>

<style scoped lang="css">
.login {
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
}
.picture {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  /* margin: -1px 0px 0px -1px; */
  margin: 0px 0px 0px 0px;
  object-fit: cover;
  padding: 0px;
  position: absolute;
  width: 100%;
}
</style>

