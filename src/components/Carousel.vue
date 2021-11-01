<template>
  <div class="carousel">
    <div class="carousel--inner-wrapper">
      <div v-for="(image, index) in images" :key="index" class="">
        <g-image
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
        ></g-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  max-width: 100%;
  overflow: hidden;
  &--inner-wrapper {
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(3, 280px);
    grid-gap: 0.75rem;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    padding-left: 33.3333%;
    padding-right: 33.3333%;

    @include tablet {
      grid-template-columns: repeat(3, 330px);
      padding-bottom: 2rem;
    }
    @include laptop {
      padding-left: 20%;
      padding-right: 20%;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      scroll-snap-align: center;
      width: 70%;
      margin: auto;
      img {
        width: 100%;
        margin: auto;
      }
      @include laptop {
        width: 90%;
      }
    }
  }
}
</style>
