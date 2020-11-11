<template>
  <div class="main-container">
    <div class="screen flex align-center justify-center fs50">Screen</div>
    <app-theatre></app-theatre>
  </div>
</template>

<script>
import AppTheatre from "@/cmps/AppTheatre.vue";

export default {
  components: {
    AppTheatre,
  },
};
</script>

<style lang="scss" scoped>
.screen {
  background-color: red;
  height: 100px;
  color: black;
  font-weight: bold;
  margin-bottom: 3rem;
  font-family: "Fredoka One", cursive;
}
</style>