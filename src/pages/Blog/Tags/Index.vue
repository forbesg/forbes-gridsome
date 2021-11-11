<template>
  <Layout>
    <div class="container">
      <h1>Filter Blog Posts By Tags</h1>
      <pre>
        {{ tags }}
      </pre>
      <div class="tags-container">
        <g-link
          v-for="(tag, index) in tags"
          :key="index"
          :to="
            `/blog/tags/${tag
              .toLowerCase()
              .split(' ')
              .join(' ')}`
          "
          class="tag"
          >{{ tag }}</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    articles: allArticle {
      edges {
        node {
          title,
          tags
        }
      }
    }
  }
</page-query>

<script>
export default {
  computed: {
    tags() {
      return this.$page.articles.edges.reduce((tags, edge) => {
        console.log(tags, edge);
        edge.node.tags.forEach(tag => {
          !tags.includes(tag) ? tags.push(tag) : "";
        });
        return tags;
      }, []);
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>

<style lang="scss" scoped></style>
