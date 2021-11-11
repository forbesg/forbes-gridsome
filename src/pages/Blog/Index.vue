<template>
  <Layout>
    <div class="container">
      <div class="breadcrumbs">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <g-link to="/" itemprop="item" :itemid="`${hostname}`">
              <span itemprop="name">Home</span>
              <meta itemprop="position" content="1" />
            </g-link>
          </li>
          <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <span itemprop="name">Blog</span>
            <meta itemprop="position" content="2" />
          </li>
        </ol>
      </div>
      <h1 class="highlight-overline">Blog</h1>
      <div class="articles">
        <article-card
          v-for="article in $page.articles.edges"
          :key="article.id"
          :article="article.node"
        ></article-card>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  articles: allArticle {
    edges {
      node {
        id
        title
        description
        path
        image
        imageAlt
        content
        tags
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
    return {
      title: this.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.description
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${process.env.GRIDSOME_HOSTNAME}/blog/`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.title
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.description
        }
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${process.env.GRIDSOME_HOSTNAME}/blog/`
        }
      ]
    };
  },
  data() {
    return {
      title: "Blog | Forbes Gray | Freelance Web Developer",
      description:
        "Some of my experiences, thoughts and recommendations about all things web related.",
      hostname: process.env.GRIDSOME_HOSTNAME
    };
  }
};
</script>
<style lang="scss" scoped>
.articles {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @include tablet {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
}
section {
  h2 {
    margin-bottom: 3rem;
  }
  .cards-container {
    margin-bottom: 0;
  }
}
</style>
