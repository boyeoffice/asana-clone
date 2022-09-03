<script setup lang="ts">
  //
</script>

<template>
  <aside class="flex">
    <div class="flex bg-dark-tweak flex-auto h-full">
      <div class="flex items-center justify-center w-full" style="height: 72px;">
        <a href="#" class="bg-logo">
        </a>
      </div>
    </div>
  </aside>
</template>

<style>
  aside {
    flex: 0 0 auto;
    transition: margin-left 250ms ease-out,transform 250ms ease-out;
    width: 240px;
  }

  .bg-logo {
    background-image: url(../../assets/Asana-Logo-Horizontal-Coral-White.svg);
    background-position: 26px 0;
    background-repeat: no-repeat;
    background-size: 80px 16px;
    flex-grow: 1;
    height: 16px;
  }
</style>
