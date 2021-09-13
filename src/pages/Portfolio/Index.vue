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

      <h2>Web Applications</h2>
      <div class="cards">
        <card
          v-for="item in $page.webapp_projects.edges"
          :key="item.id"
          :image="item.node.image"
          :imageAlt="item.node.imageAlt"
        >
          <h3>{{ item.node.title }}</h3>
          <p class="description">{{ item.node.description }}</p>
          <g-link :to="item.node.path" class="button small">View</g-link>
        </card>
      </div>

      <h2>Websites</h2>
      <div class="cards">
        <card
          v-for="item in $page.website_projects.edges"
          :key="item.id"
          :image="item.node.image"
          :imageAlt="item.node.imageAlt"
        >
          <h3>{{ item.node.title }}</h3>
          <p class="description">{{ item.node.description }}</p>
          <g-link :to="item.node.path" class="button small">View</g-link>
        </card>
      </div>

      <h2>Blackberry Apps</h2>
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
  </Layout>
</template>

<page-query>
query {
  webapp_projects: allProject (filter: { category: { eq: "web-application" } }, sortBy: "order", order: ASC) {
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
  website_projects: allProject (filter: { category: { eq: "website" } }, sortBy: "order", order: ASC) {
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
  blackberry_projects: allProject (filter: { category: { eq: "blackberry" } }, sortBy: "order", order: ASC) {
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
  metaInfo: {
    title: "Web Developer Portfolio - Freelance Web Developer Edinburgh",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "A selection of recent website development projects, including, Websites, Web Applications and Apps"
      }
    ],
    link: [
      {
        key: "canonical",
        rel: "canonical",
        href: `${process.env.GRIDSOME_HOSTNAME}/portfolio/`
      }
    ]
  },
  components: { Card },
  data() {
    return {
      hostname: process.env.GRIDSOME_HOSTNAME
    };
  }
};
</script>
