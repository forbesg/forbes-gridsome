<template>
  <Layout>
    <main>
      <hero />
      <!-- <skills /> -->

      <section class="feature dark">
        <div class="container">
          <h2 class="highlight-overline">
            Website Design &amp; Development in Edinburgh
          </h2>
          <div class="cards" style="margin-top: 3rem;">
            <card
              v-for="service in $page.services.edges"
              :key="service.node.id"
              :image="service.node.bannerImage.src"
              :imageAlt="service.node.bannerImage.alt"
              :link="{
                path: service.node.path,
                text: service.node.title,
                class: 'arrow',
              }"
            >
              <h3>{{ service.node.title }}</h3>
              <h4>{{ service.node.subtitle }}</h4>
              <p>
                {{ service.node.description }}
              </p>
            </card>
          </div>
        </div>
      </section>
      <section class="feature">
        <div class="container">
          <h2 class="highlight-overline">
            Recent Website Development Projects
          </h2>
          <div class="cards x2" style="margin-top: 3rem;">
            <card
              v-for="project in $page.featured_projects.edges"
              :key="project.node.id"
              :image="project.node.image"
              :imageAlt="project.node.imageAlt"
              :link="{
                path: project.node.path,
                text: `More About ${project.node.title}`,
                class: 'arrow',
              }"
            >
              <h3>{{ project.node.title }}</h3>
              <div class="tags">
                <div
                  v-for="tag in project.node.features"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </div>
              </div>
              <p>
                {{ project.node.description }}
                <!-- <g-link :to="project.node.path" class="arrow"
                  >More About {{ project.node.title }}</g-link
                > -->
              </p>
            </card>
          </div>
          <div>
            <g-link to="/portfolio/" class="arrow">View My Portfolio</g-link>
          </div>
        </div>
      </section>
    </main>
    <article class="feature dark">
      <div class="container">
        <h2 class="highlight-overline">Forbes Gray | An Introduction</h2>
        <h3>Freelance Web Developer | Eye Fof detail | Sense of humour</h3>
        <p>
          I am a freelance Website Developer in Edinburgh with over
          {{ new Date().getFullYear() - 2014 }} years of experience developing
          websites and web applications.
        </p>
        <p>
          I build bespoke, fast, responsive, maintainable and SEO friendly
          business websites for the good folk of Scotland and beyond, as well as
          developing more complex web and mobile applications using
          <strong
            >HTML, CSS &amp; Modern JavaScript Frameworks such as Vue JS and
            React</strong
          >.
        </p>
        <p>
          With a focus on website performance, my preferred approach to Website
          Development is the
          <a href="https://jamstack.org/" target="_blank" rel="noopener"
            >JAMStack</a
          >
          architecture (JavaScript, API &amp; Markup) which decouples
          technologies to offer superior website speed, security &amp;
          flexibility than more traditional approaches to Website Development.
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
    </article>

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
    <get-in-touch></get-in-touch>
  </Layout>
</template>

<page-query>
query {
  featured_projects: allProject (filter: { featured: { eq: true } }) {
    edges {
      node {
        id
        title
        description
        image
        imageAlt
        features
        path
      }
    }
  }
  services: allService {
    edges {
      node {
        id
        title
        subtitle
        description
        path
        bannerImage {
          src
          alt
        }
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
    title: "Freelance Web Developer Edinburgh | Forbes Gray",
  },
  components: { Card, GetInTouch, Hero, Skills },
};
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
