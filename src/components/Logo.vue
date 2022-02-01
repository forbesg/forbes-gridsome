<template id="">
  <div class="logo">
    <img src="/logo.svg" alt="Forbes Gray" />
    <g-link to="/">forbes <span class="text-primary">Gray</span></g-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  flex: 1 1 10rem;
  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  a {
    color: $color-dark-primary;
    font-size: 1em;
  }
}
</style>
