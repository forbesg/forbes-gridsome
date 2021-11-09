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
        <g-link to="/" class="fixed">Home</g-link>
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
        bottom: 0;
        left: 0;
        background-color: rgba(#444, 0.5);
        text-align: right;
        visibility: hidden;
        z-index: 100;
        transition: backdrop-filter 2s 0s, visibility 0.3s 0.5s;
        a {
          background-color: $color-dark-primary;
          border-radius: 50%;
          color: #fff;
          font-size: 0.9rem;
          padding: 40px;
          position: fixed;
          top: calc(100vh * 0.1);
          right: -230px;
          height: 120px;
          width: 120px;
          display: flex;
          align-items: center;
          transition: color 0.2s 0s, right 0.3s 0s ease-in-out;
          &:nth-child(2) {
            background-color: lighten($color-dark-primary, 5%);
            top: calc(100vh * 0.35);
            transition-delay: 0.2s;
          }
          &:nth-child(3) {
            background-color: lighten($color-dark-primary, 10%);
            top: calc(100vh * 0.6);
            transition-delay: 0.4s;
          }
          @include tablet {
            display: inline-block;
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
            right: -100px;
            transform: right 0.3s 0.3s ease-in-out;
          }
          @include tablet {
            backdrop-filter: none;
          }
        }
        @include tablet {
          position: static;
          visibility: visible;
          background-color: transparent;
          a {
            background-color: transparent;
            color: $color-primary;
            position: static;
            height: auto;
            width: auto;
            padding: 10px 30px;
            &:nth-child(2) {
              background-color: transparent;
            }
            &:nth-child(3) {
              background-color: transparent;
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
