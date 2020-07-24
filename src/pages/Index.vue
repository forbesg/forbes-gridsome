<template>
  <Layout>
    <hero />
    <skills />
    <section class="feature dark">
      <div class="container">
        <h2 class="highlight-overline">An Introduction</h2>
        <h4>Freelance Web Developer  |  Eye Fof detail  |  Sense of humour</h4>
        <p>
          I am a freelance Website Developer from beautiful and, sometimes sunny,
          Edinburgh.
        </p>
        <p>
          I build fast and maintainable business websites for the good
          folk of Scotland and beyond, as well as developing more complex web
          and mobile applications using <strong>HTML, CSS &amp; JavaScript</strong>.
        </p>
        <p>
          You can view some of my previous projects and playthings on the
          Portfolio page.
        </p>
        <p>
          Whether you have a new idea that needs to be realised on the web or would like to
          update your existing website using modern web technologoes or you just
          have an enquiry, please do get in touch.
        </p>
      </div>
    </section>
    <section class="feature">
      <div class="container">
        <h2 class="highlight-overline">Some of my Website Development</h2>
        <div class="cards">
          <card v-for="project in $page.featured_projects.edges" :key="project.node.id"
                :image="project.node.image">
            <h4>{{project.node.title}}</h4>
            <div class="tags">
              <div v-for="tag in project.node.features" :key="tag" class="tag">{{tag}}</div>
            </div>
          </card>
        </div>
        <div>
          <g-link to="/portfolio" class="button">View my portfolio</g-link>
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
        features
      }
    }
  }
}
</page-query>

<script>
import Card from '@/components/Card'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
export default {
  metaInfo: {
    title: 'Forbes Gray'
  },
  components: { Card, Hero, Skills }
}
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
