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
export default {
  data() {
    return {
      title: "Blog Article Tags | Blog | Forbes Gray",
      description: "Blog article tag cloud",
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${process.env.GRIDSOME_HOSTNAME}/blog/tags/`,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${process.env.GRIDSOME_HOSTNAME}/blog/tegs/`,
        },
      ],
    };
  },
};
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
