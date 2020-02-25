<template>
  <aside class="Rockets">
    <div class="Card">
      <div class="Card-img">
        <img src="../assets/rocket.png" alt="rocket-img" width="48px">
      </div>
      <div class="Card-info">
        <router-link :to="rocketDetailPath">
          <div class="Card-info-name"><h4>{{rockets.rocket_name}}</h4></div>
        </router-link>
        <div class="Card-info-detail">
          <p>{{rockets.country}}</p>
          <p v-if="rockets.active"><i></i>Active</p>
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
    props: {
      rockets: {type: Object, required: true}
    },

    components: {

    },
    computed:{
      rocketDetailPath(){
        return `/${this.rockets.rocket_id}`
      }
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


</style>
