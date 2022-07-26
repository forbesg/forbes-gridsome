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
  components: { ArticleCard },
  metaInfo() {
    const title = `${this.$page.tag.title} | Blog | Forbes Gray`;
    const description = `A selection of web design and development blog articles tagged ${
      this.$page.tag.title
    }`;
    return {
      title,
      meta: [
        {
          key: "description",
          name: "description",
          content: description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: description,
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.hostname}${this.$route.path}`,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${this.hostname}${this.$route.path}`,
        },
      ],
    };
  },
  data() {
    return {
      hostname: process.env.GRIDSOME_HOSTNAME,
    };
  },
};
</script>

<style lang="scss" scoped>
.article-cards {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin-bottom: 4rem;
  @include laptop {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }
}
</style>
