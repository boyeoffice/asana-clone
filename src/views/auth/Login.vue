<template>
  <div class="login_card_layout">
    <div class="w-full">
      <div class="flex flex-col">
        <a href="#" class="flex items-center self-center flex-col primary_link" style="margin-bottom: 48px;">
          <img src="@/assets/logo.png" style="height: 48px;" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.login_card_layout {
  background-color: var(--color-card-background);
  border-radius: 8px;
  box-shadow: var(--color-box-shadow-large);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  max-width: 440px;
  padding: 48px 32px;
  width: calc(100% - 16px);
}
</style>
