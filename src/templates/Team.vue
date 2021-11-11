<template>
  <Layout>
    <div class="container">
      <div class="author">
        <div class="author-image-container">
          <img
            :src="$page.team.image"
            :alt="$page.team.imageAlt"
            width="600"
            height="600"
          />
        </div>
        <div class="author-info-container">
          <h1>{{ $page.team.name }}</h1>
          <span v-if="$page.team.twitter">
            Twitter:
            <a
              :href="`https://www.twitter.com/${$page.team.twitter}`"
              target="_blank"
              rel="noopener"
              >{{ $page.team.twitter }}</a
            >
          </span>
          <div v-html="$page.team.content"></div>

          <section>
            <h2>Favourite Foods</h2>
            <ul>
              <li v-for="food in $page.team.favoriteFoods">{{ food }}</li>
            </ul>
          </section>
          <section>
            <h2>Interests</h2>
            <ul>
              <li v-for="interest in $page.team.interests">{{ interest }}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<page-query>
  query ($id: ID!) {
    team(id: $id) {
      id
      name
      email
      twitter
      image
      imageAlt
      favoriteFoods
      interests
      content
    }
  }
</page-query>

<style lang="scss" scoped>
.author {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "aside aside"
    "content content"
    "content content"
    "content content";
  grid-gap: 2rem;
  @include tablet {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "aside content content"
      "aside content content";
    grid-gap: 3rem;
  }
  &-image-container {
    grid-area: aside;
    aspect-ratio: 1 / 1;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      object-fit: cover;
    }
  }
  &-info-container {
    grid-area: content;
    h1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin: 0;
      @include tablet {
        margin-top: 2rem;
      }
    }
    section {
      h2 {
        font-size: 1.1rem;
      }
      ul {
        margin: 0;
      }
    }
  }
}
</style>
