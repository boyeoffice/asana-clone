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
<div class="auth_card">
  <RouterView />
  <div class="login_footer">
    <nav>
      <ul class="login_footer_row">
        <li class="f_login_item" v-for="(item,index) in firstItems" :key="index">
          <a class="tweak" href="#">{{ item }}</a>
        </li>
      </ul>
      <ul class="login_footer_row">
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login_footer {
  display: flex;
  margin-top: 48px;
  align-items: center;
}

.login_footer_row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
}

.login_footer_row:first-child {
  margin-top: 0;
}

.f_login_item+.f_login_item::before {
    content: "•";
    margin: 0 4px;
}

.login_footer {
  color: var(--color-tweak);
}
</style>
