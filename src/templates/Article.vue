<template>
  <Layout>
    <div class="article">
      <div class="banner">
        <img :src="$page.article.image" alt="" />
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
        <main>
          <!-- <h1 class="highlight-overline">{{ $page.article.title }}</h1>
          <h2>{{ $page.article.subhead }}</h2> -->
          <div v-html="$page.article.content" class="markdown-content"></div>
          <Carousel
            v-if="$page.article.carousel && $page.article.carousel.length"
            :images="$page.article.carousel"
          ></Carousel>
        </main>
      </div>
    </div>
  </Layout>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Article",
  metaInfo() {
    const title = `${this.$page.article.title} - Forbes Gray`;
    return {
      title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.article.description
        },
        {
          key: "og:title",
          property: "og:title",
          content: title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.article.description
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.hostname}${this.$page.article.path}`
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${this.hostname}${this.$page.article.image}`
        },
        {
          key: "og:image:alt",
          property: "og:image:alt",
          content: `${this.$page.article.imageAlt}`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.article.description
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: `${this.hostname}${this.$page.article.image}`
        }
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${this.hostname}${this.$page.article.path}`
        }
      ]
    };
  },
  data() {
    return {
      hostname: process.env.GRIDSOME_HOSTNAME
    };
  },
  components: { Carousel }
};
</script>

<page-query>
query ($id: ID!) {
  article(id: $id) {
    title
    description
    tags
    subhead
    content
    image
    imageAlt
    path
  }
}
</page-query>

<style lang="scss">
.article {
  .banner {
    position: relative;
    height: 250px;
    @include tablet {
      height: 450px;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    .banner-title {
      position: absolute;
      inset: 0;
      background-color: rgba(#000, 0.75);
      display: flex;
      align-items: center;
      width: 100%;
      &--inner-wrapper {
        flex: 1;
        h1,
        h2 {
          color: #fff;
          margin-bottom: 0;
        }
        h1 {
          font-size: 1.6rem;
        }
        h2 {
          font-size: 1.2rem;
        }
        @include tablet {
          h1 {
            font-size: 2.6rem;
          }
          h2 {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
  .breadcrumbs {
    margin-top: 0;
  }
  .markdown-content {
    p + h2,
    p + h3,
    p + h4,
    p + h5,
    p + h6 {
      margin-top: 2rem;
    }
  }
}
</style>
