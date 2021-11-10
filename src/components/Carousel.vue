<template>
  <div class="carousel">
    <div class="carousel--inner-wrapper">
      <div v-for="(image, index) in images" :key="`image-${index}`">
        <g-image
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          :data-image-index="index"
          :ref="`image`"
          @click="() => handleImageScroll(index)"
        ></g-image>
      </div>
    </div>
    <div class="dots">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="dot"
        :class="[{ highlight: index === activeImageIndex }]"
        @click="() => handleImageScroll(index)"
      >
        <span class="dot--inner"></span>
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
  },
  data() {
    return {
      activeImageIndex: 0
    };
  },
  mounted() {
    const images = this.$refs["image"];
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeImageIndex = parseInt(
              entry.target.dataset.imageIndex,
              10
            );
          }
        });
      },
      { threshold: 1.0 }
    );

    images.forEach(image => {
      observer.observe(image);
    });
  },
  methods: {
    handleImageScroll(index) {
      const carousel = document.querySelector(".carousel--inner-wrapper");
      this.activeImageIndex = index;
      this.$refs[`image`][index].scrollIntoView({
        block: "center",
        inline: "center"
      });
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
    scroll-behavior: smooth;
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
  .dots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    width: max-content;
    margin: 2rem auto;
    .dot {
      display: inline-block;
      background: $color-primary;
      border-radius: 0.25rem;
      cursor: pointer;
      height: 0.75rem;
      width: 0.75rem;
      padding: 0.25rem;
      &--inner {
        display: block;
        height: 100%;
      }
      &.highlight {
        cursor: initial;
        .dot--inner {
          transition: all 200ms 200ms ease-in;
          background-color: white;
          border-radius: 0.15rem;
        }
      }
    }
  }
}
</style>
