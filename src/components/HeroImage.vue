<template>
  <div class="hero">
    <!-- Header -->
    <section class="hero is-link is-fullheight" id="home">
      <div class="hero-body">
        <NavBar />
        <div class="container">
          <p class="is-pulled-left" style="clear:both">Hi, I'm</p>
          <h1 class="title is-1 is-pulled-left" style="clear:both">
            Bart Palica
          </h1>
          <h2 class="subtitle is-3 is-pulled-left" style="clear:both">
            qualified electrician
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "HeroImage",
  components: {
    NavBar
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hero-body {
  background-image: url("../images/workshop.jpg");
  background-size: cover;
}

.section-heading {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 6em;
}

@media screen and (max-width: 769px) {
  .is-pulled-left {
    float: none !important;
  }
}
</style>
