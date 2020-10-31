<template>
  <Layout>
    <div class="container">
      <h1 class="highlight-overline">My Journey to Web Development</h1>
      <p>
        My interest in Web Development started fairly late. I have a background
        in sales spanning 10 years in the telecoms industry. As my skills grew
        I started up my own company supplying telecoms to business.
      </p>
      <p>
        As part of any new start-up business, spending money was not something
        I wanted to do too much of and yet I knew the importance of having an
        online presence.
      </p>
      <p>
        I decided to try and create my own website using "user friendly" free t
        ools that were available at the time. My emails were being hosted by
        Google Apps so I started off with Google Sites as a simple solution.
        Although creating a presence online I was frustrated by the constraints
        of building using a tool like Google Sites (and I wanted rounded corners).
      </p>
      <div class="image-container">
        <img src="/images/journey.jpg" alt="My journey to web development" />
      </div>
      <p>
        I had never written any HTML or CSS at this stage but felt that it
        couldn't be hard to create the simple site that I was looking for. I
        started teaching myself HTML and CSS and very quickly was able to create
        a website that I was far more satisfied with, but more importantly found
        that I really enjoyed doing it.
      </p>
      <p>
        I continued to learn and optimise my companies site. In order to make
        the site more maintainable and interactive I started to learn a little
        PHP and got a firmer grasp of JavaScript.
      </p>
      <p>
        I began some other web projects using the evermore popular Content
        Management Systems such as Joomla, Wordpress and MODX. With this came
        my introduction to databases and MySQL.
      </p>
      <p>
        With on growth of JavaScript and NodeJS, web applications were becoming
        evermore capable and I found my new test. JavaScript became my focus.
      </p>
      <p>
        BlackBerry have always had a place in my heart so I used their platform
        to hone my skills. Creating simple Webworks/Cordova applications gave
        me small projects to to discover the capabilities and pitfalls of
        JavaScript.
      </p>
      <p>
        At the same time I was discovering more about running JavaScript on the
        server with NodeJS and interacting with NoSQL Databases such as MongoDB
        and CouchDB. I created a couple of applications using the MEAN Stack
        using Angular for the front-end.
      </p>
      <p>
        Some of my work is shown on my <g-link to="/portfolio">Portfolio Page</g-link>
      </p>
      <p>
        My journey continues...
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me - Freelance Web Developer Edinburgh',
    meta: [{
      key: 'description',
      name: 'description',
      content: 'Information about Edinburgh freelance Web Developer Forbes Gray and his journey into Website Development'
    }],
    link: [
      {
        key: 'canonical',
        rel: 'canonical',
        href: `${process.env.GRIDSOME_HOSTNAME}/about/`
      }
    ],
  }
}
</script>

<style lang="scss">
  // img {
  //   float: right;
  //   margin-bottom: 1rem;
  //   max-width: 100%;
  // }
</style>
