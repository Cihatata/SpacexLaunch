<template>
  <div class="main">
    <div class="row">
      <div class="nine columns launched-block">1/3</div>
      <div class="three columns rocket-block"> <rockets/></div>
    </div>

  </div>
</template>

<script>

  import Rockets from "./rockets";
  export default {
    name: 'Home',
    components: {Rockets},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/skeleton";
  body{
    margin:0 0;
  }
  .launched-block{
    background-color: yellow !important;
    height: 50px;
  }
  .rocket-block{
    background-color: #ddd;
    padding: 20px;

  }

</style>
