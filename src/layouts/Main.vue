<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import SidebarVue from '@/components/Main/Sidebar.vue';
  import Sidebar from '../components/Main/Sidebar.vue';
  import HomeHeader from '../components/Main/HomeHeader.vue'
</script>

<template>
  <div class="dashboard full_page flex flex-initial ">
    <div class="flex">
      <Sidebar />
    </div>
    <div class="flex flex-col w-full">
      <HomeHeader />
      <RouterView />
    </div>
  </div>

</template>
