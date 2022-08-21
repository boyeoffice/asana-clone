<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const firstItems= ref([
  'Asana.com',
  'Supports',
  'Integration',
  'Forum'
])
</script>

<template>
<div class="auth_card">
  <RouterView />
  <div class="login_footer">
    <nav>
      <ul class="login_footer_row">
        <li v-for="(item,index) in firstItems" :key="index">
          <a href="#">{{ item }}</a>
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
}
.login_footer {
  color: var(--color-tweak);
}
</style>
