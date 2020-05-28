<template>
  <div class="single-blog-post mt-4 mt-md-0">
    <div class="blog-thumbnail">
      <nuxt-link to="/">
        <v-lazy-image 
          :srcset="`${post.thumbnail} 150, ${post.medium} 300w, ${post.medium_large} 768w`"
          :alt="post.title.rendered"
          use-picture
        >
        <source :srcset="`${post.thumbnail} 150, ${post.medium} 300w, ${post.medium_large} 768w`" />
        </v-lazy-image>
      </nuxt-link>
    </div>
    <div class="blog-content">
      <span class="post-date">
        {{ post.date | dateformat }}
      </span>
      <nuxt-link :to="`/${post.slug}`" class="post-title">
        {{ post.title.rendered }}
      </nuxt-link>
      <!--<a href="javascript:void(0);" v-if="post.author" class="post-author">
        By Olakunle
      </a>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    post: Object
  },
  methods: {
    updateBlog() {
      this.$store.commit('RECIEVE_BLOG_POST', this.post)
    }
  }
}
</script>
