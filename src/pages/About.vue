<template>
  <Layout>
    <div class="container">
      <h1 class="highlight-overline">My Journey to Web Development</h1>
      <h2>In The Beginning</h2>
      <p>
        My name is Forbes Gray, a freelance website developer with over 7 years
        experience building websites and web applications for a variety of
        business' and industries, across Edinburgh and further afield.
      </p>
      <p>
        My interest in Web Development started fairly late. I have a background
        in sales spanning 10 years in the telecoms industry. As my skills grew I
        started up my own company supplying telecoms to business.
      </p>
      <p>
        As part of any new start-up business, spending money was not something I
        wanted to do too much of and yet I knew the importance of having an
        online presence.
      </p>
      <p>
        I decided to try and create my own website using "user friendly" free
        tools that were available at the time. My emails were being hosted by
        Google Apps so I started off with Google Sites as a simple solution.
        Although creating a presence online I was frustrated by the constraints
        of building using a tool like Google Sites (and I wanted rounded
        corners).
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
        Management Systems such as Joomla, Wordpress and MODX. With this came my
        introduction to databases and MySQL.
      </p>
      <h2>Discovering NodeJS</h2>
      <p>
        With the growth of JavaScript and NodeJS, web applications were becoming
        evermore capable and I found my new test. JavaScript became my focus.
      </p>
      <p>
        BlackBerry have always had a place in my heart so I used their platform
        to hone my skills. Creating simple Webworks/Cordova applications gave me
        small projects to to discover the capabilities and pitfalls of
        JavaScript.
      </p>
      <p>
        At the same time I was discovering more about running JavaScript on the
        server with NodeJS and interacting with NoSQL Databases such as MongoDB
        and CouchDB. I created a couple of applications using the MEAN Stack
        using Angular for the front-end.
      </p>
      <p>
        As these new JavaScript frameworks developed I was introduced to a
        number of different approaches to complete a development project, but I
        always found myself striving for faster, performant websites and
        applications.
      </p>
      <h2>JAM Stack Website Development</h2>
      <p>
        My main focus has become building fast, SEO friendly server-side
        rendered and static websites, using many of the modern JavaScript
        frameworks, such as React, Vue, Gatsby, Gridsome (this website) and Nuxt
        JS. Using a JAM Stack architecture (JavaScript, API's &amp; Markup),
        headless Databases, CMS's, and ecommerce services, I am able to quickly
        create performant and secure websites and web applications that search
        engines love.
      </p>
      <p>
        I have become increasingly focused on website speed and since the
        introduction of Google's
        <a href="https://web.dev/vitals/">Core Web Vitals</a> as a metric used
        in their organic search results rankings, the JAM Stack architecture has
        found its place at the forefront of modern Web Development.
      </p>
      <p>
        As an early adopter of new web technologies I am always looking at
        embracing new tools a technologies to improve a websites performance and
        the users experience.
      </p>
      <p>
        Some of my website design and
        <g-link to="/">web application development</g-link> work can be found on
        my Portfolio Page.
      </p>
      <g-link to="/portfolio/" class="arrow">View My Portfolio</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Me - Freelance Web Developer Edinburgh",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Information about Edinburgh freelance Web Developer Forbes Gray and his journey into Website Development"
      }
    ],
    link: [
      {
        key: "canonical",
        rel: "canonical",
        href: `${process.env.GRIDSOME_HOSTNAME}/about/`
      }
    ]
  }
};
</script>

<style lang="scss">
// img {
//   float: right;
//   margin-bottom: 1rem;
//   max-width: 100%;
// }
</style>
