<template>
  <section class="more-services">
    <div class="container">
      <h2>More Services</h2>
      <div class="more-services-grid">
        <div v-for="{ node } in services" :key="node.slug">
          <g-link :to="`/services/${node.slug}/`" :aria-label="node.title">
            <g-image :src="node.icon.src" :alt="node.icon.alt"></g-image>
            <h3>{{ node.title }}</h3>
          </g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "section-more-services",
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.more-services {
  --icon-size: 6rem;
  --columns: 2;
  --gap: 1rem;
  background-color: lighten($color-dark-primary, 1%);
  padding: 2rem 0;
  text-align: center;
  @include laptop {
    --columns: 4;
    --gap: 2rem;
  }
  h2 {
    color: white;
    margin: 0;
    margin-bottom: 2rem;
  }
  &-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: var(--gap);
    > div {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      // background-color: white;
      // background-color: lighten($color-dark-primary, 3%);
      background-color: lighten($color-primary, 0%);
      border-radius: 0.5rem;
      width: 100%;
      transition: background-color 200ms ease-in-out;
      &:hover {
        background-color: lighten($color-primary, 5%);
      }
      a {
        display: block;
        color: white;
        padding: 2rem;
        text-align: center;
        height: 100%;
        h3 {
          color: white;
          font-size: 0.85rem;
          margin: 0;
          @include tablet {
            font-size: 0.95rem;
          }
        }
        img {
          aspect-ratio: 1 / 1;
          width: var(--icon-size);
          height: var(--icon-size);
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>
