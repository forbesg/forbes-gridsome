<template>
  <Layout>
    <hero />
    <skills />
    <section class="feature dark">
      <div class="container">
        <h2 class="highlight-overline">An Introduction</h2>
        <h4>Freelance Web Developer | Eye Fof detail | Sense of humour</h4>
        <p>
          I am a freelance Website Developer in Edinburgh with over
          {{ new Date().getFullYear() - 2014 }} years of web development
          experience.
        </p>
        <p>
          I build fast, responsive, maintainable and SEO friendly business
          websites for the good folk of Scotland and beyond, as well as
          developing more complex web and mobile applications using
          <strong
            >HTML, CSS &amp; Modern JavaScript Frameworks such as Vue JS and
            React</strong
          >.
        </p>
        <p>
          I focus on website performance and my preferred approach to Website
          Development is the JAM Stack architecture (JavaScript, API &amp;
          Markup) which decouples technologies to offer superior website speed,
          security &amp; flexibility than more traditional approaches to Website
          Development.
        </p>
        <p>
          You can view some of my previous web development projects and web
          based playthings on the Portfolio page.
        </p>
        <p>
          Whether you have a new idea that needs to be realised on the web,
          would like to update your existing website using modern web
          technologies, or you just have an enquiry, please do get in touch.
        </p>
        <g-link to="/about" class="invert arrow">A Little More About Me</g-link>
      </div>
    </section>
    <section class="feature">
      <div class="container">
        <h2 class="highlight-overline">Recent Website Development Projects</h2>
        <div class="cards">
          <card
            v-for="project in $page.featured_projects.edges"
            :key="project.node.id"
            :image="project.node.image"
            :imageAlt="project.node.imageAlt"
          >
            <h4>{{ project.node.title }}</h4>
            <div class="tags">
              <div v-for="tag in project.node.features" :key="tag" class="tag">
                {{ tag }}
              </div>
            </div>
          </card>
        </div>
        <div>
          <g-link to="/portfolio" class="button">View Portfolio</g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  featured_projects: allProject (filter: { featured: { eq: true } }) {
    edges {
      node {
        id
        title
        image
        imageAlt
        features
      }
    }
  }
}
</page-query>

<script>
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
export default {
  metaInfo: {
    title:
      "Freelance Web Developer Edinburgh | Website and Web Application Development"
  },
  components: { Card, Hero, Skills }
};
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
