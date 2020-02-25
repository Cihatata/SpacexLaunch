<template>
  <aside class="Rockets">
    <h3 class="Rockets-h3">Spacex Rockets</h3>
    <Loader v-if="isLoading"/>
    <div class="Card" v-for="rocket in rockets">
      <div class="Card-img">
        <img src="../assets/rocket.png" alt="rocket-img" width="48px">
      </div>
      <div class="Card-info">
        <div class="Card-info-name"><h4>{{rocket.rocket_name}}</h4></div>
        <div class="Card-info-detail">
          <p>{{rocket.country}}</p>
          <p v-if="rocket.active"><i></i>Active</p>
          <p v-else>inActive</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  import Loader from './loader';

  export default {
    name: "rockets",
    data() {
      return {
        isLoading: true,
        rockets: {},

      }
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
    components: {
      Loader,
    }
  }
</script>
<style lang="scss" scoped>
  .Card {
    background-color: #fff;
    padding: 25px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 8px;

    &-img {
      width: 40%;
    }

    &-info {
      * {
        margin: 0;
      }

      text-align: center;
    }

  }
  .Rockets-h3{
    text-align: center; 
  }

</style>
