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
    team: allTeam {
      edges {
        node {
          id
          name
          image
          imageAlt
          path
        }
      }
    }
  }
</static-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
.team {
  &-members {
    display: grid;
    gap: 2rem;
    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }
    @include laptop {
      grid-template-columns: repeat(3, 1fr);
    }
    &-card {
      background: #ffff;
      box-shadow: 0 5px 5px rgba(#444, 0.1);
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
          font-size: 1.1rem;
          margin: 0;
        }
        a {
          padding: 0;
        }
      }
    }
  }
}
</style>
