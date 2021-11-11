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
  grid-template-columns: 1fr 1fr;
}
</style>
