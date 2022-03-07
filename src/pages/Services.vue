<template>
  <Layout>
    <main>
      <header class="banner">
        <img
          src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <div class="banner-title">
          <div class="container banner-title--inner-wrapper">
            <h1 class="highlight-overline">Website Development Services</h1>
            <h2>Design | Development | SEO</h2>
          </div>
        </div>
      </header>
      <article>
        <div class="intro container">
          <h2>Website Design &amp; Development</h2>
          <p>
            As a website developer I love to solve problems. Talking in plain
            English I help my clients to find the right online solution for them
            and their customers. By focusing on my clients successes I can
            ensure that their customers come back again and again.
          </p>
          <p>
            Below you will find some of the services that I provide but I am
            always happy to discuss any new ideas or ventures.
          </p>
        </div>
        <section class="feature dark">
          <div class="container">
            <h2 class="highlight-overline">Brochure Website</h2>
            <h3>Are you looking for a small low cost website?</h3>
            <p>
              If you require and simple brochure website to broadcast you
              business to the world, I can provide a simple static website in no
              time at all. If you are not looking to regularly update your
              website this is a perfect option and as with all static websites,
              <strong>hosting is free</strong>.
            </p>
          </div>
        </section>
        <section class="feature">
          <div class="container">
            <h2 class="highlight-overline">
              Content Management System Website
            </h2>
            <h3>Need to create and update your website?</h3>
            <p>
              If you expect your site to grow and will be regularly updating
              your website, then you will require a Content Managment System
              which will allow you to get stuck in and create and update your
              site.
            </p>
            <p>
              I provide web development services using traditional PHP/MySQL
              content management systems such as Wordpress and Drupal, however I
              prefer to use an more modern approach using <b>headless CMS's</b>
              giving you the speed and security of a static site, with the
              dynamic nature of a tradional CMS.
            </p>
          </div>
        </section>
        <section class="feature dark">
          <div class="container">
            <h2 class="highlight-overline">
              Ecommerce Website
            </h2>
            <h3>Do you want to sell your products online?</h3>
            <p>
              I can help you get your product to market and get you selling in
              no time. Showcase your product and sell to the world and manage
              your sales and product inventory with ease.
            </p>
            <p>
              I can integrate your online ecommerce website with a number of
              ecommerce platforms, such as Shopify and WooCommerce, as well as
              using modern headless ecommerce solutions to add speed and
              flexibility to your customers shopping experience.
            </p>
            <p>
              There are multiple ways to get your online shop up and running and
              I can always find a suitable solution for any budget.
            </p>
          </div>
        </section>
        <section class="feature">
          <div class="container">
            <h2 class="highlight-overline">
              Website Maintenance
            </h2>
            <h3>Do you already have a website?</h3>
            <p>
              If you currently have a website that isn't quite working or
              looking how you would hope, I can help you to get your site back
              on track.
            </p>
            <h4>Search Engine Optimisation</h4>
            <p>
              If you are not getting the traffic you would like to your site, I
              can help you to optimise your website and content to help you get
              higher in the search engines results.
            </p>
            <h4>Speed Boost</h4>
            <p>
              I love fast websites, and I love making websites fast. Using a
              variety of tools I can identify what is slowing down your site and
              implement changes to get your website up to speed.
            </p>
            <h4>Website face-lift</h4>
            <p>
              If you feel that your site could do with a revamp I can look at
              redesigning your site, either using its current platform or
              migrating the site to a new home.
            </p>
          </div>
        </section>
        <section class="feature dark">
          <div class="container">
            <h2 class="highlight-overline">
              Website Development Services for Designers
            </h2>
            <h3>Are you a designer or have your design already?</h3>
            <p>
              If you need help to develop your website from designs in Sketch,
              Adobe Illustrator or Photoshop, I can help. I can quickly code
              your site from your design templates using best practices and high
              quality, maintainable code.
            </p>
            <g-link to="/contact/" class="arrow"
              >Get in touch to discuss your requirements</g-link
            >
          </div>
        </section>
      </article>
    </main>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Web Development Services | Freelance Web Developer Edinburgh",
      description:
        "Website Development Services including Brochure Website, Content Managment Systems, Ecommerce Website Development and Website Maintenance"
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.description
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${process.env.GRIDSOME_HOSTNAME}/services/`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.title
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.description
        }
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: `${process.env.GRIDSOME_HOSTNAME}/services/`
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
main {
  article {
    section {
      h3 {
        font-size: 1.2rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
  }
}
</style>
