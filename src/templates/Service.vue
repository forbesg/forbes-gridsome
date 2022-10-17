<template>
  <Layout>
    <header class="banner">
      <!-- <img
        src="@/assets/website-development-services-in-edinburgh.jpg"
        alt="Website Development Services in Edinburgh"
      /> -->
      <g-image
        :src="$page.service.bannerImage.src"
        :alt="$page.service.bannerImage.alt"
      ></g-image>
      <div class="banner-title">
        <div class="container banner-title--inner-wrapper">
          <h1 class="highlight-overline">{{ $page.service.title }}</h1>
          <h2>{{ $page.service.subtitle }}</h2>
        </div>
      </div>
    </header>
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
            <g-link
              to="/services/"
              itemprop="item"
              :itemid="`${hostname}/services/`"
            >
              <span itemprop="name">Services</span>
              <meta itemprop="position" content="2" />
            </g-link>
          </li>
          <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <span itemprop="name">{{ $page.service.title }}</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </div>
    </div>
    <article>
      <section v-if="$page.service.intro" class="feature grid grid-x2">
        <div class="container">
          <div v-html="$page.service.content"></div>
          <div>
            <div v-if="$page.service.intro.video" class="video-container">
              <video
                :src="$page.service.intro.video.src"
                autoplay
                loop
                muted
                playsinline
              ></video>
            </div>
          </div>
        </div>
      </section>
      <section class="feature columns">
        <div class="container">
          <div
            v-for="item in $page.service.featureColumns"
            :key="item.title"
            class="column"
          >
            <g-image :src="item.image.src" :alt="item.image.alt" />
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.content }}
            </p>
          </div>
        </div>
      </section>
      <section v-if="$page.service.pricing" class="feature dark grid grid-x3">
        <div class="container-no-padding">
          <h2
            class="highlight-overline inline-block"
            style="display:inline-block;"
          >
            {{ $page.service.pricing.title }}
          </h2>

          <p v-if="$page.service.pricing.introText">
            {{ $page.service.pricing.introText }}
          </p>
          <!-- <p class="price">Prices Start From £450.00</p> -->
        </div>
        <div class="container">
          <div
            v-for="(p, index) in $page.service.packages"
            :key="p.name.replace(' ', '')"
            class="offer-card"
          >
            <div class="offer-card-header">
              <h3>{{ p.name }}</h3>
              <div v-if="p.price">
                <span class="price-tag"
                  ><span class="price-tag--lead">{{ p.price }}</span
                  >.00</span
                >
              </div>
              <div v-else-if="p.priceFrom">
                <span class="price-tag">
                  from
                  <span class="price-tag--lead">{{ p.priceFrom }}</span
                  >.00</span
                >
              </div>
            </div>
            <p class="offer-card--subtitle">What's Included:</p>
            <ul>
              <li
                v-for="(feature, featureIndex) in p.features"
                :key="`${index}-${featureIndex}`"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section v-if="$page.service.featureWide" class="feature-wide">
        <div class="feature-wide-image-container">
          <g-image
            :src="$page.service.featureWide.image.src"
            :alt="$page.service.featureWide.image.alt"
          />
        </div>
        <div class="feature-wide-text-container">
          <div>
            <h2 class="highlight-overline">
              {{ $page.service.featureWide.text.title }}
            </h2>
            <p>
              {{ $page.service.featureWide.text.body }}
            </p>
            <g-link
              :to="$page.service.featureWide.text.button.link"
              class="button"
            >
              {{ $page.service.featureWide.text.button.text }}</g-link
            >
          </div>
        </div>
      </section>
      <SectionMoreServices :services="services" />
    </article>
  </Layout>
</template>

<script>
import SectionMoreServices from "@/components/Section/MoreServices";
export default {
  components: { SectionMoreServices },
  metaInfo() {
    const title = `${this.$page.service.title} | Forbes Gray | Edinburgh`;
    return {
      title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.service.description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.service.description,
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.hostname}${this.$page.service.path}`,
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${this.hostname}${this.$page.service.bannerImage.src}`,
        },
        {
          key: "og:image:alt",
          property: "og:image:alt",
          content: `${this.$page.service.bannerImage.alt}`,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.service.description,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: `${this.hostname}${this.$page.service.bannerImage.src}`,
        },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${this.hostname}${this.$page.service.path}`,
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
    services() {
      console.log(this.$page.service.id);
      // return this.$page.services.edges;
      return this.$page.services.edges.filter(
        (service) => service.node.id !== this.$page.service.id
      );
    },
  },
};
</script>
<page-query>
query ($id: ID!) {
  services: allService {
    edges {
      node {
        slug
        id 
        title
        icon {
          src
          alt
        }
      }
    }
  }
  service(id: $id) {
    slug
    path
    id
    title
    description
    subtitle
    content
    bannerImage {
      src 
      alt
    }
    intro {
      video {
        src
      }
    }
    pricing {
      title
      introText
    }
    packages {
      features
      price
      priceFrom
      name
    }
    featureColumns {
      title
      image {
        src
        alt
      }
      content
    }
    featureWide {
      image {
        src (width: 100, quality:5)
        alt
      }
      text {
        title 
        body 
        button {
          link 
          text
        }
      }
    }
  }
}
</page-query>
<style></style>
