<template>
  <div class="article-card">
    <figure>
      <img
        :src="article.image"
        :alt="article.imageAlt"
        width="522"
        height="294"
        loading="lazy"
      />
    </figure>
    <div class="article-card--content">
      <div class="tag-container">
        <g-link
          v-for="(tag, index) in article.tags"
          :key="index"
          :to="tag.path"
          class="tag"
        >
          {{ tag.title }}
        </g-link>
      </div>
      <h2>
        <g-link :to="article.path">{{ article.title }}</g-link>
      </h2>
      <p>{{ article.excerpt || article.description }}</p>
      <g-link :to="article.path" class="arrow">Read More</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.article-card {
  border: 1px solid rgba(#000, 0.05);
  box-shadow: $box-shadow;
  figure {
    display: block;
    margin: 0;
    padding: 0;
    aspect-ratio: 16 / 9;
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &--content {
    font-size: 0.95rem;
    padding: 1.5rem;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 1.4rem;
      margin: 0;
    }
    a.arrow {
      padding: 0;
    }
    @include tablet {
      padding: 2rem;
    }
  }
}
</style>
