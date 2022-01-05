<template lang="html">
  <div class="hero">
    <div class="container flex">
      <div class="left">
        <h1>Freelance Website <br />Developer | <span>Edinburgh</span></h1>
        <h2>Bespoke, Fast, Responsive & SEO-Friendly Websites</h2>
        <h3 class="text-primary">JAMStack · CMS · E-Commerce</h3>
        <g-link to="/portfolio/" class="button">View My Work</g-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: white;
  .flex {
    background-image: url(/hero-illustration-opaque.svg);
    background-repeat: no-repeat;
    background-position: top 50px right -20px;
    background-size: 80%;
    justify-content: space-between;
    align-items: center;
    min-height: 400px;
    min-height: calc(100vh - 4.875rem);
    @include tablet {
      background-image: url(/hero-illustration.svg);
      background-position: center right;
      background-size: 600px 600px;
      min-height: 600px;
    }
    .left,
    .right {
      position: relative;
      z-index: 1;
      img {
        max-width: 100%;
      }
      @include tablet {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
    }
    h1 {
      font-size: 2.2rem;
      margin: 0 0 2rem 0;
      @include tablet {
        font-size: 2.6rem;
      }
      @include laptop {
        font-size: 3.6rem;
      }
      > span {
        color: rgba($color-primary, 0.4);
        font-size: 0.75em;
      }
    }
    h2,
    h3 {
      margin-top: 0;
      margin-bottom: 0.75rem;
    }
    h2 {
      font-size: 1.2rem;
      @include tablet {
        font-size: 1.4rem;
      }
      @include laptop {
        font-size: 1.8rem;
      }
    }
    h3 {
      font-size: 1rem;
      font-family: "Catamaran", sans-serif;
      // font-weight: normal;
      margin-bottom: 3rem;
      word-spacing: 0.5rem;
      @include tablet {
        font-size: 1.2rem;
      }
      @include laptop {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
