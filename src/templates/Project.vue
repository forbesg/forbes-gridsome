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
        </main>
      </div>
      <aside class="">
        <div class="">
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
            target="_blank"
            rel="noopener"
            >{{ $page.project.title }}</a
          >
          <a
            v-if="$page.project.repo"
            :href="$page.project.repo"
            target="_blank"
            rel="noopener"
            >View Git Repo</a
          >
        </div>
      </aside>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Project",
  metaInfo() {
    return {
      title: `${this.$page.project.title} - ${this.$page.project.category
        .split("-")
        .map(w =>
          w
            .charAt(0)
            .toUpperCase()
            .concat(w.slice(1))
        )
        .join(" ")} - Portfolio`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.project.description
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
  }
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
  > div {
    flex: 1 1 400px;
    margin-bottom: 50px;
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
  aside {
    flex: 1 1 300px;
    text-align: right;
    @include tablet {
      flex: 0 0 300px;
      margin-left: 20px;
      padding-top: 20px;
    }
    > div {
      @include tablet {
        position: sticky;
        top: 120px;
      }
      img {
        max-width: 100%;
      }
      ul {
        list-style: none;
        li {
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
