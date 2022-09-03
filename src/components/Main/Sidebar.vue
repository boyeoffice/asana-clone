<script setup lang="ts">
  //
</script>

<template>
  <aside class="flex">
    <div class="flex bg-dark-tweak flex-auto h-full">
      <div class="flex items-center justify-center w-full" style="height: 72px;">
        <a href="#" class="bg-logo">
        </a>
        <div class="sidebar_toggle inline-flex items-center justify-center mr-4">
          <svg class="Icon BurgerCollapse" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M11,16h20c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1l0,0C10,16.4,10.4,16,11,16z M1,4h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5l0,0C0,4.4,0.4,4,1,4z M1,28h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,28.4,0.4,28,1,28z M7.7,22.7c0.4-0.4,0.4-1,0-1.4L3.4,17l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L0.6,17l5.7,5.7C6.5,22.9,6.7,23,7,23S7.5,22.9,7.7,22.7z"></path></svg>
        </div>
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

  .sidebar_toggle {
    height: 28px;
    min-height: 28px;
    min-width: 28px;
    width: 28px;
    background: transparent;
    border-color: transparent;
    fill: var(--color-inverse-text);
    transition-duration: .2s;
    transition-property: background,border,fill;
    cursor: pointer;
  }
</style>
