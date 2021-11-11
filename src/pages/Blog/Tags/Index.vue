<template>
  <Layout>
    <div class="container">
      <h1 class="highlight-overline">Filter Blog Posts By Tags</h1>
      <div class="tags-container">
        <g-link
          v-for="(tag, index) in $static.tags.edges"
          :key="index"
          :to="tag.node.path"
          class="tag"
          >{{ tag.node.title }}</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query {
    tags: allTag {
      edges {
        node {
          id,
          title
          path
        }
      }
    }
  }
</static-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tags-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  grid-gap: 0.5rem;
  /* Override tag styles */
  .tag {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
}
</style>
