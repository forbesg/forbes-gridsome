<template lang="html">
  <div class="hero">
    <div class="container flex">
      <div class="left">
        <h1>Freelance Web <br />Developer</h1>
        <h2>Bringing Your Ideas to Life</h2>
        <h3 class="text-primary">HTML  ·  CSS  ·  JavaScript</h3>
        <g-link to="/portfolio" class="button">View My Work</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.hero {
  .flex {
    background-image: url(/hero-illustration-opaque.svg);
    background-repeat: no-repeat;
    background-position: top 50px right -20px;
    background-size: 80%;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    @include tablet {
      background-image: url(/hero-illustration.svg);
      background-position: center right;
      background-size: 600px 600px;
      height: 600px;
    }
    .left, .right {
      h1 {
        // font-size: 2rem;
      }
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
