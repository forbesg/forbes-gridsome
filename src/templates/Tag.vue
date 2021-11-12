<template>
  <Layout>
    <div class="container">
      <h1 class="highlight-overline">Tag - {{ $page.tag.title }}</h1>
      <div class="article-cards">
        <ArticleCard
          v-for="article in $page.articles.edges"
          :key="article.node.id"
          :article="article.node"
        ></ArticleCard>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    tag (id: $id) {
      id
      title
    }
    articles: allArticle (filter: { tags: { id: { in: [$id] } } }) {
      edges {
        node {
          id
          title
          subhead
          description
          image
          imageAlt
          path
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<script>
import ArticleCard from "@/components/ArticleCard";
export default {
  components: { ArticleCard }
};
</script>

<style lang="scss" scoped>
.article-cards {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @include laptop {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }
}
</style>
