<template lang="html">
  <div class="hero">
    <div class="container flex">
      <div class="left">
        <h1>Freelance Website <br />Developer | <span>Edinburgh</span></h1>
        <h2>
          <span
            ref="animate-title"
            data-titles="Bespoke,Lightning-Fast,Responsive,SEO-Friendly"
            class=""
            >{{ animatedTextOutput }}</span
          ><br />
          Websites & Web Applications
        </h2>
        <h3 class="text-primary">JAMStack · CMS · E-Commerce</h3>
        <div class="hero-cta-buttons">
          <g-link to="/portfolio/" class="button">View My Work</g-link>
          <g-link to="/services/" class="arrow">View My Services</g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedTextOutput: "Bespoke, Fast, Responsive, SEO-Friendly",
      wordArray: null
    };
  },
  mounted() {
    const animateText = this.$refs["animate-title"];
    this.animatedTextOutput = "";
    animateText.classList.add("loaded");
    this.wordArray = animateText.dataset.titles.split(",");
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.beginAnimation();
        setInterval(this.beginAnimation, 20000);
      }, 1000);
    });
  },
  methods: {
    animateText(string) {
      let outputString = "";
      for (let index in string) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            outputString += string.charAt(index);
            this.animatedTextOutput = outputString;
          }, 100 * (index * 1));
        });
      }
    },
    beginAnimation() {
      for (let wordIndex in this.wordArray) {
        const timing = 4000 * wordIndex;
        setTimeout(() => {
          this.animateText(this.wordArray[wordIndex]);
        }, timing);
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.beginAnimation);
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background: white;
  .flex {
    background-image: url(/hero-illustration-opaque.svg);
    background-repeat: no-repeat;
    background-position: top 50px right -20px;
    background-size: 80%;
    justify-content: space-between;
    align-items: center;
    min-height: 400px;
    min-height: calc(100vh - 4.875rem);
    @include tablet {
      background-image: url(/hero-illustration.svg);
      background-position: center right;
      background-size: 600px 600px;
      min-height: 600px;
    }
    .left,
    .right {
      position: relative;
      z-index: 1;
      img {
        max-width: 100%;
      }
      @include tablet {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
    }
    h1 {
      font-size: 2.2rem;
      margin: 0 0 2rem 0;
      @include tablet {
        font-size: 2.6rem;
      }
      @include laptop {
        font-size: 3.6rem;
      }
      > span {
        color: rgba($color-primary, 0.4);
        font-size: 0.75em;
      }
    }
    h2,
    h3 {
      margin: 0;
    }
    h2 {
      font-size: 1rem;
      margin-top: 1.25em;
      margin-bottom: 0.5em;
      height: 4em;
      > span {
        display: inline-block;
        font-family: "Catamaran", sans-serif;
        font-size: 1.4em;
        color: $color-primary;
        height: 1.1em;
        opacity: 0;
        text-transform: uppercase;
        &.loaded {
          opacity: 1;
          position: relative;
          &:after {
            visibility: visible;
          }
        }
        &:after {
          content: "|";
          position: absolute;
          top: 0rem;
          bottom: 0;
          right: -0.35em;
          display: inline-block;
          font-weight: 300;
          animation: cursorBlink 1000ms steps(2) forwards infinite;
          visibility: hidden;
        }
      }

      @include tablet {
        font-size: 1.4rem;
      }
    }
    h3 {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      font-family: "Catamaran", sans-serif;
      margin-bottom: 3rem;
      text-transform: uppercase;
      word-spacing: 0.5rem;
      @include tablet {
        font-size: 1.1em;
      }
    }
  }
  &-cta-buttons {
    > a {
      display: block;
      font-size: 1rem;
      margin-bottom: 1rem;
      text-align: center;

      @media (min-width: 468px) {
        display: inline-block;
        &:first-child {
          margin-right: 1.5rem;
        }
      }
    }
  }
}

@keyframes cursorBlink {
  from {
    color: transparent;
  }
  to {
    color: $color-dark-primary;
  }
}
</style>
