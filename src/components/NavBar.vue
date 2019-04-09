<template>
  <div class="navbar">
    <!-- Navigation bar -->
    <nav class="navbar is-link is-fixed-top is-transparent">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#about">
            <span class="icon">
              <i class="fas fa-info" style="color:black"></i>
            </span>
            <span style="color:black">About</span>
          </a>
          <a class="navbar-item" href="#contact">
            <span class="icon">
              <i class="fas fa-envelope" style="color:black"></i>
            </span>
            <span style="color:black">Contact</span>
          </a>
          <a class="navbar-item" href="#home">
            <span class="icon">
              <i class="fas fa-home" style="color:black"></i>
            </span>
            <span style="color:black">Home</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}

.navbar-item {
  color: black;
}
</style>
