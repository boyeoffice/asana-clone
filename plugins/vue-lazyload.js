import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/img/no_image.jpg',
  loading: '/img/32.gif',
  attempt: 1,
  throttleWait: 200
})
