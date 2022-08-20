<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="login_footer">
  <nav>
    <ul class="login_footer_row">
      <li>
        <a href="#">Asana.com</a>
      </li>
    </ul>
  </nav>
</div>
<RouterView />
</template>

<style lang="css">
.login_footer {
  color: var(--color-tweak);
}
</style>
