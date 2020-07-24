<template lang="html">
  <div class="card">
    <figure v-if="image">
      <g-image ref="lazy-image" :src="image" alt="Granite Setts Direct Ltd Website" />
    </figure>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false
    }
  },
  mounted () {
    const targetImage = this.$refs['lazy-image']
    const card = document.querySelector('.card')
    const options = {
      rootMargin: '-500px 0 200px 0'
    }
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) {
          ent.target.src = this.image
          observer.unobserve(ent.target)
        }
      })
    })
    observer.observe(targetImage)
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 80px;
  .description {
    font-size: .9rem;
  }
  figure {
    position: relative;
    margin: 0;
    transition: background-color .5s;
    img {
      position: relative;
      display: block;
      max-width: 100%;
      // filter: grayscale(.6);
      // transition: filter .5s;
    }
    &:hover {
      img {
        // filter: grayscale(0);
      }
    }
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
