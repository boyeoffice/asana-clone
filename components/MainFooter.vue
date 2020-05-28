<template>
  <footer class="footer-area">
    <div class="footer-logo mb-5">
      <nuxt-link to="/" class="p-3">
        <img src="/img/core-img/logo.png" alt="dea" />
      </nuxt-link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-content text-center">
            <div class="footer-nav">
              <ul>
                <li>
                  <nuxt-link to="/pages/contact">Contact us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pages/about">About us</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="footer-social-info">
              <a
                href="#"
                v-for="(link, index) in socialLink"
                :key="index"
                @mouseover="selected = index"
                @mouseout="selected = NaN"
              >
                <div
                  :class="{
                    'tooltip bs-tooltip-top': true,
                    show: selected === index
                  }"
                  role="tooltip"
                >
                  <div class="arrow"></div>
                  <div class="tooltip-inner">
                    {{ link.title }}
                  </div>
                </div>
                <i :class="[link.icon]"></i>
              </a>
            </div>
            <p class="copywrite-text">
              <a href="#">
                Copyright ©2020 All rights reserved | This template is made with
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      selected: NaN,
      socialLink: [
        { title: 'facebook', icon: 'fa fa-facebook' },
        { title: 'twitter', icon: 'fa fa-twitter' }
      ]
    }
  }
}
</script>
