<template lang="html">
  <div class="card">
    <figure v-if="image">
      <img
        ref="lazy-image"
        :src="image"
        :alt="imageAlt"
        width="530"
        height="299"
      />
    </figure>
    <div class="card--content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false
    },
    imageAlt: {
      type: String,
      required: false
    }
  },
  mounted() {
    const targetImage = this.$refs["lazy-image"];
    const card = document.querySelector(".card");
    const options = {
      rootMargin: "-500px 0 200px 0"
    };
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          ent.target.src = this.image;
          observer.unobserve(ent.target);
        }
      });
    });
    observer.observe(targetImage);
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  z-index: 1;
  &--content {
    //color: initial;
    padding: 0.75rem;
    h2,
    h3,
    h4 {
      // color: initial;
      // margin-top: 0;
    }
  }
  .description {
    font-size: 0.95rem;
  }
  figure {
    position: relative;
    margin: 0;
    transition: background-color 0.5s;
    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  a.button {
    margin-top: 1.25rem;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
    > * {
      margin: 5px;
    }
  }
}
</style>
