<template>
  <div class="main">
    <Header/>
  </div>
</template>

<script>
  import Header from './Header';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      Header,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  body{
    margin:0 0;
  }

</style>
