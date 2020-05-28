<template>
  <div class="page-area mt-5 mb-5">
    <section class="page-area-detail">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="page-thumbnail">
              <img :src="page.img_url" alt="" />
            </div>
          </div>
          <div class="col-6"></div>
        </div>
      </div>
    </section>
    <section class="page-text mt-5">
      <div class="container">
        <div class="col-6">
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
        title: this.pageTitle
      }
    },
    data() {
      return {
        slug: this.$route.params.slug,
        pageTitle: 'Page',
        page: {
          title: '',
          content: ''
        }
      }
    },
    created() {
      //this.$store.dispatch('getPages')
      this.callPages()
    },
    methods: {
      callPages() {
        if(this.$store.state.pages.length) {
          const pages = this.$store.state.pages.find((el) => el.slug === this.slug)
          this.$store.commit('UPDATE_LOADING', false)
          return this.page = pages
        }
        this.$store.dispatch('getPages').then(pages => {
          this.$store.commit('UPDATE_LOADING', false)
          this.page = pages.find((el) => el.slug === this.slug)
        })
      }
    }
  }
</script>