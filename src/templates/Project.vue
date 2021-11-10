<template>
  <Layout>
    <div class="container project">
      <div class="">
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
              <g-link
                to="/portfolio/"
                itemprop="item"
                :itemid="`${hostname}/portfolio/`"
              >
                <span itemprop="name">Portfolio</span>
                <meta itemprop="position" content="2" />
              </g-link>
            </li>
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              <g-link
                :to="`/portfolio/${this.$route.params.category}/`"
                itemprop="item"
                :itemId="
                  `${hostname}/portfolio/${this.$route.params.category}/`
                "
              >
                <span itemprop="name"
                  >{{
                    this.$route.params.category
                      .split("-")
                      .map(s => {
                        return s.charAt(0).toUpperCase() + s.slice(1);
                      })
                      .join(" ")
                  }}
                </span>
                <meta itemprop="position" content="3" />
              </g-link>
            </li>
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              <span itemprop="name">{{ $page.project.title }}</span>
              <meta itemprop="position" content="4" />
            </li>
          </ol>
        </div>
        <main>
          <h1 class="highlight-overline">{{ $page.project.title }}</h1>
          <h2>{{ $page.project.subhead }}</h2>
          <div v-html="$page.project.content" class="markdown-content"></div>
          <Carousel
            v-if="$page.project.carousel && $page.project.carousel.length"
            :images="$page.project.carousel"
          ></Carousel>
        </main>
      </div>
      <aside class="">
        <div class="aside--sticky-wrapper">
          <img :src="$page.project.image" :alt="$page.project.imageAlt" />
          <h4>Technologies Used</h4>
          <ul>
            <li v-for="(tech, index) in $page.project.features" :key="index">
              {{ tech }}
            </li>
          </ul>
          <a
            v-if="$page.project.url"
            :href="$page.project.url"
            class="external-link"
            >{{ $page.project.title }}
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M90 15v24c0 1.65-1.35 3-3 3h-4c-1.65 0-3-1.35-3-3v-9.93L52.657 56.414c-1.167 1.166-3.076 1.167-4.243 0l-2.828-2.828c-1.167-1.167-1.167-3.076 0-4.242L72.93 22H63c-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3h24c1.65 0 3 1.35 3 3zm-8 61V44H72v30H28V30h30V20H26c-4.411 0-8 3.589-8 8v48c0 4.411 3.589 8 8 8h48c4.411 0 8-3.589 8-8z"
              />
            </svg>
          </a>
          <a
            v-if="$page.project.repo"
            :href="$page.project.repo"
            target="_blank"
            rel="noopener"
            class="external-link"
            >View Git Repo
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              xml:space="preserve"
            >
              <path
                d="M90 15v24c0 1.65-1.35 3-3 3h-4c-1.65 0-3-1.35-3-3v-9.93L52.657 56.414c-1.167 1.166-3.076 1.167-4.243 0l-2.828-2.828c-1.167-1.167-1.167-3.076 0-4.242L72.93 22H63c-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3h24c1.65 0 3 1.35 3 3zm-8 61V44H72v30H28V30h30V20H26c-4.411 0-8 3.589-8 8v48c0 4.411 3.589 8 8 8h48c4.411 0 8-3.589 8-8z"
              />
            </svg>
          </a>
        </div>
      </aside>
    </div>
  </Layout>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Project",
  metaInfo() {
    const title = `${this.$page.project.title} | ${this.$page.project.category
      .split("-")
      .map(w =>
        w
          .charAt(0)
          .toUpperCase()
          .concat(w.slice(1))
      )
      .join(" ")} | Forbes Gray`;
    return {
      title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.project.description
        },
        {
          key: "og:title",
          property: "og:title",
          content: title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.project.description
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.hostname}${this.$page.project.path}`
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${this.hostname}${this.$page.project.image}`
        },
        {
          key: "og:image:alt",
          property: "og:image:alt",
          content: `${this.$page.project.imageAlt}`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.project.description
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: `${this.hostname}${this.$page.project.image}`
        }
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${this.hostname}${this.$page.project.path}`
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
  project(id: $id) {
    title
    description
    category
    subhead
    content
    image
    imageAlt
    features
    carousel {
      src
      alt
    }
    url
    repo
    path
  }
}
</page-query>

<style lang="scss">
.project {
  display: flex;
  flex-wrap: wrap;
  @include laptop {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "main main aside"
      "main main aside";
  }
  > div {
    flex: 1 1 400px;
    max-width: 100%;
    margin-bottom: 50px;
    @include laptop {
      grid-area: main;
    }
    h1 {
      margin-bottom: 1rem;
    }
    figure {
      margin: auto 0;
      img {
        max-width: 100%;
      }
    }
    img {
      max-width: 100%;
      @include tablet {
        display: inline-block;
        float: left;
        width: 280px;
        max-width: 500px;
        margin: 10px;
        &.full-width {
          float: none;
          margin: 0;
          width: 100%;
          max-width: 100%;
        }
      }
    }
    .markdown-content {
      margin-bottom: 50px;
    }
  }
  main {
  }
  aside {
    flex: 1 1 300px;
    text-align: right;
    @include tablet {
      flex: 0 0 300px;
      margin-left: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    @include laptop {
      grid-area: aside;
    }
    .aside--sticky-wrapper {
      @include tablet {
        position: sticky;
        top: 124px;
        // background-color: rgba($color-primary, 1);
        // background-image: linear-gradient(
        //   180deg,
        //   rgba($color-primary, 0.5),
        //   rgba($color-dark-primary, 0.5)
        // );
        // border-radius: 0.5rem;
        // color: #fff;
        // padding: 1rem;
        // h4 {
        //   color: #fff;
        // }
        // a {
        //   color: lighten($color-primary, 20%);
        //   &:hover {
        //     color: lighten($color-primary, 40%);
        //   }
        // }
      }
      img {
        max-width: 100%;
        border-radius: 0.25rem;
      }
      ul {
        list-style: none;
        li {
          font-size: 0.9rem;
          font-style: oblique;
        }
      }
      a {
        display: block;
      }
    }
  }
}
</style>
