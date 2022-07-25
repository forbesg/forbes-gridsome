<template>
  <Layout>
    <div class="container team">
      <h1 class="highlight-overline">Meet The Team</h1>
      <div class="team-members">
        <div
          v-for="teamMember in $static.team.edges"
          :key="teamMember.id"
          class="team-members-card"
        >
          <div class="team-members-card--image">
            <img :src="teamMember.node.image" :alt="teamMember.node.imageAlt" />
          </div>
          <div class="team-members-card--content">
            <h2>{{ teamMember.node.name }}</h2>
            <h3 class="team-members-card--content--role">
              {{ teamMember.node.position }}
            </h3>
            <g-link :to="teamMember.node.path" class="arrow"
              >View {{ teamMember.node.name }}</g-link
            >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query {
    team: allTeam (sortBy: "name", order: ASC) {
      edges {
        node {
          id
          name
          image
          imageAlt
          position
          path
        }
      }
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    const title = `${this.title} | Web Developer Edinburgh`;
    return {
      title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.description,
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
          content: this.description,
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
      title: "Meet The Team",
      description:
        "A small but freindly team delivering all things high-quality websites and web applications.",
      hostname: process.env.GRIDSOME_HOSTNAME,
    };
  },
};
</script>

<style lang="scss" scoped>
.team {
  &-members {
    display: grid;
    gap: 2rem;
    padding-bottom: 4rem;
    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }
    @include laptop {
      grid-template-columns: repeat(3, 1fr);
    }
    &-card {
      background: #ffff;
      box-shadow: $box-shadow;
      font-size: 16px;
      &--image {
        height: auto;
        width: 100%;
        aspect-ratio: 1 / 1;
        img {
          display: block;
          height: 100%;
          width: 100%;
        }
      }
      &--content {
        padding: 1.5rem;
        h2 {
          font-size: 1.2rem;
          margin: 0 0 0.25rem 0;
        }
        &--role {
          color: rgba($color-dark-primary, 0.75);
          font-size: 0.75rem;
          margin: 0 0 1rem 0;
        }
        a {
          padding: 0;
        }
      }
    }
  }
}
</style>
