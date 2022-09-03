<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import SidebarVue from '@/components/Main/Sidebar.vue';
import Sidebar from '../components/Main/Sidebar.vue';
</script>

<template>
  <div class="dashboard full_page flex flex-initial ">
    <Sidebar />
    <RouterView />
  </div>

</template>
