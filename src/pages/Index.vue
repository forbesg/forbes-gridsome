<template>
  <Layout>
    <hero />
    <skills />
    <section class="feature dark">
      <div class="container">
        <h2 class="highlight-overline">An Introduction</h2>
        <h3>Freelance Web Developer | Eye Fof detail | Sense of humour</h3>
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
          With a focus on website performance, my preferred approach to Website
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
        <g-link to="/about/" class="invert arrow"
          >A Little More About Me</g-link
        >
      </div>
    </section>
    <section class="feature">
      <div class="container">
        <h2 class="highlight-overline">Recent Website Development Projects</h2>
        <div class="cards x2" style="margin-top: 3rem;">
          <card
            v-for="project in $page.featured_projects.edges"
            :key="project.node.id"
            :image="project.node.image"
            :imageAlt="project.node.imageAlt"
          >
            <h3>{{ project.node.title }}</h3>
            <div class="tags">
              <div v-for="tag in project.node.features" :key="tag" class="tag">
                {{ tag }}
              </div>
            </div>
          </card>
        </div>
        <div>
          <g-link to="/portfolio/" class="arrow">View My Portfolio</g-link>
        </div>
      </div>
    </section>
    <get-in-touch></get-in-touch>
    <section class="feature">
      <div class="container">
        <h2 class="highlight-overline">
          Digital Marketing & Web Design Agencies
        </h2>
        <p>
          If you are an agency looking for an extra pair of hands to get your
          clients project over the line, I welcome freelance website development
          enquiries of all types.
        </p>
        <p>
          Feel free to send me a message to arrange a conversation about your
          requirements.
        </p>
        <g-link to="/contact/" class="arrow">Send me a message</g-link>
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
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
export default {
  metaInfo: {
    title: "Freelance Web Developer Edinburgh | Websites and Web Applications"
  },
  components: { Card, GetInTouch, Hero, Skills }
};
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
