<template>
  <Layout>
    <div class="not-found-container text-center">
      <h1>Page Not Found</h1>
      <img src="/images/404-error-bro.svg" alt="404 - Page Not Found" />
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
    </div>
  </Layout>
</template>

<script></script>

<style lang="scss">
.not-found-container {
  padding: 4rem 2rem;
  max-width: 960px;
  margin: auto;
  h1 {
    font-weight: normal;
    margin: 0;
  }
  img {
    display: block;
    height: auto;
    width: 500px;
    aspect-ratio: 1 / 1;
    max-width: 100%;
    margin: auto;
  }
  a {
    font-weight: 100;
    font-size: 0.85rem;
  }
}
</style>
