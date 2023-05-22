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
      <div class="card--content--body">
        <slot />
      </div>
      <footer v-if="link" class="card--content-footer">
        <g-link :to="link.path" :class="link.class">{{ link.text }}</g-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
    },
    imageAlt: {
      type: String,
      required: false,
    },
    link: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    const targetImage = this.$refs["lazy-image"];
    const card = document.querySelector(".card");
    const options = {
      rootMargin: "-500px 0 200px 0",
    };
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) {
          ent.target.src = this.image;
          observer.unobserve(ent.target);
        }
      });
    });
    observer.observe(targetImage);
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  &--content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: min-content;
    padding: 0.75rem;
    // h2,
    // h3,
    // h4 {
    //   // color: initial;
    //   margin-top: 2rem;
    // }
    &--body {
      flex: 1;
      margin-top: 1rem;
      line-height: 1.5;
      h3 {
        font-size: 1.5rem;
        line-height: 1;
      }
    }
    &--footer {
      flex: 0;
      a {
        font-size: 0.95rem;
      }
    }
  }
  .description {
    font-size: 0.95rem;
  }
  figure {
    position: relative;
    margin: 0;
    transition: background-color 0.5s;
    aspect-ratio: 16 / 9;
    overflow: hidden;
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
