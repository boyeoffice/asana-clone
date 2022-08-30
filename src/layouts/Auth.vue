<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const firstItems= ref([
  'Asana.com',
  'Supports',
  'Integration',
  'Forum',
  'Developers & API'
])

const secondItems = ref([
  'Resources',
  'Guide',
  'Templates',
  'Pricing',
  'Terms',
  'Privacy'
])
</script>

<template>
  <div class="flex flex-col items-center auth_card">
    <RouterView />
    <div
      class="flex items-center"
      style="margin-top: 48px;">
      <nav>
        <ul class="flex flex-wrap justify-center" style="margin: 8px;">
          <li class="f_login_item" v-for="(item,index) in firstItems" :key="index">
            <a class="tweak" href="#">{{ item }}</a>
          </li>
        </ul>
        <ul class="flex flex-wrap justify-center" style="margin: 0 8px;">
          <li class="f_login_item" v-for="(item,index) in secondItems" :key="index">
            <a class="tweak" href="#">{{ item }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="css">
  .auth_card {
    height: 100vh;
    background: var(--color-background-medium);
  }

  .f_login_item+.f_login_item::before {
    content: "•";
    margin: 0 4px;
  }

  .f_login_item a {
    font-size: 14px;
    line-height: 22px;
  }

.f_login_item a:hover {
  color: var(--color-primary-text-hover);
  fill: var(--color-primary-text-hover);
  background-color: transparent;
}
</style>
