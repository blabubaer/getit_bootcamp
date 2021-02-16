<template>
  <div>
    <Navbar /> 
    <LandPage  />
</div>
  
</template>

<script>
import LandPage from "./components/LandPage.vue";
import Navbar from "./components/layout/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    LandPage,
  },
};
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
