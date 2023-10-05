<template>
  <Headerapp></Headerapp>
  <router-view />
</template>
<script>
import Headerapp from "./components/HedarApp.vue";
export default {
  name: "App",
  components: {
    Headerapp,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #ffffff;
}

.router-link-exact-active {
  color: #fdfdfd;
}
body {
  background: linear-gradient(90deg, #00c6ff, #0072ff);
}
.navbar {
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  z-index: 100;
  /* backdrop-filter: blur(40px); */
}
</style>
<!-- نم بحمد الله الاحد الموافق 1/10/20233 -->
