<template>
  <div id="app">
    <Header/>
    <div class="map">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    name: 'App',
    components: {Header},
  };
</script>

<style lang="scss" scoped>
  @import "./assets/css/skeleton.scss";

  .map{
      top:85px;
      position: relative;
      max-width: 90%;
      background-color: #eee;
      margin-left: auto;
      margin-right:auto;
    }

  #app {

  }

</style>
