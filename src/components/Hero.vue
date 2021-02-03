<template lang="html">
  <div class="hero">
    <div class="container flex">
      <div class="left">
        <h1>Freelance Web <br />Developer | <span>Edinburgh</span></h1>
        <h2>Bringing Your Ideas to Life</h2>
        <h3 class="text-primary">HTML  ·  CSS  ·  JavaScript</h3>
        <g-link to="/portfolio" class="button">View My Work</g-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  // background: linear-gradient(90deg, rgba($color-primary, .05), rgba($color-primary, .2));
  background: $color-light-blue-gradient;
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
      img {
        max-width: 100%;
      }
    }
    h1 {
      font-size: 1.8rem;
      @include tablet {
        font-size: 2.6rem;
      }
      > span {
        color: rgba($color-primary, 0.4);
        font-size: 0.8em;
      }
    }
    h2, h3 {
      margin-top: 0;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.2rem;
      @include tablet {
        font-size: 1.6rem;
      }
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 2.6em;
      word-spacing: 1rem;
      @include tablet {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
