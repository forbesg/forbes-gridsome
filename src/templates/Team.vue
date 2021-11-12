<template>
  <Layout class="team">
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
          <span v-if="$page.team.twitter" class="twitter-link">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter Icon</title>
              <path
                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
              />
            </svg>
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
export default {
  metaInfo() {
    const title = `${
      this.$page.team.name
    } | Meet The Team | Web Developer Edinburgh`;
    return {
      title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.team.description
        },
        {
          key: "og:title",
          property: "og:title",
          content: title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.team.description
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.hostname}${this.$page.team.path}`
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${this.hostname}${this.$page.team.image}`
        },
        {
          key: "og:image:alt",
          property: "og:image:alt",
          content: `${this.$page.team.imageAlt}`
        },
        {
          key: "og:image:width",
          property: "og:image:width",
          content: `600`
        },
        {
          key: "og:image:height",
          property: "og:image:height",
          content: `600`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.team.description
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: `${this.hostname}${this.$page.team.image}`
        }
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${this.hostname}${this.$page.team.path}`
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
      path
    }
  }
</page-query>

<style lang="scss" scoped>
.team {
  // background-color: rgba($color-dark-primary, 0.025);
  @include tablet {
    margin-top: 3rem;
  }
}
.author {
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: $box-shadow;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "aside aside"
    "content content"
    "content content"
    "content content";
  overflow: hidden;
  @include tablet {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-areas:
      "aside content content"
      "aside content content";
  }
  &-image-container {
    grid-area: aside;
    height: 100%;
    width: 100%;
    aspect-ratio: 1 / 1;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(0.5);
      transition: filter 200ms ease-in;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  &-info-container {
    grid-area: content;
    padding: 2rem;
    @include tablet {
      padding: 2rem 3rem;
      padding-right: 3rem;
      padding-left: 3rem;
    }
    h1 {
      margin: 0;
      @include tablet {
        // margin-top: 2rem;
      }
    }
    .twitter-link {
      display: flex;
      align-items: center;
      svg {
        display: inline-block;
        height: 1.25rem;
        width: 1.25rem;
        fill: $color-dark-primary;
        margin-right: 0.5rem;
      }
      a {
        vertical-align: top;
      }
    }
    section {
      margin-top: 2rem;
      h2 {
        font-size: 1.1rem;
      }
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          display: inline-block;
          flex: 0 1 auto;
          font-size: 0.95rem;
          // font-weight: bold;
          margin-right: 1.5rem;
        }
      }
    }
  }
}
</style>
