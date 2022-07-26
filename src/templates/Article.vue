<template>
  <Layout>
    <main class="article">
      <div class="banner">
        <img :src="$page.article.image" :alt="$page.article.imageAlt" />
        <div class="banner-title">
          <div class="container banner-title--inner-wrapper">
            <h1 class="">{{ $page.article.title }}</h1>
            <h2 v-if="$page.article.subhead" class="highlight-overline">
              {{ $page.article.subhead }}
            </h2>
          </div>
        </div>
      </div>
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
              <g-link to="/blog/" itemprop="item" :itemid="`${hostname}/blog/`">
                <span itemprop="name">Blog</span>
                <meta itemprop="position" content="2" />
              </g-link>
            </li>
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              <span itemprop="name">{{ $page.article.title }}</span>
              <meta itemprop="position" content="3" />
            </li>
          </ol>
        </div>
        <article>
          <div class="credits">
            <div v-if="$page.article.team" class="">
              <g-link :to="$page.article.team.path">{{
                $page.article.team.name
              }}</g-link>
              -
              <a
                :href="`https://www.twitter.com/${$page.article.team.twitter}`"
                target="_blank"
                rel="noopener"
                >{{ $page.article.team.twitter }}</a
              >
              <span class="date">
                {{ articleDate }}
              </span>
            </div>
          </div>
          <div v-html="$page.article.content" class="markdown-content"></div>
          <Carousel
            v-if="$page.article.carousel && $page.article.carousel.length"
            :images="$page.article.carousel"
          ></Carousel>
          <div class="article-tags tag-container">
            <g-link
              v-for="tag in $page.article.tags"
              :key="tag.id"
              :to="`${tag.path}`"
              class="tag"
              >{{ tag.title }}</g-link
            >
          </div>
        </article>
      </div>
    </main>
  </Layout>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Article",
  components: { Carousel },
  metaInfo() {
    const title = `${this.$page.article.title} | Forbes Gray | Edinburgh`;
    /**
      Create Article Schema Structured data and include to page meta tags
    **/
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      image: [`${this.hostname}${this.$page.article.image}`],
      datePublished: new Date(this.$page.article.date).toISOString(),
      author: [
        {
          "@type": "Person",
          name: this.$page.article.team.name,
          url: `${this.hostname}${this.$page.article.team.path}`,
          sameAs: this.$page.article.team.links,
        },
      ],
      headline: this.$page.article.title,
      description: this.$page.article.description,
    };

    return {
      title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.article.description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.article.description,
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.hostname}${this.$page.article.path}`,
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${this.hostname}${this.$page.article.image}`,
        },
        {
          key: "og:image:alt",
          property: "og:image:alt",
          content: `${this.$page.article.imageAlt}`,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.article.description,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: `${this.hostname}${this.$page.article.image}`,
        },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${this.hostname}${this.$page.article.path}`,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(articleStructuredData),
        },
      ],
    };
  },
  data() {
    return {
      hostname: process.env.GRIDSOME_HOSTNAME,
    };
  },
  computed: {
    articleDate() {
      const articleDate = new Date(Date.parse(this.$page.article.date));
      return articleDate.toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  article(id: $id) {
    title
    description
    tags {
      id
      title
      path
    }
    subhead
    content
    image
    imageAlt
    path
    team {
      name
      twitter
      path
      links
    }
    date (format: "D MMMM YYYY hh:mm")
  }
}
</page-query>

<style lang="scss">
.article {
  padding-bottom: 4rem;
  .breadcrumbs {
    margin-top: 0;
  }
  .credits {
    font-size: 0.8rem;
    font-weight: bold;
    color: $color-dark-primary;
    .date {
      display: block;
      color: #8fa8b5;
    }
  }
  .markdown-content {
    p + h2,
    p + h3,
    p + h4,
    p + h5,
    p + h6,
    pre + h2,
    pre + h3,
    pre + h4,
    pre + h5,
    pre + h6 {
      margin-top: 2rem;
    }
    p > img {
      display: block;
      max-width: 100%;
      margin: auto;
      @include tablet {
        width: 650px;
        margin: 4rem auto;
      }
    }
    pre {
      background-color: darken($color-dark-primary, 5%);
      border-radius: 0.5rem;
      box-shadow: inset 0 0 1em darken($color-dark-primary, 10%);
      color: white;
      padding: 2rem;
      max-width: 100%;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      code {
        color: white;
        font-size: 1rem;
      }
    }
  }
}
</style>
