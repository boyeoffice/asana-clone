<template>
  <div class="page-area mt-5 mb-5">
    <section class="page-area-detail">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="page-thumbnail">
              <v-lazy-image :src="page.img_url" :alt="page.title.rendered"></v-lazy-image>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
      </div>
    </section>
    <section class="page-text mt-5">
      <div class="container">
        <div class="col-12">
          <p v-html="page.content.rendered"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'PagesContent',
    head() {
      return {
        title: this.page.title.rendered
      }
    },
    async asyncData({store, params}) {
      let page = {}
      if(store.state.pages.length) {
        page = await store.state.pages.find((el) => el.slug === params.slug)
        store.commit('UPDATE_LOADING', false)
      } else {
        const pages = await store.dispatch('getPages')
        store.commit('UPDATE_LOADING', false)
        page = pages.find((el) => el.slug === params.slug)
      }
      return {page}
    },
    created() {
      //this.$store.dispatch('getPages')
      //this.callPages()
    },
    methods: {
      //
    }
  }
</script>

<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>