<template>
  <div class="layout">
    <main-header :scrolled="scrolled" />
    <div id="shadow-sentinal"></div>
    <slot/>
    <main-footer />
  </div>
</template>

<script>
  import MainHeader from '@/components/MainHeader'
  import MainFooter from '@/components/MainFooter'
  export default {
    components: { MainFooter, MainHeader },
    data () {
      return {
        scrolled: false
      }
    },
    mounted () {
      if ('IntersectionObserver' in window) {
        const sentinal = document.querySelector('#shadow-sentinal')
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              this.scrolled = true
            } else {
              this.scrolled = false
            }
          })
        }, {  })
        observer.observe(sentinal)
      }
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
  .layout {
    padding-top: 80px;
  }
  .container {
    /* Handle full-width image filling the full viewport width on mobile */
    .image-container {
      margin-left: -20px;
      margin-right: -20px;
      img {
        float: none;
        width: 100%;
      }
      @include tablet {
        display: inline-block;
        float: right;
        margin: 0 0 0 1rem;
      }
    }

  }
</style>
