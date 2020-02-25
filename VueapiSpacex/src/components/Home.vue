<template>
  <div class="main">
    <div class="row">
      <div class="nine columns launched-block">1/3</div>
      <div class="three columns rocket-block"  >
        <h3 class="Rockets-h3">Spacex Rockets</h3>
        <Loader v-if="isLoading"/>
        <rockets v-for="rocket in rockets" :rockets="rocket"/>
      </div>
    </div>
  </div>
</template>

<script>

  import Rockets from "./rockets";
  import Loader from './loader'

  export default {
    name: 'Home',
    components: {Rockets,Loader},
    data() {
      return {
        isLoading:true,
        rockets:{

        },
      };
    },
    created() {

      fetch('https://api.spacexdata.com/v3/rockets')
        .then((res) => {
          return res.json()
        })
        .then((rockets) => {
          this.isLoading = false;
          this.rockets = rockets;
        })
    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/skeleton";

  body {
    margin: 0 0;
  }

  .launched-block {
    background-color: yellow !important;
    height: 50px;
  }

  .rocket-block {
    background-color: #ddd;
    padding: 20px;

  }
  .Rockets-h3{
    text-align: center;
    font-size: 2.6em;
  }

</style>
