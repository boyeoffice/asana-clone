<template>
  <div class="post-details mt-4 mt-lg-0">
    
    <section class="post-details-title-area" v-if="post != 'undifined'">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="single-blog-post">
              <div class="blog-thumbnail bg-overlay">
                <v-lazy-image 
                  :srcset="`${post.medium} 300w, ${post.medium_large} 768w`"
                  :alt="post.title.rendered"
                  use-picture
                >
                <source :srcset="`${post.medium} 300w, ${post.medium_large} 768w`" />
                </v-lazy-image>
              </div>
              <div class="post-content">
                <div class="tag">
                  <span>News</span>
                </div>
                <div class="_rtw9s">
                  <p class="post-title">
                    {{ post.title.rendered }}
                  </p>
                  <div class="d-flex">
                    <span class="post-date">
                      {{ post.date | dateformat }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-5 post-news-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="post-details-content">
              <p v-html="post.content.rendered"></p>
            </div>
          </div>
          <div class="col-12 col-lg-4"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PostDetails',
  head() {
    return {
      title: this.post.title.rendered
    }
  },
  async asyncData ({store, params}) {
    const slug = params.slug
    let post = []
    if (store.state.posts.length) {
      post = await store.state.posts.find((el) => el.slug === params.slug)
      store.commit('UPDATE_LOADING', false)
    } else {
      const posts = await store.dispatch('getPosts')
      store.commit('UPDATE_LOADING', false)
      post = posts.find((el) => el.slug === params.slug)
    }
    return { slug, post }
  },
  created() {
    //this.callPosts()
  },
  watch: {
    '$route':'updateTitle'
  },
  methods: {
    updateTitle() {
      document.title = this.post.title.rendered
    },
    callPosts() {
      if(this.$store.state.posts.length) {
        const posts = this.$store.state.posts.find((el) => el.slug === this.slug)
        this.$store.commit('UPDATE_LOADING', false)
        return this.post = posts
      }
      this.$store.dispatch('getPosts').then(posts => {
        this.$store.commit('UPDATE_LOADING', false)
        this.post = posts.find((el) => el.slug === this.slug)
      })
    }
  }
}
</script>
