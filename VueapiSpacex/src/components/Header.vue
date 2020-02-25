<template>

  <header class="Header">
        <div class="Header-logo ">
          <img src="../assets/spacexlogo.png" alt="spacexApiLogo" height="60px" >
        </div>
        <nav class="Header-menu">
          <ul class="Header-menu-buttons">
            <li>
              <router-link  to="/" tag="button">Home</router-link>
            </li>
            <li>
              <router-link  to="/launch" tag="button">Launch</router-link>
            </li>
            <li>
              <router-link  to="/" tag="button">Test</router-link>
            </li>
            <li>
              <router-link  to="/" tag="button">Info</router-link>
            </li>
          </ul>
        </nav>
  </header>

</template>

<script>
  export default {
    name: 'Header',

  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/base/variables";
  @import "../assets/css/modules/buttons";

  .Header {
    width: 100%;
    position: fixed;
    background-color: #ddd;
    display: flex;
    align-items: center;
    padding: 1.25em;
    z-index: 1;

    box-sizing: border-box;
    height: 78px;
    &-logo{
      margin-left: 5%;
      width: 25vw;
    }
    &-menu {

      margin-left: auto;
      box-sizing: border-box;
      width: 50%;

      &-buttons{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        margin-right: 10%;


        li{
          box-sizing: border-box;
          list-style: none;
          margin-right:auto;
          margin-left: auto;
          text-align: center;

        };

      }
    }
  }
  button{
    background-color: #62a5d1;
    border-radius: 4px;
    box-shadow: 5px 6px 3px 0 #c2d1d0 ;
    padding: 2px;
    text-align: center;
    height: 40px;
    width: 100px;
  }


</style>
