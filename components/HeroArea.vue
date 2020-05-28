<template>
  <section class="hero-post">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="single-blog-post mt-4 mt-lg-0">
            <div class="blog-thumbnail overlay">
              <nuxt-link to="/">
                <img :src="content1.img" alt="sdsa" />
              </nuxt-link>
            </div>
            <div class="blog-content">
              <span class="post-date">
                {{ content1.date }}
              </span>
              <nuxt-link to="/" class="post-title">
                {{ content1.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            v-for="(item, index) in content"
            :key="index"
            class="single-blog-post mt-4 mt-lg-0"
          >
            <div class="blog-thumbnail overlay">
              <nuxt-link to="/">
                <img :src="item.img" alt="sdsa" />
              </nuxt-link>
            </div>
            <div class="blog-content">
              <span class="post-date">
                {{ item.date }}
              </span>
              <nuxt-link to="/" class="post-title">
                {{ item.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroArea',
  data() {
    return {
      content1: {
        title: 'Trafic problem in Square',
        date: 'June 8, 2018',
        img: '/img/bg-img/1.jpg'
      },
      content: [
        {
          title: 'The Best Way To Spend Your Holiday',
          date: 'June 8, 2018',
          img: '/img/bg-img/2.jpg'
        },
        {
          title: 'Sport Result for the Weekend',
          img: '/img/bg-img/3.jpg',
          date: 'June 8, 2019'
        }
      ]
    }
  }
}
</script>
