<template>
  <section class="breaking-news-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="breaking-news-ticker d-flex align-items-center flex-nowrap"
          >
            <div class="title">
              <h6>Trending</h6>
            </div>
            <div id="BreakingNewsTicker" class="ticker">
              <ul>
                <li
                  v-for="(item, index) in news"
                  :key="index"
                  :class="[
                    {
                      animated: true,
                      tickerHook: index === nextTick,
                      fadeInUp: index === currentTick,
                      fadeOutUp: index === prevTick
                    }
                  ]"
                >
                  <v-lazy-image :srcset="item.thumbnail" :alt="item.title.rendered"></v-lazy-image>
                  <nuxt-link :to="`/${item.slug}`" class="align-self-center"><p>{{ item.title.rendered }}</p></nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BeakingNewArea',
  data() {
    return {
      currentTick: 0,
      prevTick: NaN,
      nextTick: NaN
    }
  },
  created() {
    this.$store.dispatch('getBreakingNews')
  },
  mounted() {
    setInterval(() => this.slideTick(), 3000)
  },
  computed: {
    news() {
      return this.$store.state.breakingNews
    }
  },
  methods: {
    async slideTick() {
      this.prevTick = await this.currentTick
      setTimeout(() => {
        this.currentTick += 1
        if (this.currentTick === this.news.length) {
          this.currentTick = 0
        }
        setTimeout(() => {
          this.nextTick = this.currentTick
        }, 300)
      }, 300)
    }
  }
}
</script>
