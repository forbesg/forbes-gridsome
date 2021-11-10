<template lang="html">
  <div :class="{ shadow: scrolled }" class="main-header">
    <div class="container">
      <div class="logo">
        <img src="/logo.svg" alt="Forbes Gray" />
        <g-link to="/">forbes <span class="text-primary">Gray</span></g-link>
      </div>
      <nav
        :class="{ open: navOpen }"
        @click="toggleDisplayNav"
        class="main-nav"
      >
        <g-link to="/" class="fixed homepage-link">Home</g-link>
        <g-link to="/about/" class="fixed">About</g-link>
        <g-link to="/portfolio/" class="fixed">Portfolio</g-link>
        <g-link to="/blog/" class="fixed">Blog</g-link>
      </nav>
      <div class="action">
        <g-link to="/contact/" class="button">Hire Me</g-link>
        <div @click="toggleDisplayNav" class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false
    };
  },
  props: ["scrolled"],
  methods: {
    toggleDisplayNav() {
      this.navOpen = !this.navOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 0px rgba(#444, 0.3);
  transition: background-color 0.5s ease-in, box-shadow 0.2s ease-in;
  z-index: 99;
  &.shadow {
    background-color: rgba(#fff, 0.9);
    box-shadow: 0 0 1px rgba($color-dark-primary, 0.5);
    backdrop-filter: blur(3px);
    @include tablet {
      backdrop-filter: blur(3px);
    }
  }
  .container {
    display: flex;
    align-items: center;
    > * {
      &.main-nav {
        position: fixed;
        top: 0;
        right: 0;
        // bottom: 0;
        left: 0;
        height: 100vh;
        background-color: rgba(#444, 0.5);
        text-align: right;
        visibility: hidden;
        z-index: 100;
        transition: backdrop-filter 2s 0s, visibility 0.3s 0.5s;
        a {
          background-color: $color-dark-primary;
          background-image: linear-gradient(
            0,
            $color-dark-primary,
            lighten($color-dark-primary, 5%)
          );
          border-radius: 50% 0 0 50%;
          color: #fff;
          font-size: 0.9rem;
          padding: 40px;
          position: fixed;
          top: calc(100vh * 0.05);
          right: -230px;
          height: 100px;
          width: 100px;
          display: flex;
          align-items: center;
          transition: color 0.2s 0s, right 0.3s 0s ease-in-out;
          z-index: 4;
          &:nth-child(2) {
            background-color: lighten($color-dark-primary, 5%);
            background-image: linear-gradient(
              0,
              lighten($color-dark-primary, 5%),
              lighten($color-dark-primary, 10%)
            );
            top: calc(100vh * 0.25);
            transition-delay: 0.1s;
            z-index: 3;
          }
          &:nth-child(3) {
            background-color: lighten($color-dark-primary, 10%);
            background-image: linear-gradient(
              0,
              lighten($color-dark-primary, 10%),
              lighten($color-dark-primary, 15%)
            );
            top: calc(100vh * 0.45);
            transition-delay: 0.2s;
            z-index: 2;
          }
          &:nth-child(4) {
            background-color: lighten($color-dark-primary, 15%);
            background-image: linear-gradient(
              0,
              lighten($color-dark-primary, 15%),
              lighten($color-dark-primary, 25%)
            );
            top: calc(100vh * 0.65);
            transition-delay: 0.3s;
            z-index: 1;
          }

          @include tablet {
            display: inline-block;
            background: none !important;
            border-radius: 0;
            &:hover {
              color: $color-dark-primary;
              transition: color 0.2s 0s;
            }
          }
        }
        &.open {
          backdrop-filter: blur(3px);
          visibility: visible;
          transition: visibility 0s 0s;
          a {
            right: -70px;
            transform: right 0.3s 0.3s ease-in-out;
          }
          @include tablet {
            backdrop-filter: none;
            a.active--exact {
              box-shadow: none;
            }
          }
        }
        @include tablet {
          position: static;
          visibility: visible;
          background-color: transparent;
          height: auto;
          a {
            background-color: transparent;
            color: $color-primary;
            position: static;
            height: auto;
            width: auto;
            padding: 10px 30px;
            transition: color 200ms ease;
            &:nth-child(2) {
              background-color: transparent;
            }
            &:nth-child(3) {
              background-color: transparent;
            }
            &.active:not(.homepage-link) {
              color: $color-dark-primary;
            }
            &.active--exact.homepage-link {
              color: $color-dark-primary;
            }
          }
        }
      }
      a.button {
        display: inline-block;
        font-size: 0.9rem;
        padding: 7px 20px;
      }
      &.logo {
        flex: 1 1 10rem;
        img {
          height: 20px;
          width: 20px;
          margin-right: 10px;
        }
        a {
          color: $color-dark-primary;
          font-size: 1em;
          // font-weight: bold;
        }
      }
      &.action {
        display: flex;
        align-items: center;
        .button {
          font-size: 0.7rem;
          @include tablet {
            font-size: 0.85rem;
          }
        }
        .hamburger {
          position: relative;
          display: inline-block;
          margin-left: 20px;
          > span {
            display: block;
            background-color: $color-dark-primary;
            height: 2px;
            width: 20px;
            margin: 5px 0;
          }
          @include tablet {
            display: none;
          }
        }
        @include tablet {
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
