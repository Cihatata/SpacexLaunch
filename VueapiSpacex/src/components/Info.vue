<template>
  <article class="Info">
    <Loading v-if="isLoading && isLoadingApi  "/>
    <div class="container">
      <div class="row">
        <section class="one-half column Info-company">
          <fieldset>
            <legend>Company Information</legend>
            <p>Name: {{infoCompany.name}} </p>
            <p>Founder: {{infoCompany.founder}}</p>
            <p>Founded: {{infoCompany.founded }}</p>
            <p>Headquarter: {{infoCompany.headquarters.city}},{{infoCompany.headquarters.state}}</p>
            <a :href="infoCompany.links.twitter"><p>Twitter</p></a>
            <a :href="infoCompany.links.website">Website</a>
            <h4>Summary</h4>
            <p>{{infoCompany.summary}}</p>

          </fieldset>
        </section>
        <section class="one-half column Info-Api">
          <fieldset>
            <legend>Api Information </legend>
              <p>Project Name: {{infoApi.project_name}} </p>
              <p>Founder: {{infoApi.version}}</p>
              <p>Founded: {{infoApi.project_link }}</p>
              <p>Headquarter: {{infoApi.docs</p>
              <p >{{infoApi.description}}}</p>
          </fieldset>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
  import Loading from './loader'

  export default {
    name: "Info",
    components: {Loading},
    data() {
      return {
        isLoading: true,
        isLoadingApi:true,
        infoCompany: {},
        infoApi:{ },
      }
    },
    created() {
      fetch('https://api.spacexdata.com/v3/info')
        .then((res) => {
          return res.json()
        })
        .then((info) => {
          this.isLoading = false;
          this.infoCompany = info;
        })
      fetch('https://api.spacexdata.com/v3')
        .then((res) => {
          return res.json()
        })
        .then((info) => {
          this.isLoadingApi = false;
          this.infoApi = info;
        })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/base/variables";
  @import "../assets/css/base/normalize";
  @import "../assets/css/base/functions";
  @import "../assets/css/base/base-styles";

  @import "../assets/css/modules/grid";

  .Info {
    position: relative;
    top: 50px;

    &-company {

    }

    &-api {

    }

    fieldset {
      box-shadow: 6px 12px 5px 0 #ddd;
    }
  }

</style>
