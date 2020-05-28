<template>
  <nav class="navbar navbar-expand-lg navbar-purple fixed-top">
    <div class="container">
      <div class="navbar-translate d-flex d-lg-block justify-content-between align-items-center">
        <nuxt-link to="/" class="navbar-brand">
          <img src="/img/core-img/logo.png" width="110" :alt="siteName" />
        </nuxt-link>
        <button
          :class="{ 'navbar-toggler': true, toggled: showNav }"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="$emit('close')"
        >
          <span class="navbar-toggler-icon bar-1"></span>
          <span class="navbar-toggler-icon bar-2"></span>
          <span class="navbar-toggler-icon bar-3"></span>
        </button>
      </div>
      <div :class="{'collapse navbar-collapse': true, 'has-image': showNav}">
        <form>
          <label for="search" v-show="!search">Search...</label>
          <input type="search" v-model="search" class="form-control">
          <button type="button" class="btn"><i class="fa fa-search"></i></button>
        </form>
        <div class="navbar-custom">
          <div class="container">
            <nuxt-link to="/" class="navbar-brand">
              <img src="/img/core-img/logo.png" width="110" :alt="siteName" />
            </nuxt-link>
          </div>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">home</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    showNav: Boolean,
    navbarBg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      siteName: 'Navbar',
      search: ''
    }
  }
}
</script>
