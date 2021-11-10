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
            <span itemprop="name">Portfolio</span>
            <meta itemprop="position" content="2" />
          </li>
        </ol>
      </div>
      <h1 class="highlight-overline">Portfolio</h1>
      <p>
        A small selection of recent projects, from simple static brochure
        websites, to web-based mobile applications and web applications.
      </p>
    </div>
    <section class="feature no-top-padding">
      <div class="container">
        <h2>Web Applications</h2>
        <div class="cards-container">
          <div class="cards">
            <card
              v-for="item in $page.webapp_projects.edges"
              :key="item.id"
              :image="item.node.image"
              :imageAlt="item.node.imageAlt"
              :link="{
                path: item.node.path,
                text: 'View',
                class: 'button small'
              }"
            >
              <h3>{{ item.node.title }}</h3>
              <p class="description">{{ item.node.description }}</p>
              <!-- <g-link :to="item.node.path" class="button small">View</g-link> -->
            </card>
          </div>
          <g-link to="/portfolio/web-application/" class="arrow"
            >View more Web Application Projects</g-link
          >
        </div>
      </div>
    </section>

    <section class="feature dark">
      <div class="container">
        <h2>Websites</h2>
        <div class="cards-container">
          <div class="cards">
            <card
              v-for="item in $page.website_projects.edges"
              :key="item.id"
              :image="item.node.image"
              :imageAlt="item.node.imageAlt"
              :link="{
                path: item.node.path,
                text: 'View',
                class: 'button small'
              }"
            >
              <h3>{{ item.node.title }}</h3>
              <p class="description">{{ item.node.description }}</p>
            </card>
          </div>
          <g-link to="/portfolio/website/" class="arrow invert"
            >View more Website Projects</g-link
          >
        </div>
      </div>
    </section>
    <section class="feature">
      <div class="container">
        <h2>Blackberry Apps</h2>
        <div class="cards-container">
          <div class="cards">
            <card
              v-for="item in $page.blackberry_projects.edges"
              :key="item.id"
              :image="item.node.image"
              :imageAlt="item.node.imageAlt"
            >
              <h3>{{ item.node.title }}</h3>
              <p class="description">{{ item.node.description }}</p>
              <g-link :to="item.node.path" class="button small">View</g-link>
            </card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  webapp_projects: allProject (filter: { category: { eq: "web-application" } }, limit: 3, sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        description
        image
        imageAlt
        path
        order
        fileInfo {
          name
        }
      }
    }
  }
  website_projects: allProject (filter: { category: { eq: "website" } }, limit: 3, sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        description
        image
        imageAlt
        path
        order
        fileInfo {
          name
        }
      }
    }
  }
  blackberry_projects: allProject (filter: { category: { eq: "blackberry" } }, limit: 3, sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        description
        image
        imageAlt
        path
        order
        fileInfo {
          name
        }
      }
    }
  }
}
</page-query>

<script>
import Card from "@/components/Card";
export default {
  components: { Card },
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
          content: `${process.env.GRIDSOME_HOSTNAME}/portfolio/`
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
          href: `${process.env.GRIDSOME_HOSTNAME}/portfolio/`
        }
      ]
    };
  },
  data() {
    return {
      title: "Web Developer Portfolio | Freelance Web Developer Edinburgh",
      description:
        "A selection of recent website development projects, including, Websites, Web Applications and Apps",
      hostname: process.env.GRIDSOME_HOSTNAME
    };
  }
};
</script>
<style lang="scss" scoped>
section {
  h2 {
    margin-bottom: 3rem;
  }
  .cards-container {
    margin-bottom: 0;
  }
}
</style>
