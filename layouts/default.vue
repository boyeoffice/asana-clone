<template>
  <div class="OLAKUNLE BOYE">
    <div :class="{ 'open-nav': showSidebar, 'sidebar-collapse': true }">
      <div v-if="loading" class="preloader d-flex align-items-center justify-content-center">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <navbar :showNav="showSidebar" @close="toggleSidebar" />
      <div class="wrapper">
        <breaking-news-area />
        <nuxt />
        <main-footer />
      </div>
      <button type="button" v-show="$route.path != '/search'" @click="search" class="btn btn-search"><i class="fa fa-search"></i></button>
      <div v-if="showSidebar" id="bodyClick" @click="toggleSidebar"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BreakingNewsArea from '@/components/BreakingNewsArea.vue'
import MainFooter from '@/components/MainFooter.vue'
export default {
  name: 'Default',
  components: {
    Navbar,
    BreakingNewsArea,
    MainFooter
  },
  data() {
    return {
      showSidebar: false
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    search() {
      this.$router.push('/search')
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    }
  }
}
</script>
