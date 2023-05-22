<template lang="html">
  <div class="hero">
    <div class="container">
      <!-- <transition name="fade-in" appear> -->
      <div class="left">
        <h1 class="highlight-overline">
          Freelance Website <br />Developer | <span>Edinburgh</span>
        </h1>
        <!-- <span
          ><span
            ref="animate-title"
            data-titles="Bespoke,Lightning-Fast,Responsive,SEO-Friendly"
            class=""
            >{{ animatedTextOutput }}</span
          ></span
        > -->

        <h2>
          Website & Web Application, Design & Development
        </h2>

        <h3 class="text-primary">JAMStack | CMS | E-Commerce</h3>
        <div class="cube-wrapper">
          <div class="text-cube">
            <span>Bespoke</span>
            <span>Fast</span>
            <span>Responsive</span>
            <span>Secure</span>
            <span>SEO-Friendly</span>
          </div>
        </div>
        <div class="hero-cta-buttons">
          <g-link to="/portfolio/" class="button">View My Work</g-link>
          <g-link to="/services/" class="arrow">View My Services</g-link>
        </div>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       animatedTextOutput: "Bespoke, Fast, Responsive, SEO-Friendly",
//       wordArray: null,
//     };
//   },
// };
</script>

<style lang="scss" scoped>
.hero {
  background: white;
  height: min-content;
  min-height: 550px;
  > .container {
    background-image: url(/hero-illustration-opaque.svg);
    background-repeat: no-repeat;
    background-position: top 50px right -20px;
    background-size: 80%;
    align-items: center;
    @include tablet {
      background-image: url(/hero-illustration.svg);
      background-position: center right;
      background-size: 600px 600px;
      min-height: 600px;
    }
    .left {
      position: relative;
      z-index: 1;
      max-width: 100%;
      padding-top: 3rem;
      padding-bottom: 1rem;

      .cube-wrapper {
        display: relative;
        // max-width: max-content;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 3.5rem;
        width: 100%;
        @include tablet {
          max-width: max-content;
        }
        .text-cube {
          // transform: rotateZ(5deg);
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
          display: flex;
          justify-content: stretch;
          gap: 0.5em;
          > span {
            background-color: $color-dark-primary;
            color: #fff;
            padding: 0.25em 0.5em;
            display: block;
            transform: translateX(25deg);
            text-align: center;
            flex: 1;
            white-space: nowrap;
            &:nth-child(even) {
              background-color: lighten($color-dark-primary, 55%);
              color: $color-dark-primary;
            }
          }
        }
      }

      img {
        max-width: 100%;
      }
      @include tablet {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
      h1 {
        font-size: 2.2rem;
        margin: 0 0 2rem 0;
        @include tablet {
          font-size: 2.6rem;
        }
        @include laptop {
          font-size: clamp(2rem, 3vw, 3rem);
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
        font-size: 1.25rem;
        display: block;
        margin-bottom: 1.25em;
        > span {
          display: block;
          font-family: "Catamaran", sans-serif;
          font-size: 1.6em;
          color: $color-primary;
          height: 1.6em;
          margin-bottom: 0;
          opacity: 0;
          text-transform: uppercase;
          width: max-content;
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
        color: $color-dark-primary;
        justify-content: space-between;
        font-size: 1.1em;
        font-family: "Catamaran", sans-serif;
        font-weight: 300;
        margin-top: 2.5rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        width: 100%;
        word-spacing: 0.5rem;
        @include tablet {
          font-size: 1.1em;
        }
      }
    }
  }
  &-cta-buttons {
    > a {
      display: block;
      font-size: 1rem;
      margin-bottom: 0.5rem;
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
