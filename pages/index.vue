<template>
  <div class="mt-md-4">
   <section class="hero-post">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 p-md-0 col-lg-5 p-lg-0">
            <blog-list
              v-for="(post, index) in content1"
              :key="index"
              :post="post"
              class="style-1 post-1"
            />
          </div>
          <div class="col-12 col-md-5 p-md-0  col-lg-3 p-lg-0">
            <div class="row">
              <blog-list
              v-for="(post, index) in content2"
              :post="post"
              :key="index"
              class="style-1 post-2 bg-overlay col-12 col-lg-12"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="intro-news-area mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="intro-news-tab">
              <div class="intro-news-filter d-flex justify-content-between">
                <h6>All the news</h6>
                <nav>
                  <div class="nav nav-tabs" role="tablist">
                    <a
                      v-for="(list, index) in navList"
                      :key="index"
                      @click="selected = index"
                      href="javascript:void(0);"
                      :class="{
                        'nav-item nav-link': true,
                        active: selected === index
                      }"
                      role="tab"
                      :aria-selected="selected === index ? 'true' : 'false'"
                    >
                      {{ list }}
                    </a>
                  </div>
                </nav>
              </div>
              <div class="tab-content">
                <div
                  :class="{
                    'tab-pane fade show': true,
                    active: selected === 0
                  }"
                >
                  <div class="row">
                    <div
                      v-for="(post, index) in newsContent"
                      :key="index"
                      class="col-12 col-sm-6 _fh35s"
                    >
                      <blog-list :post="post" class="_sjr74w" />
                    </div>
                  </div>
                </div>
                <div
                  :class="{
                    'tab-pane fade show': true,
                    active: selected === 1
                  }"
                >
                  <div class="row"></div>
                </div>
                <div
                  :class="{
                    'tab-pane fade show': true,
                    active: selected === 2
                  }"
                >
                  <div class="row"></div>
                </div>
                <div
                  :class="{
                    'tab-pane fade show': true,
                    active: selected === 3
                  }"
                >
                  <div class="row"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4"></div>
        </div>
      </div>
    </section>
    <section class="top-news-area pt-5">
      <div class="container">
        <div class="row">
          <div
            v-for="(post, index) in newsContent"
            :key="index"
            class="col-12 col-sm-6 col-lg-4"
          >
            <blog-list :post="post" class="style-2 mb-5" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue'
export default {
  name: 'IndexPage',
  components: {
    BlogList
  },
  data() {
    return {
      navList: ['latest', 'popular', 'international', 'local'],
      selected: 0
    }
  },
  computed: {
    content1() {
      return this.$store.state.singlePost
    },
    content2() {
      return this.$store.state.twoPosts
    },
    newsContent() {
      return this.$store.state.newsPost
    }
  },
  beforeMount() {
    this.$store.dispatch('getSinglePost')
  }
}
</script>
