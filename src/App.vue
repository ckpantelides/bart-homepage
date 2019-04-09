<template>
  <div id="app">
    <HeroImage/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import HeroImage from "./components/HeroImage.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    HeroImage,
    About,
    Contact,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
