<template>
  <div class="layout">
    <main-header :scrolled="scrolled" />
    <div id="shadow-sentinal"></div>
    <slot />
    <skills />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import Skills from "@/components/Skills";
export default {
  components: { MainFooter, MainHeader, Skills },
  metaInfo: {
    titleTemplate: "%s",
  },
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    if ("IntersectionObserver" in window) {
      const featureSections = document.querySelectorAll(".feature");
      const sentinal = document.querySelector("#shadow-sentinal");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.scrolled = true;
          } else {
            this.scrolled = false;
          }
        });
      }, {});
      observer.observe(sentinal);

      const featureObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-viewport");
            observer.unobserve(entry.target);
          }
        });
      });

      featureSections.forEach((section) => featureObserver.observe(section));
    }
  },
};
</script>

<!-- <static-query>
query {
  metadata {
    siteName
  }
}
</static-query> -->

<style lang="scss">
.layout {
  padding-top: 4.875rem;
  @include tablet {
    padding-top: 5.25rem;
  }
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
